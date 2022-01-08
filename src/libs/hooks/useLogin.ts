import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { loginAPI } from '../api/auth';

export default function useLogin() {
  const dispatch = useDispatch();
  const { loginError } = useSelector((state) => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = useCallback(() => {
    if ([username, password].includes('')) {
      Alert.alert('빈 칸 없이 입력하세요');
      return;
    }

    dispatch(loginAPI({ username, password }));
  }, [dispatch, username, password]);

  return {
    username,
    setUsername,
    password,
    setPassword,
    onLogin,
  };
}
