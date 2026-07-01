import React from 'react';

function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe,
  onSubmit
}) {
  return (
    <div className="bg-white w-full max-w-3xl p-12 rounded-xl shadow-lg transition-all duration-300">

      <div className="text-center mb-8">
        <h2 className="text-[#2e8b57] font-bold text-3xl m-0">
          Smart Meal Planner
        </h2>
        <div className="text-gray-500 text-sm mt-2">
          Masuk untuk mengatur rencana menu mingguan Anda
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">

        <div>
          <label
            htmlFor="login-email"
            className="block text-xs font-bold text-[#2e8b57] tracking-wide uppercase mb-1.5"
          >
            📧 Alamat Email
          </label>
          <input
            id="login-email"
            type="email"
            required
            placeholder="nama@email.com"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2e8b57] text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="login-password"
            className="block text-xs font-bold text-[#2e8b57] tracking-wide uppercase mb-1.5"
          >
            🔒 Kata Sandi
          </label>
          <input
            id="login-password"
            type="password"
            required
            placeholder="••••••••"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2e8b57] text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 text-[#2e8b57] border-gray-300 rounded focus:ring-[#2e8b57] accent-[#2e8b57]"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember" className="ml-2 text-sm text-gray-600 select-none cursor-pointer">
            Ingat akun saya
          </label>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3 bg-[#2e8b57] text-white font-bold text-base rounded shadow-md shadow-green-700/20 hover:opacity-90 transition-opacity focus:outline-none cursor-pointer"
          >
            Masuk Sekarang
          </button>
        </div>
      </form>

      <div className="relative flex py-4 items-center my-4">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase tracking-wider">
          Atau
        </span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <div className="text-center text-sm text-gray-600">
        Belum punya akun?{' '}
        <a href="#" className="text-[#2e8b57] font-bold hover:underline ml-1">
          Daftar di sini
        </a>
      </div>

    </div>
  );
}

export default LoginForm;