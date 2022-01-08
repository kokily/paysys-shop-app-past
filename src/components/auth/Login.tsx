import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Input } from 'react-native-elements';

interface Props {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  onLogin: () => void;
}

function Login({
  username,
  setUsername,
  password,
  setPassword,
  onLogin,
}: Props) {
  return (
    <Card>
      <Card.Title style={styles.title}>로그인</Card.Title>
      <Card.Divider />

      <Input
        placeholder="사용자 이름"
        textContentType="username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />

      <Input
        placeholder="비밀번호"
        textContentType="password"
        autoCapitalize="none"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Card.Divider />

      <Button title="로그인" onPress={onLogin} />
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: '#4db8cf',
  },
});

export default Login;
