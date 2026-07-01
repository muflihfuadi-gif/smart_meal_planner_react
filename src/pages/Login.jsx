import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
  
    const namaUser = email.split('@')[0];
    
    console.log('Memproses Login...', { email, password, rememberMe });
    navigate('/step-1', { state: { username: namaUser } });
  };

  return (
    <div className="w-full flex-grow flex items-center justify-center min-h-[80vh] py-10">
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
        onSubmit={handleLogin}
      />
    </div>
  );
};

export default Login;