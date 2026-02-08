const images = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
]

const Gallery = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Galeri Kegiatan
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Dokumentasi aktivitas santri dalam menghafal Al-Qur'an dan kegiatan entrepreneurship.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="relative aspect-video overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={img}
                alt={`Kegiatan ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery