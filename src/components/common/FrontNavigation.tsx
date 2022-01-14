import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListFrontsScreen from '../../screens/fronts/ListFrontsScreen';
import ReadFrontScreen from '../../screens/fronts/ReadFrontScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function FrontNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="FrontList"
          component={ListFrontsScreen}
          options={{
            title: '전표목록',
          }}
        />
        <Stack.Screen
          name="FrontRead"
          component={ReadFrontScreen}
          options={{
            title: '전표 세부사항',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default FrontNavigation;
