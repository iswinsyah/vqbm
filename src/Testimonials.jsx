const testimonials = [
  {
    content: "Alhamdulillah, anak saya tidak hanya hafal 30 juz, tapi juga punya mindset bisnis yang bagus. Sekarang sudah mulai jualan online kecil-kecilan.",
    author: "Ayah Fulan",
    role: "Wali Santri"
  },
  {
    content: "Program entrepreneurship di VQBM sangat membantu melatih kemandirian. Fasilitas IT-nya juga sangat mendukung untuk belajar digital marketing.",
    author: "Siti Aminah",
    role: "Alumni Angkatan 2023"
  },
  {
    content: "Lingkungannya sangat kondusif untuk menghafal Al-Qur'an. Asatidz-nya sabar dan metode belajarnya mudah diikuti.",
    author: "Ahmad Rizki",
    role: "Santri Kelas 11"
  },
]

const Testimonials = () => {
  return (
    <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Apa Kata Mereka?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Pengalaman nyata dari santri dan wali santri VQBM.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-lg font-medium text-gray-900">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="ml-3">
                      <p className="text-sm font-medium text-blue-600">
                        {testimonial.author}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time>{testimonial.role}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials