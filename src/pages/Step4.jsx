import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import html2pdf from "html2pdf.js";
import Step4ShoppingList from "../components/Step4ShoppingList";

function Step4() {
  const navigate = useNavigate();
  const location = useLocation();
  const reportRef = useRef(); 

  const budgetInput = location.state?.budget || 300000;
  const username = location.state?.username || "Pengguna";

  const daftarBelanja = [
    { nama: "Beras Premium", harga: 75000 },
    { nama: "Ayam Fillet (1kg)", harga: 55000 },
    { nama: "Sayur-sayuran & Bumbu", harga: 40000 },
    { nama: "Minyak Goreng (2L)", harga: 35000 },
    { nama: "Telur Ayam (1kg)", harga: 28000 },
  ];

  const handleDownloadPDF = () => {
    const element = reportRef.current;
    const opt = {
      margin: [10, 10, 10, 10],
      filename: `Smart_Meal_Planner_${username}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    alert("Sedang menyiapkan file PDF Anda. Silakan tunggu...");
    html2pdf().set(opt).from(element).save();
  };
  
  const handleKembali = () => {
    navigate('/step-3', { state: { budget: budgetInput, username } });
  };

  const handleMulaiUlang = () => {
    navigate("/step-1", { state: null }); 
  };

  return (
    <div className="w-full flex-grow flex items-center justify-center min-h-[80vh] py-10 px-4">
      <Step4ShoppingList
        username={username}
        budgetInput={Number(budgetInput)}
        daftarBelanja={daftarBelanja}
        onDownloadPDF={handleDownloadPDF}
        onKembaliKeStep3={handleKembali}npm run dev
        onMulaiUlang={handleMulaiUlang}
        reportRef={reportRef} 
      />
    </div>
  );
}

export default Step4;