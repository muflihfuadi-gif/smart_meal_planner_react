import React from "react";

function DropDownMenu({ dayData }) {
  return (
    <details
      className="bg-gray-50 border border-gray-200 rounded-md overflow-hidden transition-all duration-300 open:border-[#2e8b57] open:shadow-sm"
      defaultOpen={dayData.defaultOpen}
    >
      <summary className="p-4 font-bold text-base cursor-pointer bg-white flex justify-between items-center select-none hover:bg-gray-50">
        <span>{dayData.day}</span>
        <span className="text-[#2e8b57] text-xs transition-transform duration-200 details-open:rotate-180">
          ▼
        </span>
      </summary>
      <div className="p-4 border-t border-gray-200 bg-white space-y-4">
        {dayData.meals.map((meal, index) => (
          <React.Fragment key={meal.time}>
            {index > 0 && <div className="border-t border-dashed border-gray-200"></div>}
            <div>
              <span className="text-xs font-bold text-[#2e8b57] tracking-wide uppercase">
                {meal.icon} {meal.time}
              </span>
              <p className="text-base font-semibold text-gray-900 my-1">
                {meal.title}
              </p>
              <div className="grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded border border-gray-100 mt-2">
                <div className="text-xs text-gray-600">
                  碳 Karbo: <span className="font-medium text-gray-800">{meal.nutrition.karbo}</span>
                </div>
                <div className="text-xs text-gray-600">
                  脱 Protein: <span className="font-medium text-gray-800">{meal.nutrition.protein}</span>
                </div>
                <div className="text-xs text-gray-600">
                  脱 Lemak: <span className="font-medium text-gray-800">{meal.nutrition.lemak}</span>
                </div>
                <div className="text-xs text-gray-600">
                  脱 Mikronutrien: <span className="font-medium text-gray-800">{meal.nutrition.mikro}</span>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </details>
  );
}

export default DropDownMenu;