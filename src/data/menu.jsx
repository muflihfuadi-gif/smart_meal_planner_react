const WEEKLY_MENU = [
  {
    day: "Senin",
    defaultOpen: true,
    meals: [
      {
        time: "Sarapan",
        icon: "🍳",
        title: "Omelet Sayur",
        nutrition: {
          karbo: "Nasi Putih (150g)",
          protein: "2 Butir Telur",
          lemak: "Minyak Kelapa",
          mikro: "Wortel & Sawi"
        }
      },
      {
        time: "Makan Siang",
        icon: "☀️",
        title: "Ayam Goreng & Tumis Kangkung",
        nutrition: {
          karbo: "Nasi Putih",
          protein: "Dada Ayam (100g)",
          lemak: "Minyak Goreng",
          mikro: "Kangkung"
        }
      },
      {
        time: "Makan Malam",
        icon: "🌙",
        title: "Sup Telur Puyuh & Tahu",
        nutrition: {
          karbo: "Kentang (di sup)",
          protein: "Telur Puyuh & Tahu",
          lemak: "Kuah Kaldu Ayam",
          mikro: "Kol & Buncis"
        }
      }
    ]
  },
  {
    day: "Selasa",
    defaultOpen: false,
    meals: [
      {
        time: "Sarapan",
        icon: "🍳",
        title: "Bubur Oatmeal Instan Polos & 1 Telur Rebus",
        nutrition: {
          karbo: "Oatmeal",
          protein: "Telur Rebus",
          lemak: "Kuning Telur",
          mikro: "Kuning Telur"
        }
      },
      {
        time: "Makan Siang",
        icon: "☀️",
        title: "Nasi Putih, Orek Tempe Kering, & Sayur Bening Bayam",
        nutrition: {
          karbo: "Nasi Putih & Pati Sayur",
          protein: "Tempe",
          lemak: "Minyak Goreng",
          mikro: "Bayam & Tempe"
        }
      },
      {
        time: "Makan Malam",
        icon: "🌙",
        title: "Tahu Goreng Tepung & Sambal Korek + Lalapan Timun",
        nutrition: {
          karbo: "Tepung & Nasi",
          protein: "Tahu",
          lemak: "Minyak Goreng",
          mikro: "Cabai Segar & Timun"
        }
      }
    ]
  },
  {
    day: "Rabu",
    defaultOpen: false,
    meals: [
      {
        time: "Sarapan",
        icon: "🍳",
        title: "Roti Tawar Putih (2 Lembar) + Olesan Mentega & Gula/SKM",
        nutrition: {
          karbo: "Roti Tawar Putih & Gula/SKM",
          protein: "Roti Tawar Putih (sedikit)",
          lemak: "Mentega",
          mikro: "Roti Tawar & Mentega (Fortifikasi)"
        }
      },
      {
        time: "Makan Siang",
        icon: "☀️",
        title: "Nasi Putih + Tumis Sawi Hijau & Telur Dadar (1 butir)",
        nutrition: {
          karbo: "Nasi Putih",
          protein: "Telur Dadar",
          lemak: "Minyak Dadar",
          mikro: "Sawi Hijau"
        }
      },
      {
        time: "Makan Malam",
        icon: "🌙",
        title: "Tumis Tahu & Toge Saus Tiram",
        nutrition: {
          karbo: "Toge & Saus Tiram",
          protein: "Tahu",
          lemak: "Minyak Tumis",
          mikro: "Toge & Tahu"
        }
      }
    ]
  },
  {
    day: "Kamis",
    defaultOpen: false,
    meals: [
      {
        time: "Sarapan",
        icon: "🍳",
        title: "Pisang Rebus/Kukus (2 Buah) + 1 Gelas Teh Manis Hangat",
        nutrition: {
          karbo: "Pisang & Gula Teh",
          protein: "Pisang (Sangat Sedikit)",
          lemak: "Tidak Ada",
          mikro: "Pisang Kepok/Raja"
        }
      },
      {
        time: "Makan Siang",
        icon: "☀️",
        title: "Nasi Putih + Hati Ayam Goreng & Lalapan Kubis",
        nutrition: {
          karbo: "Nasi Putih",
          protein: "Hati Ayam",
          lemak: "Minyak Goreng",
          mikro: "Hati Ayam & Kubis"
        }
      },
      {
        time: "Makan Malam",
        icon: "🌙",
        title: "Sup Makaroni Ceker Ayam & Wortel",
        nutrition: {
          karbo: "Makaroni",
          protein: "Ceker Ayam",
          lemak: "Ceker Ayam & Minyak Sup",
          mikro: "Wortel & Ceker Ayam"
        }
      }
    ]
  },
  {
    day: "Jumat",
    defaultOpen: false,
    meals: [
      {
        time: "Sarapan",
        icon: "🍳",
        title: "Telur Setengah Matang (2 butir) + Taburan Merica & Kecap Asin",
        nutrition: {
          karbo: "Kecap Asin (Sangat Sedikit)",
          protein: "Telur Setengah Matang",
          lemak: "Kuning Telur",
          mikro: "Kuning Telur"
        }
      },
      {
        time: "Makan Siang",
        icon: "☀️",
        title: "Nasi Putih + Sarden Kaleng & Tumis Kacang Panjang",
        nutrition: {
          karbo: "Nasi Putih",
          protein: "Sarden Kaleng",
          lemak: "Sarden Kaleng & Minyak Tumis",
          mikro: "Tulang Ikan Sarden & Kacang Panjang"
        }
      },
      {
        time: "Makan Malam",
        icon: "🌙",
        title: "Sisa Sarden Kaleng Siang + Nikmati dengan Kerupuk",
        nutrition: {
          karbo: "Nasi Putih & Kerupuk",
          protein: "Sarden Kaleng",
          lemak: "Sarden Kaleng & Minyak Kerupuk",
          mikro: "Sarden Kaleng"
        }
      }
    ]
  },
  {
    day: "Sabtu",
    defaultOpen: false,
    meals: [
      {
        time: "Sarapan",
        icon: "🍳",
        title: "Nasi Goreng Kosan (Nasi Sisa Semalam + 1 Telur + Bawang)",
        nutrition: {
          karbo: "Nasi Putih",
          protein: "Telur",
          lemak: "Minyak Goreng & Kuning Telur",
          mikro: "Bawang Merah & Bawang Putih"
        }
      },
      {
        time: "Makan Siang",
        icon: "☀️",
        title: "Nasi Putih + Tempe Goreng Tepung + Sayur Asem Jakarta",
        nutrition: {
          karbo: "Nasi Putih, Tepung, Jagung & Melinjo",
          protein: "Tempe",
          lemak: "Minyak Goreng",
          mikro: "Kacang Panjang, Daun Melinjo, dll"
        }
      },
      {
        time: "Makan Malam",
        icon: "🌙",
        title: "Tumis Jamur Tiram & Tahu Putih",
        nutrition: {
          karbo: "Jamur Tiram (Sedikit)",
          protein: "Tahu Putih & Jamur Tiram",
          lemak: "Minyak Tumis",
          mikro: "Jamur Tiram & Tahu Putih"
        }
      }
    ]
  },
  {
    day: "Minggu",
    defaultOpen: false,
    meals: [
      {
        time: "Sarapan",
        icon: "🍳",
        title: "Singkong Rebus / Ubi Cilembu Bakar",
        nutrition: {
          karbo: "Singkong / Ubi Jalar",
          protein: "Ubi / Singkong (Sangat Sedikit)",
          lemak: "Tidak Ada",
          mikro: "Ubi Cilembu / Singkong"
        }
      },
      {
        time: "Makan Siang",
        icon: "☀️",
        title: "Nasi Putih + Semur Tahu & Telur Puyuh (3-4 butir)",
        nutrition: {
          karbo: "Nasi Putih",
          protein: "Telur Puyuh & Tahu",
          lemak: "Kuning Telur Puyuh & Minyak Tumis",
          mikro: "Telur Puyuh & Tahu"
        }
      },
      {
        time: "Makan Malam",
        icon: "🌙",
        title: "Sup Telur Kocok + Irisan Daun Bawang",
        nutrition: {
          karbo: "Air Sup / Pengental Maizena",
          protein: "Telur Kocok",
          lemak: "Kuning Telur",
          mikro: "Telur & Daun Bawang"
        }
      }
    ]
  }
];

export default WEEKLY_MENU;
