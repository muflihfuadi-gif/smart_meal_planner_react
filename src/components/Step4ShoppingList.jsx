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
    <div className="w-full max-w-lg mt-7 space-y-4">
      
      <div ref={reportRef} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-[#2e8b57] text-center font-bold text-2xl m-0">
          Smart Meal Planner Report
        </h2>
        <div className="text-center text-gray-500 text-sm mt-1 mb-6">
          Rencana Menu & Estimasi Belanja Mingguan
        </div>

        <div className="bg-gray-50 p-4 rounded-md mb-6 border border-gray-100">
          <p className="text-sm text-gray-600">
            Nama Pengguna: <span className="font-bold text-gray-800">{username}</span>
          </p>
        </div>

        <h3 className="font-bold text-gray-700 text-base mb-3 border-b pb-1">
          1. Daftar Belanja Bahan
        </h3>
        <div className="space-y-2 mb-6">
          {daftarBelanja.map((item, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span className="text-gray-700">{item.nama}</span>
              <span className="text-gray-600 font-mono">
                Rp {item.harga.toLocaleString("id-ID")}
              </span>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-gray-700 text-base mb-3 border-b pb-1">
          2. Ringkasan Budgeting
        </h3>
        <div className="bg-green-50/50 p-3 rounded border border-green-100 text-xs space-y-1">
          <div className="flex justify-between text-gray-600">
            <span>Target Budget:</span>
            <span>Rp {budgetInput.toLocaleString("id-ID")}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Total Belanja:</span>
            <span className="text-red-600 font-medium">
              Rp {totalPengeluaran.toLocaleString("id-ID")}
            </span>
          </div>
          <div className="flex justify-between font-bold text-gray-700 pt-1 border-t border-green-200">
            <span>Sisa Budget:</span>
            <span className={sisaBudget >= 0 ? "text-green-600" : "text-red-600"}>
              Rp {sisaBudget.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <button
          type="button"
          onClick={onDownloadPDF}
          className="w-full py-3 bg-blue-600 text-white font-bold text-sm rounded shadow-md hover:bg-blue-700 transition-colors cursor-pointer text-center"
        >
          Format PDF (Download Laporan)
        </button>
        
        <button
          type="button"
          onClick={onKembaliKeStep3}
          className="w-full py-3 bg-gray-200 text-gray-700 font-bold text-sm rounded hover:bg-gray-300 transition-colors cursor-pointer text-center"
        >
          Kembali ke Step 3
        </button>

        <button
          type="button"
          onClick={onMulaiUlang}
          className="w-full py-3 bg-red-600 text-white font-bold text-sm rounded shadow-md hover:bg-red-700 transition-colors cursor-pointer text-center"
        >
          Mulai Ulang Rencana
        </button>
      </div>

    </div>
  );
}

export default Step4ShoppingList;