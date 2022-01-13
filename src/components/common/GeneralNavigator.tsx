import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GeneralHomeScreen from '../../screens/home/GeneralHomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function GeneralNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="GeneralHome"
          component={GeneralHomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default GeneralNavigator;
