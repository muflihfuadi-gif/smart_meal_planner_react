import React from 'react';
import Step3NutrisiBudget from './Step3NutrisiBudget'; // Memanggil file komponen kamu

export default function App() {
  const handleKembali = () => alert("Kembali ke Step 2!");
  const handleLanjut = () => alert("Lanjut ke Step 4!");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Kita masukkan budgetInput contoh Rp 300.000 */}
      <Step3NutrisiBudget 
        budgetInput={300000} 
        onKembaliKeStep2={handleKembali}
        onLanjutKeStep4={handleLanjut}
      />
    </div>
  );
}