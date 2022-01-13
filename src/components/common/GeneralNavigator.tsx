import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GeneralHomeScreen from '../../screens/home/GeneralHomeScreen';
import GeneralListScreen from '../../screens/menu/GeneralListScreen';
import MenuDetailScreen from '../../screens/detail/MenuDetailScreen';

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
        <Stack.Screen
          name="GeneralList"
          component={GeneralListScreen}
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

export default GeneralNavigator;
