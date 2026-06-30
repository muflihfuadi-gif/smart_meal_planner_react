import React from "react";

function DropDownMenu({ dayData, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="font-bold text-gray-700">{dayData.day}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="p-4 bg-white border-t border-gray-100 space-y-3 animate-fadeIn">
          {dayData.meals?.map((meal, idx) => (
            <div key={idx} className="text-sm">
              <span className="font-semibold text-green-700">{meal.time}:</span> {meal.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;