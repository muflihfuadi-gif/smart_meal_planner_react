function DropDownMenu({ dayData, isOpen, onToggle }) {
  return (
    <div className="border-2 border-teal-500 rounded-lg overflow-hidden">

      {/* Header / tombol toggle */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="font-bold text-gray-700">{dayData.day}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Konten meal — tampil jika isOpen */}
      {isOpen && (
        <div className="p-4 bg-white border-t border-gray-100 space-y-4 animate-fadeIn">
          {dayData.meals?.map((meal, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              {/* Icon dari data menu (🍳 / ☀️ / 🌙) */}
              <span className="text-base mt-0.5">{meal.icon}</span>
              <div>
                <span className="font-semibold text-green-700">{meal.time}:</span>{" "}
                <span>{meal.title}</span>

                {/* Detail nutrisi */}
                {meal.nutrition && (
                  <ul className="mt-1 ml-1 space-y-0.5 text-gray-500 text-xs">
                    <li>🌾 <span className="font-medium">Karbo:</span> {meal.nutrition.karbo}</li>
                    <li>🥩 <span className="font-medium">Protein:</span> {meal.nutrition.protein}</li>
                    <li>🫒 <span className="font-medium">Lemak:</span> {meal.nutrition.lemak}</li>
                    <li>🥦 <span className="font-medium">Mikro:</span> {meal.nutrition.mikro}</li>
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
