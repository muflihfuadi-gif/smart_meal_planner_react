import React from "react";

function Step4ShoppingList({
  username,
  budgetInput,
  daftarBelanja,
  onDownloadPDF,
  onKembaliKeStep3,
  onMulaiUlang,
  reportRef,
}) {
  const totalPengeluaran = daftarBelanja.reduce((sum, item) => sum + item.harga, 0);
  const sisaBudget = budgetInput - totalPengeluaran;

  return (
    <div className="w-[95%] max-w-none space-y-6">
      
      <div ref={reportRef} className="bg-white p-10 rounded-xl shadow-lg border-2 border-teal-500 transition-all duration-300">
        <h2 className="text-[#2e8b57] text-center font-bold text-4xl m-0">
          Smart Meal Planner Report
        </h2>
        <div className="text-center text-gray-500 text-lg mt-2 mb-10">
          Rencana Menu & Estimasi Belanja Mingguan
        </div>

        <div className="bg-teal-50 p-5 rounded-lg mb-8 border-2 border-teal-500">
          <p className="text-base text-gray-700 m-0">
            Nama Pengguna: <span className="font-bold text-gray-900 text-lg">{username}</span>
          </p>
        </div>

        <h3 className="font-bold text-gray-800 text-xl mb-4 border-b-2 border-teal-500 pb-2">
          1. Daftar Belanja Bahan
        </h3>
        <div className="space-y-3 mb-8">
          {daftarBelanja.map((item, index) => (
            <div key={index} className="flex justify-between text-base text-gray-700 border-b border-gray-100 pb-2">
              <span>{item.nama}</span>
              <span className="font-semibold text-gray-900">
                Rp {item.harga.toLocaleString("id-ID")}
              </span>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-gray-800 text-xl mb-4 border-b-2 border-teal-500 pb-2">
          2. Ringkasan Anggaran Belanja
        </h3>
        

        <div className="bg-teal-50 p-6 rounded-lg space-y-3 border-2 border-teal-500">
          <div className="flex justify-between text-base text-gray-700">
            <span>Target Budget:</span>
            <span className="font-bold text-gray-900">
              Rp {budgetInput.toLocaleString("id-ID")}
            </span>
          </div>
          <div className="flex justify-between text-base text-gray-700">
            <span>Total Belanja:</span>
            <span className="text-red-600 font-bold">
              Rp {totalPengeluaran.toLocaleString("id-ID")}
            </span>
          </div>

          <div className="flex justify-between font-bold text-lg text-gray-800 pt-3 border-t-2 border-teal-500">
            <span>Sisa Budget:</span>
            <span className={sisaBudget >= 0 ? "text-green-700" : "text-red-600"}>
              Rp {sisaBudget.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <button
          type="button"
          onClick={onDownloadPDF}
          className="py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-700 transition-colors cursor-pointer text-center"
        >
          Format PDF (Download Laporan)
        </button>
        
        <button
          type="button"
          onClick={onKembaliKeStep3}

          className="py-4 bg-gray-50 border-2 border-teal-500 text-gray-700 font-bold text-lg rounded-lg hover:opacity-80 transition-opacity cursor-pointer text-center"
        >
          Kembali ke Step 3
        </button>

        <button
          type="button"
          onClick={onMulaiUlang}
          className="py-4 bg-red-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-red-700 transition-colors cursor-pointer text-center"
        >
          Mulai Ulang Perencanaan
        </button>
      </div>

    </div>
  );
}

export default Step4ShoppingList;