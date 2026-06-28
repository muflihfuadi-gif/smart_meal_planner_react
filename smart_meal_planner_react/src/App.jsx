import React from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">

      <Navbar />

      <main className="flex flex-col items-center justify-center px-4 py-8">
        <Login />

      </main>
    </div>
  );
}

export default App;