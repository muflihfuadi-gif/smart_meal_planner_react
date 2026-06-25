import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="bg-white w-full max-w-md p-8 rounded-lg shadow-md">
      <div class="text-center mb-8">
        <h2 class="text-[#2e8b57] font-bold text-3xl m-0">
          Smart Meal Planner
        </h2>
        <div class="text-gray-500 text-sm mt-2">
          Masuk untuk mengatur rencana menu mingguan Anda
        </div>
      </div>

      <form action="#" method="POST" class="space-y-5">
        <div>
          <label
            for="email"
            class="block text-xs font-bold text-[#2e8b57] tracking-wide uppercase mb-1.5"
          >
            📧 Alamat Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-base text-gray-900 focus:outline-none focus:border-[#2e8b57] focus:bg-white transition-all duration-200"
            placeholder="nama@email.com"
          />
        </div>

        <div>
          <div class="flex justify-between items-center mb-1.5">
            <label
              for="password"
              class="block text-xs font-bold text-[#2e8b57] tracking-wide uppercase"
            >
              🔒 Kata Sandi
            </label>
            <a
              href="#"
              class="text-xs font-medium text-gray-500 hover:text-[#2e8b57] transition-colors"
            >
              Lupa sandi?
            </a>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            required
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-base text-gray-900 focus:outline-none focus:border-[#2e8b57] focus:bg-white transition-all duration-200"
            placeholder="••••••••"
          />
        </div>

        <div class="flex items-center">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            class="w-4 h-4 text-[#2e8b57] border-gray-300 rounded focus:ring-[#2e8b57] accent-[#2e8b57]"
          />
          <label for="remember" class="ml-2 text-sm text-gray-600 select-none">
            Ingat akun saya
          </label>
        </div>

        <div class="pt-2">
          <button
            type="submit"
            class="w-full py-3 bg-[#2e8b57] text-white font-bold text-base rounded shadow-md shadow-green-700/20 hover:opacity-90 transition-opacity focus:outline-none"
          >
            Masuk Sekarang
          </button>
        </div>
      </form>

      <div class="relative flex py-4 items-center my-4">
        <div class="flex-grow border-t border-gray-200"></div>
        <span class="flex-shrink mx-4 text-gray-400 text-xs uppercase tracking-wider">
          Atau
        </span>
        <div class="flex-grow border-t border-gray-200"></div>
      </div>

      <div class="text-center text-sm text-gray-600">
        Belum punya akun?
        <a href="#" class="font-bold text-[#2e8b57] hover:underline ml-1">
          Daftar di sini
        </a>
      </div>
    </div>
  );
}

export default App;
