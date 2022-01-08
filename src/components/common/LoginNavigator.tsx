import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import LoginScreen from '../../screens/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function LoginNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '행사전표 시스템 로그인',
          headerTitleStyle: styles.title,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: '#4d88cf',
  },
});

export default LoginNavigator;
