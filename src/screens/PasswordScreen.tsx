import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import Password from '../components/users/Password';
import useLoggedIn from '../libs/hooks/useLoggedIn';
import usePassword from '../libs/hooks/usePassword';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

function PasswordScreen({ navigation }: Props) {
  useLoggedIn({ navigation });
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
