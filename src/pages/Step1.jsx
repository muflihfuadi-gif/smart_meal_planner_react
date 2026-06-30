import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const Step1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || 'Pengguna';

  const [individu, setIndividu] = useState('');
  const [budget, setBudget] = useState('');
  const [modeNutrisi, setModeNutrisi] = useState('');

  const cekKelengkapanData = () => {
    if (individu && budget && modeNutrisi) {
      alert(`Data Lengkap!\nJumlah Orang: ${individu}\nBudget: Rp ${Number(budget).toLocaleString('id-ID')}\nMode: ${modeNutrisi}`);
    } else {
      alert('Mohon lengkapi semua data terlebih dahulu!');
    }
  };

  const lanjutKeStep2 = () => {
    if (!individu || !budget || !modeNutrisi) {
      alert('Mohon isi semua data sebelum lanjut ke Step 2!');
      return;
    }
    console.log('Melanjutkan ke Step 2 dengan data:', { individu, budget, modeNutrisi });
    navigate('/step-2', { state: { individu, budget, modeNutrisi, username } });
  };

  return (
    <div className="bg-white w-full max-w-md rounded-lg shadow-md p-8 mt-6 transition-all duration-300">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-5">
        Smart Meal Planner
      </h2>

      <div className="text-center font-semibold text-gray-700 mb-4 text-sm">
        Selamat datang, <span className="text-green-700">{username}</span>!
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-400 px-4 py-3 mb-6 rounded-r">
        <h3 className="text-sm font-bold text-red-700 mb-1">
          Rencanakan Menu Praktis & Sehat!
        </h3>
        <p className="text-xs text-gray-500">
          Bantu kamu menyusun menu mingguan yang lezat sesuai dengan jumlah orang dan budget kamu.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        
        <div>
          <label htmlFor="input-individu" className="block text-sm font-bold text-gray-700 mb-1">
            Jumlah Individu
          </label>
          <input
            id="input-individu"
            type="number"
            placeholder="Contoh: 2"
            min="1"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600 text-sm"
            value={individu}
            onChange={(e) => setIndividu(e.target.value)}
          />
        </div>


        <div>
          <label htmlFor="input-budget" className="block text-sm font-bold text-gray-700 mb-1">
            Budget Mingguan (Rp)
          </label>
          <input
            id="input-budget"
            type="number"
            placeholder="Contoh: 300000"
            min="1"
            required
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
            onClick={cekKelengkapanData}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded text-sm cursor-pointer hover:opacity-80"
          >
            Cek Kelengkapan
          </button>
          <button
            type="button"
            onClick={ lanjutKeStep2 }
            className="px-4 py-2 bg-green-700 text-white font-bold rounded text-sm cursor-pointer hover:opacity-80"
          >
            Lanjut ke Step 2
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;