import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Step1Form from '../components/Step1Form';

function Step1() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || 'Pengguna';

  const [individu, setIndividu] = useState('');
  const [budget, setBudget] = useState('');
  const [modeNutrisi, setModeNutrisi] = useState('');

  const handleCekKelengkapan = () => {
    if (individu && budget && modeNutrisi) {
      alert(`Data Lengkap!\nJumlah Orang: ${individu}\nBudget: Rp ${Number(budget).toLocaleString('id-ID')}\nMode: ${modeNutrisi}`);
    } else {
      alert('Mohon lengkapi semua data terlebih dahulu!');
    }
  };

  const handleLanjutKeStep2 = () => {
    if (!individu || !budget || !modeNutrisi) {
      alert('Mohon isi semua data sebelum lanjut ke Step 2!');
      return;
    }
    console.log('Melanjutkan ke Step 2 dengan data:', { individu, budget, modeNutrisi });
    navigate('/step-2', { state: { individu, budget, modeNutrisi, username } });
  };

  return (
    <div className="w-full flex items-center justify-center">
      <Step1Form 
        individu={individu}
        setIndividu={setIndividu}
        budget={budget}
        setBudget={setBudget}
        modeNutrisi={modeNutrisi}
        setModeNutrisi={setModeNutrisi}
        onCekKelengkapan={handleCekKelengkapan}
        onLanjutKeStep2={handleLanjutKeStep2}
      />
    </div>
  );
}

export default Step1;