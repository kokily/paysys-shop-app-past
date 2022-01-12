import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import React from 'react';
import MainNavigator from './MainNavigator';
import PasswordScreen from '../../screens/PasswordScreen';
import { useDispatch } from 'react-redux';
import { logoutAPI } from '../../libs/api/auth';

const Drawer = createDrawerNavigator<RootStackParamList>();

function LogoutContent(props: DrawerContentComponentProps) {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutAPI());
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="로그아웃" onPress={onLogout} />
    </DrawerContentScrollView>
  );
}

function HeaderNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <LogoutContent {...props} />}
      screenOptions={{
        drawerPosition: 'right',
      }}
    >
      <Drawer.Screen
        name="Soldier"
        component={MainNavigator}
        options={{
          title: '첫 메뉴로',
          headerTitle: '행사전표시스템',
        }}
      />
      <Drawer.Screen
        name="Password"
        component={PasswordScreen}
        options={{
          drawerLabel: '비밀번호 변경',
        }}
      />
    </Drawer.Navigator>
  );
}

export default HeaderNavigator;
