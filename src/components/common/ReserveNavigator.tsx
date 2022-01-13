import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReserveHomeScreen from '../../screens/home/ReserveHomeScreen';
import ReserveListScreen from '../../screens/menu/ReserveListScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function ReserveNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="ReserveHome"
          component={ReserveHomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ReserveList"
          component={ReserveListScreen}
          options={{
            title: '이전으로',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ReserveNavigator;
