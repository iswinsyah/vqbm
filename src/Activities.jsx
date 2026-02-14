import { useState, useEffect } from 'react';

const Activities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      time: "05:00 WIB",
      title: "Halaqah Subuh & Setoran Hafalan",
      desc: "Setiap pagi dimulai dengan keberkahan Al-Quran. Santri menyetorkan hafalan baru (Ziyadah) kepada Musyrif bersanad di lingkungan villa yang sejuk."
    },
    {
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      time: "10:00 WIB",
      title: "Kelas Applied AI & Coding",
      desc: "Mempelajari cara membuat website dakwah dan menggunakan tools AI untuk produktivitas. Santri didorong menciptakan solusi digital nyata.",
      badgeColor: "bg-blue-600"
    },
    {
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      time: "13:30 WIB",
      title: "Business Practice & Management",
      desc: "Praktik langsung mengelola unit bisnis pesantren. Santri belajar pembukuan, stok, dan pemasaran produk herbal/madu.",
      badgeColor: "bg-green-600"
    },
    {
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      time: "16:00 WIB",
      title: "Olahraga Sunnah & Leadership",
      desc: "Menjaga kebugaran fisik dengan memanah, berkuda, atau futsal. Melatih kekompakan tim dan jiwa kepemimpinan.",
      badgeColor: "bg-purple-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="kegiatan" className="py-20 bg-white text-slate-900 overflow-hidden relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
                <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">Life at Villa Quran</h2>
                <h3 className="text-3xl font-serif font-bold">Dokumentasi Kegiatan</h3>
                <p className="text-slate-600 mt-2 max-w-lg">Mengintip keseharian santri yang padat, produktif, namun tetap menyenangkan.</p>
            </div>
            <div className="flex gap-2">
                <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-slate-300 text-slate-600 hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition"><i className="fa-solid fa-arrow-left"></i></button>
                <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-primary text-white border border-primary hover:bg-green-700 flex items-center justify-center transition"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px] border border-slate-200 group">
                <div className="flex transition-transform duration-700 ease-in-out h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0 relative">
                            <img src={slide.img} className="w-full h-full object-cover" alt={slide.title} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-end p-8 md:p-12 text-white">
                                <div className={`max-w-2xl transform transition duration-500 ${index === currentSlide ? 'translate-y-0' : 'translate-y-4'}`}>
                                    <span className={`${slide.badgeColor || 'bg-secondary'} text-white text-xs font-bold px-3 py-1 rounded mb-3 inline-block`}>{slide.time}</span>
                                    <h3 className="text-3xl font-bold mb-2 text-white">{slide.title}</h3>
                                    <p className="text-slate-200">{slide.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="absolute bottom-6 right-8 flex space-x-2">
                    {slides.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => setCurrentSlide(index)} 
                            className={`w-3 h-3 rounded-full transition indicator ${index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white'}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Activities;