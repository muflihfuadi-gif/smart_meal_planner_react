import React, { useState } from 'react';

export default function Step3NutrisiBudget({ 
  budgetInput = 300000, 
  onKembaliKeStep1,
  onLanjutKeStep4 
}) {
  const [showNutrisi, setShowNutrisi] = useState(false);
  const [showBudget, setShowBudget] = useState(false);

  const totalBudgetMenu = 245000;
  const isBudgetValid = budgetInput >= totalBudgetMenu;

  return (
    <div className="bg-white w-[95%] max-w-none p-10 rounded-xl shadow-lg border-2 border-teal-500 font-sans transition-all duration-300">
      <h2 className="text-[#2e8b57] text-center font-bold text-2xl m-0">STEP 3</h2>
      <div className="text-center text-gray-500 text-sm mt-1 mb-6">Informasi Nutrisi & Budget</div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button 
          type="button"
          onClick={() => setShowNutrisi(!showNutrisi)}
          className={`p-4 border-2 rounded-lg text-left transition duration-200 cursor-pointer focus:outline-none ${
            showNutrisi ? 'bg-emerald-50 border-emerald-500' : 'bg-gray-50 border-gray-200 opacity-70'
          }`}
        >
          <span className="block text-xs font-bold text-emerald-700 tracking-wide uppercase mb-1">Tombol 1</span>
          <span className="text-sm font-bold text-gray-800 block">Total Informasi Nilai Gizi</span>
          <span className="text-[11px] text-gray-500 mt-1 block">Diambil dari generate menu mingguan Step 2</span>
        </button>

        <button 
          type="button"
          onClick={() => setShowBudget(!showBudget)}
          className={`p-4 border-2 rounded-lg text-left transition duration-200 cursor-pointer focus:outline-none ${
            showBudget ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-200 opacity-70'
          }`}
        >
          <span className="block text-xs font-bold text-blue-700 tracking-wide uppercase mb-1">Tombol 2</span>
          <span className="text-sm font-bold text-gray-800 block">Total Budget Perhari</span>
          <span className="text-[11px] text-gray-500 mt-1 block">Akumulasi sarapan, siang, & malam harian</span>
        </button>
      </div>

      <div className="space-y-4">
        {showNutrisi && (
          <div className="border border-emerald-200 rounded-md p-4 bg-emerald-50/30">
            <h4 className="font-bold text-sm text-emerald-900 mb-2 pb-1 border-b border-emerald-100">
              📊 Nilai Gizi Rata-Rata Perhari (Berdasarkan Step 2)
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs text-gray-700">
              <div className="bg-white p-2 rounded border border-gray-100">🔥 Energi: <span className="font-bold text-emerald-700">2.100 Kcal</span></div>
              <div className="bg-white p-2 rounded border border-gray-100">🍗 Protein: <span className="font-bold text-emerald-700">75g</span></div>
              <div className="bg-white p-2 rounded border border-gray-100">🍞 Karbohidrat: <span className="font-bold text-emerald-700">250g</span></div>
              <div className="bg-white p-2 rounded border border-gray-100">🥑 Lemak: <span className="font-bold text-emerald-700">65g</span></div>
            </div>
          </div>
        )}

        {showBudget && (
          <div className="border border-blue-200 rounded-md p-4 bg-blue-50/30">
            <h4 className="font-bold text-sm text-blue-900 mb-2 pb-1 border-b border-blue-100">
              💰 Akumulasi Budget Menu
            </h4>
            <div className="space-y-2 text-xs text-gray-700">
              <div className="flex justify-between items-center bg-white p-2 rounded border border-gray-100">
                <span>Rata-rata Perhari (Sarapan + Siang + Malam):</span>
                <span className="font-bold text-blue-700">Rp 35.000 / hari</span>
              </div>
              <div className="flex justify-between items-center bg-white p-2 rounded border border-blue-100">
                <span className="font-bold text-gray-800">Total Budget Perminggu (Akumulasi):</span>
                <span className="font-bold text-base text-blue-800">Rp {totalBudgetMenu.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={`mt-6 p-4 rounded-lg border ${isBudgetValid ? 'border-green-200 bg-green-50/20' : 'border-red-200 bg-red-50/20'}`}>
        <div className="text-xs text-gray-500">Evaluasi Anggaran:</div>
        <div className="flex justify-between items-center mt-1">
          <div>
            <span className="text-xs block text-gray-600">Budget Input Anda: <strong>Rp {budgetInput.toLocaleString('id-ID')}</strong></span>
            <span className="text-xs block text-gray-600">Total Budget Menu: <strong>Rp {totalBudgetMenu.toLocaleString('id-ID')}</strong></span>
          </div>
          <div className={`text-xs font-bold px-3 py-1.5 rounded-full ${
            isBudgetValid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {isBudgetValid ? '✓ Budget Aman' : '⚠️ Overbudget'}
          </div>
        </div>
        <p className="text-[11px] mt-2 border-t pt-1.5 text-gray-500">
          {isBudgetValid 
            ? 'Anggaran Anda mencukupi untuk rencana menu mingguan ini. Silakan lanjut ke langkah berikutnya.' 
            : 'Total anggaran menu mingguan melebihi batas budget Anda. Silakan sesuaikan budget  Anda.'}
        </p>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button 
          type="button" 
          onClick={onKembaliKeStep1}
          className="px-5 py-2.5 bg-red-100 text-red-700 font-bold text-sm rounded border border-red-200 hover:bg-red-200 transition cursor-pointer"
        >
          Sesuaikan budget (Kembali ke Step1)
        </button>
        <button 
          type="button" 
          onClick={onLanjutKeStep4}
          disabled={!isBudgetValid}
          className={`px-5 py-2.5 font-bold text-sm rounded shadow-md transition cursor-pointer ${
            isBudgetValid 
              ? 'bg-[#2e8b57] text-white shadow-green-700/20 hover:opacity-90' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
          }`}
        >
          Lanjut ke STEP 4
        </button>
      </div>
    </div>
  );
}