import { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { changePasswordAPI } from '../api/users';

export default function usePassword() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');

  const onChangePassword = async () => {
    if (password === '') {
      Alert.alert('비밀번호를 입력하세요!');
      return;
    }

    if (password.length < 4) {
      Alert.alert('비밀번호는 최소 4자리 이상으로 변경하세요!');
      return;
    }

    await dispatch(changePasswordAPI({ password }));
    await Alert.alert('비밀번호 변경 완료!');
    setPassword('');
  };

  return {
    password,
    setPassword,
    onChangePassword,
  };
}
