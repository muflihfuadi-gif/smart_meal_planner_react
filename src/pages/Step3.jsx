import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import Step3NutrisiBudget from '../components/Step3NutrisiBudget';

export default function Step3() {
  const navigate = useNavigate();
  const location = useLocation();

  const budgetInput = location.state?.budget || 300000; 
  const username = location.state?.username || 'Pengguna';

  const handleKembali = () => {

    navigate('/step-2', { state: { budget: budgetInput, username } });
  };

  const handleLanjut = () => {
    navigate('/step-4', { state: { budget: budgetInput, username } });
  };

  return (
    <div className="w-full flex items-center justify-center">
      <Step3NutrisiBudget 
        budgetInput={Number(budgetInput)} 
        onKembaliKeStep2={handleKembali}
        onLanjutKeStep4={handleLanjut}
      />
    </div>
  );
}

