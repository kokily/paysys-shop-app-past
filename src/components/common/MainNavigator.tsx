import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import SoldierScreen from '../../screens/SoldierScreen';
import ReserveScreen from '../../screens/ReserveScreen';
import GeneralScreen from '../../screens/GeneralScreen';
import CartScreen from '../../screens/CartScreen';
import FrontsScreen from '../../screens/FrontsScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Soldier"
        component={SoldierScreen}
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
        name="Reserve"
        component={ReserveScreen}
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
        name="General"
        component={GeneralScreen}
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
        name="Fronts"
        component={FrontsScreen}
        options={{
          title: '전표목록',
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
