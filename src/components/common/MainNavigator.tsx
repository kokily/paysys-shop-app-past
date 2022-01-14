import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import SoldierNavigator from './SoldierNavigator';
import ReserveNavigator from './ReserveNavigator';
import GeneralNavigator from './GeneralNavigator';
import CartScreen from '../../screens/CartScreen';
import FrontNavigation from './FrontNavigation';

const Tab = createBottomTabNavigator<RootStackParamList>();

function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SoldierHome"
        component={SoldierNavigator}
        options={{
          title: '현 역',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={styles.image}
              source={
                focused
                  ? require('../../assets/star02.png')
                  : require('../../assets/star01.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="ReserveHome"
        component={ReserveNavigator}
        options={{
          title: '예비역',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={styles.image}
              source={
                focused
                  ? require('../../assets/dog-tag02.png')
                  : require('../../assets/dog-tag01.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="GeneralHome"
        component={GeneralNavigator}
        options={{
          title: '일 반',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={styles.image}
              source={
                focused
                  ? require('../../assets/general02.png')
                  : require('../../assets/general01.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: '전표확인',
          unmountOnBlur: true,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={styles.image}
              source={
                focused
                  ? require('../../assets/cart02.png')
                  : require('../../assets/cart01.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="FrontList"
        component={FrontNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={styles.image}
              source={
                focused
                  ? require('../../assets/front02.png')
                  : require('../../assets/front01.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    maxWidth: 20,
    maxHeight: 20,
  },
});

export default MainNavigator;
