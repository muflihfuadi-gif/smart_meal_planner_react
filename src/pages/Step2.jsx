import React, { useState } from "react";
import WEEKLY_MENU from "../data/menu";
import { useNavigate, useLocation } from "react-router";
import DayMenuCollapse from "../components/Step2DropDownMenu";

function Step2() {
  const navigate = useNavigate();
  const location = useLocation();

  const [openIndices, setOpenIndices] = useState([0, 1]);

  const handleToggleDay = (index) => {
    let pairIndex = index % 2 === 0 ? index + 1 : index - 1;
    
    const pairGroup = [index];
    if (pairIndex >= 0 && pairIndex < WEEKLY_MENU.length) {
      pairGroup.push(pairIndex);
    }

    setOpenIndices((prev) => {
      const isCurrentOpen = prev.includes(index);
      if (isCurrentOpen) {
        return prev.filter((i) => !pairGroup.includes(i));
      } else {
       
        // hari aktif = menjadi: return [...pairGroup];
        return [...prev, ...pairGroup];
      }
    });
  };

  return (
    <div className="w-full flex items-center justify-center p-4">
      
      <div
        id="step-2"
        className="bg-white w-[85%] md:w-[90%] max-w-6xl p-8 rounded-lg shadow-md mt-7 transition-all duration-300"
      >
        <h2 className="text-[#2e8b57] text-center font-bold text-2xl m-0">
          Smart Meal Planner
        </h2>
        
        <div className="text-center text-gray-500 text-sm mt-1 mb-8">
          Rencana Menu Mingguan Anda
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {WEEKLY_MENU.map((dayData, index) => 
            dayData ? (
              <DayMenuCollapse 
                key={dayData.day || index} 
                dayData={dayData} 
                isOpen={openIndices.includes(index)} 
                onToggle={() => handleToggleDay(index)} 
              />
            ) : null
          )}
        </div>

        <div className="flex justify-between items-center mt-10 border-t pt-6">
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

    </div>
  );
}

export default Step2;