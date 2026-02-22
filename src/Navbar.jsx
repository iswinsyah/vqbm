import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSite } from './context/SiteContext'

const Navbar = () => {
  const { settings, menus } = useSite()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Filter top-level menus and prepare structure
  const parentMenus = menus ? menus.filter(m => !m.parentId) : [];
  const getChildren = (parentId) => menus ? menus.filter(m => m.parentId === parentId) : [];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderMenuItem = (menu) => {
    const children = getChildren(menu.id);
    const hasChildren = children.length > 0;

    if (hasChildren) {
      return (
        <div key={menu.id} className="relative group">
          <button className="flex items-center text-slate-700 hover:text-primary font-medium transition py-2">
            {menu.title} <i className="fa-solid fa-chevron-down text-xs ml-1"></i>
          </button>
          <div className="absolute left-0 mt-0 w-48 bg-white border border-slate-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
            <div className="py-2">
              {children.map(child => (
                child.url.startsWith('http') ? (
                  <a key={child.id} href={child.url} target="_blank" rel="noreferrer" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary">
                    {child.title}
                  </a>
                ) : (
                  <Link key={child.id} to={child.url} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary">
                    {child.title}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      );
    }

    return menu.url.startsWith('http') ? (
      <a key={menu.id} href={menu.url} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-primary font-medium transition">
        {menu.title}
      </a>
    ) : (
      <Link key={menu.id} to={menu.url} className="text-slate-700 hover:text-primary font-medium transition">
        {menu.title}
      </Link>
    );
  };

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md' : 'border-b border-slate-100'}`} id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            {settings.logo ? (
              <img
                src={settings.logo.startsWith('http') ? settings.logo : `/uploads/${settings.logo}`}
                alt="Logo"
                className="h-12 w-auto object-contain rounded-lg"
              />
            ) : (
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-sm">
                <i className="fa-solid fa-quran"></i>
              </div>
            )}
            <div className="flex flex-col">
              <h1 className="font-bold text-lg text-primary leading-none" style={{ fontFamily: 'var(--font-h1)' }}>{settings.title}</h1>
              <span className="text-secondary text-xs font-bold uppercase tracking-widest mt-1">{settings.description}</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {parentMenus.map(menu => renderMenuItem(menu))}

            <a href="#psb" className="bg-[var(--color-btn-urgent)] hover:opacity-90 text-white px-5 py-2 rounded-lg font-medium transition shadow-md flex items-center gap-2 ml-4">
              <i className="fa-solid fa-user-plus text-sm"></i> PSB Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-primary focus:outline-none p-2"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t p-4 space-y-2 shadow-lg max-h-screen overflow-y-auto">
          {parentMenus.map(menu => {
            const children = getChildren(menu.id);
            const hasChildren = children.length > 0;
            if (hasChildren) {
              return (
                <div key={menu.id} className="space-y-1">
                  <div className="px-3 py-2 text-slate-700 font-bold">{menu.title}</div>
                  <div className="pl-4 border-l-2 border-slate-100 ml-3">
                    {children.map(child => (
                      <Link key={child.id} to={child.url} className="block px-3 py-2 text-slate-600 hover:text-primary text-sm">
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
            return (
              <Link key={menu.id} to={menu.url} className="block px-3 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded">
                {menu.title}
              </Link>
            )
          })}
          <a href="#" className="block px-3 py-2 bg-primary text-white text-center rounded mt-4">PSB Online</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar