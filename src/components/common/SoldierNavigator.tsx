import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SoldierHomeScreen from '../../screens/home/SoldierHomeScreen';
import SoldierListScreen from '../../screens/menu/SoldierListScreen';
import MenuDetailScreen from '../../screens/detail/MenuDetailScreen';

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
        <Stack.Screen
          name="SoldierList"
          component={SoldierListScreen}
          options={{
            title: '이전으로',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={MenuDetailScreen}
          options={{
            title: '이전으로',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SoldierNavigator;
