import React from 'react';

function Step1Form({
  individu,
  setIndividu,
  budget,
  setBudget,
  modeNutrisi,
  setModeNutrisi,
  onCekKelengkapan,
  onLanjutKeStep2
}) {
  return (
    <div className="bg-white w-full max-w-md rounded-lg shadow-md p-8 mt-6 transition-all duration-300">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-5">
        Smart Meal Planner
      </h2>

      <div className="text-center font-semibold text-gray-500 text-sm mb-6">
        Masukkan Data Perencanaan (STEP 1)
      </div>

      <div className="space-y-4">

        <div>
          <label htmlFor="input-individu" className="block text-sm font-bold text-gray-700 mb-1">
            Jumlah Orang (Individu)
          </label>
          <input
            id="input-individu"
            type="number"
            required
            placeholder="Contoh: 2"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600 text-sm"
            value={individu}
            onChange={(e) => setIndividu(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="input-budget" className="block text-sm font-bold text-gray-700 mb-1">
            Target Budget (Rupiah)
          </label>
          <input
            id="input-budget"
            type="number"
            required
            placeholder="Contoh: 300000"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600 text-sm"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="select-nutrisi" className="block text-sm font-bold text-gray-700 mb-1">
            Mode Nutrisi
          </label>
          <select
            id="select-nutrisi"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600 text-sm bg-white"
            value={modeNutrisi}
            onChange={(e) => setModeNutrisi(e.target.value)}
          >
            <option value="" disabled>Pilih mode menu</option>
            <option value="hemat">Hemat</option>
            <option value="seimbang">Seimbang</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onCekKelengkapan}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded text-sm cursor-pointer hover:opacity-80"
          >
            Cek Kelengkapan
          </button>
          <button
            type="button"
            onClick={onLanjutKeStep2}
            className="px-4 py-2 bg-green-700 text-white font-bold rounded text-sm cursor-pointer hover:opacity-90"
          >
            Lanjut ke Step 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step1Form;