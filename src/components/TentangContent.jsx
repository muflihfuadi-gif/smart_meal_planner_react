import React from 'react';

function TentangContent({ pilarDasar, timKontak }) {
  return (
    <div className="w-[95%] max-w-none space-y-8">
      

      <div className="bg-white p-10 rounded-xl shadow-lg border-2 border-teal-500 transition-all duration-300">
        <h2 className="text-[#2e8b57] text-center font-bold text-4xl m-0">
          Tentang Smart Meal Planner
        </h2>
        <div className="text-center text-gray-500 text-lg mt-2 mb-10">
          Makan Sehat, Dompet Selamat: Solusi Nutrisi Cerdas ala Anak Kos
        </div>

        <div className="text-gray-700 text-base leading-relaxed mb-8 max-w-4xl mx-auto text-center">
          Aplikasi ini dibangun berlandaskan riset kebutuhan mahasiswa dan masyarakat umum yang seringkali mengalami kesulitan dalam menyeimbangkan antara keterbatasan anggaran bulanan dengan pemenuhan gizi yang seimbang. 
          Melalui pendekatan sains data, kami merancang platform ringkas yang mampu memformulasikan makanan sehat secara otomatis, terstruktur, dan ramah di kantong.
        </div>

        {/* Judul Bagian Pilar */}
        <h3 className="font-bold text-gray-800 text-xl mb-6 border-b-2 border-teal-500 pb-2">
          📋 4 Pilar Utama Pengembangan
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pilarDasar.map((pilar, index) => (
            <div 
              key={index} 
              className="bg-teal-50/30 p-6 rounded-xl border-2 border-teal-500 hover:bg-teal-50/60 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{pilar.ikon}</span>
                <h4 className="font-bold text-gray-800 text-lg m-0">
                  {pilar.judul}
                </h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed m-0">
                {pilar.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-teal-500">
        <h3 className="font-bold text-gray-800 text-xl mb-2">
          📬 Punya Pertanyaan Mengenai Project Ini?
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          Silakan hubungi tim pengembang kami untuk diskusi lebih lanjut, saran, atau kolaborasi pengembangan sistem:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {timKontak.map((anggota, index) => (
            <div 
              key={index} 
              className="bg-white p-5 rounded-lg border-2 border-teal-500 flex flex-col justify-between"
            >
              <div>
                <div className="font-bold text-gray-900 text-base mb-1">
                  {anggota.nama}
                </div>
                <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-3">
                  {anggota.role}
                </div>
              </div>
              <a 
                href={`mailto:${anggota.email}`}
                className="text-sm font-medium text-blue-600 hover:underline break-all"
              >
                {anggota.email}
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default TentangContent;