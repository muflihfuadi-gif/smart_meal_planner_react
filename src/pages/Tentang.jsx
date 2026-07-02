import React from 'react';
import TentangContent from '../components/TentangContent';
const Tentang = () => {
  const pilarDasar = [
    {
      judul: "Otomatisasi & Anggaran Real-Time",
      deskripsi: "Menghilangkan kebingungan dalam menentukan menu harian dengan sistem pintar yang mengotomatisasi rancangan meal plan sekaligus menghitung kalkulasi budget belanja mingguan secara real-time.",
      ikon: "💰"
    },
    {
      judul: "Kecerdasan Nutrisi Sederhana",
      deskripsi: "Tidak perlu pusing menghitung kalori yang rumit. Sistem kami menyajikan informasi kandungan gizi dasar (makronutrisi) secara ringkas demi memastikan kebutuhan protein harian tetap terpenuhi.",
      ikon: "📊"
    },
    {
      judul: "Belanja Efisien & Anti Mubazir",
      deskripsi: "Rekomendasi bahan makanan dikurasi menggunakan bahan lokal terdekat dilengkapi shopping list otomatis guna meminimalisir bahan sisa yang terbuang sia-sia (zero waste).",
      ikon: "🛒"
    },
    {
      judul: "Akses Ringan & Fleksibel",
      deskripsi: "Didesain khusus dengan antarmuka (UI) yang super sederhana, adaptif, dan responsif. Aplikasi berjalan sangat ringan sehingga lancar diakses di berbagai perangkat ponsel pintar.",
      ikon: "📱"
    }
  ];


  const timKontak = [
    { nama: "Muflih Fuadi", email: "muflih.fuadi@cakrawala.ac.id", role: "Project Leader / Data Science" },
    { nama: "Olga Rizky Ramadhani", email: "olgarizk.ramadhani@cakrawala.ac.id", role: "UI/UX Designer / Data Science" },
    { nama: "Apip Febrian", email: "apipfebrian1@gmail.com", role: "Fullstack Developer / Data Science" },
  ];

  return (
    <div className="w-full flex-grow flex items-center justify-center min-h-[80vh] py-10 px-4">
      <TentangContent pilarDasar={pilarDasar} timKontak={timKontak} />
    </div>
  );
};

export default Tentang;