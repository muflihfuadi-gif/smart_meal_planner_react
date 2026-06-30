import React from "react";
import WEEKLY_MENU from "../data/menu";
import { useNavigate, useLocation } from "react-router";
import DayMenuCollapse from "../components/Step2DropDownMenu";

function Step2() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      id="step-2"
      className="bg-white w-full max-w-lg p-8 rounded-lg shadow-md mt-7 transition-all duration-300"
    >
      <h2 className="text-[#2e8b57] text-center font-bold text-2xl m-0">
        Smart Meal Planner
      </h2>
      
      <div className="text-center text-gray-500 text-sm mt-1 mb-6">
        Rencana Menu Mingguan Anda
      </div>

      <div className="space-y-3">
        {WEEKLY_MENU.map((dayData, index) => 
          dayData ? (
            <DayMenuCollapse key={dayData.day || index} dayData={dayData} />
          ) : null
        )}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          type="button"
          onClick={() => navigate('/step-1', { state: location?.state || {} })}
          className="px-5 py-2.5 bg-gray-200 text-gray-700 font-medium text-sm rounded hover:opacity-80 transition-opacity text-center cursor-pointer"
        >
          Kembali
        </button>
        
        <button
          type="button"
          onClick={() => navigate('/step-3', { state: location?.state || {} })}
          className="px-5 py-2.5 bg-[#2e8b57] text-white font-bold text-sm rounded shadow-md shadow-green-700/20 hover:opacity-90 transition-opacity cursor-pointer"
        >
          Lanjut ke Step 3
        </button>
      </div>
    </div>
  );
}

export default Step2;