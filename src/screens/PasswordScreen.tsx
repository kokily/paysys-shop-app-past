import React from 'react';
import Password from '../components/users/Password';
import usePassword from '../libs/hooks/usePassword';

function PasswordScreen() {
  const { password, setPassword, onChangePassword } = usePassword();

  return (
    <Password
      password={password}
      setPassword={setPassword}
      onChangePassword={onChangePassword}
    />
  );
}

export default PasswordScreen;
