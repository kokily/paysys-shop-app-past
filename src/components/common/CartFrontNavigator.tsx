import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../../screens/CartScreen';
import ListFrontsScreen from '../../screens/fronts/ListFrontsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function CartFrontNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown: false,
            title: '전표확인',
          }}
        />
        <Stack.Screen
          name="FrontList"
          component={ListFrontsScreen}
          options={{
            headerShown: false,
            title: '전표목록',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CartFrontNavigator;
