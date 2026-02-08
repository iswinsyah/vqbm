const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Profil VQBM</h1>
        <p className="mt-4 text-lg text-gray-500">
          Mengenal lebih dekat Villa Quran Baron Malang.
        </p>
      </div>
      
      <div className="prose prose-blue mx-auto text-gray-600 max-w-3xl">
        <p className="mb-4">
          Villa Quran Baron Malang (VQBM) adalah lembaga pendidikan yang berfokus pada tahfidz Al-Qur'an dan pembentukan karakter entrepreneurship. Kami percaya bahwa generasi masa depan harus memiliki keseimbangan antara kecerdasan spiritual dan kemandirian ekonomi.
        </p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-2">Visi</h3>
        <p className="mb-4">Mencetak generasi penghafal Al-Qur'an yang mandiri, berakhlak mulia, dan siap menghadapi tantangan global.</p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-2">Misi</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Menyelenggarakan pendidikan tahfidz yang berkualitas dan menyenangkan.</li>
          <li>Membekali santri dengan keterampilan wirausaha sejak dini.</li>
          <li>Membangun lingkungan yang islami dan kondusif untuk tumbuh kembang anak.</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile