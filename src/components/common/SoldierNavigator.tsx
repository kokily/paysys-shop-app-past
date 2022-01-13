import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SoldierHomeScreen from '../../screens/home/SoldierHomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function SoldierNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="SoldierHome"
          component={SoldierHomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SoldierNavigator;
