import React from 'react';
import Login from '../components/auth/Login';
import useLogin from '../libs/hooks/useLogin';

function LoginScreen() {
  const { username, setUsername, password, setPassword, onLogin } = useLogin();

  return (
    <Login
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onLogin={onLogin}
    />
  );
}

export default LoginScreen;
