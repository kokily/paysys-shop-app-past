import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReserveHomeScreen from '../../screens/home/ReserveHomeScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ReserveNavigator;
