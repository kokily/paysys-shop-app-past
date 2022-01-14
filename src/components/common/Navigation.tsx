import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import LoginNavigator from './LoginNavigator';
import client from '../../libs/api/client';
import { checkAPI } from '../../libs/api/auth';
import HeaderNavigator from './HeaderNavigator';

function Navigation() {
  const dispatch = useDispatch();
  const { user, checkLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchingCookie = async () => {
      const accessToken = await AsyncStorage.getItem('access_token');
      const refreshToken = await AsyncStorage.getItem('refresh_token');

      if (accessToken && refreshToken) {
        console.log('체킹됨!');
        // @ts-ignore
        client.defaults.headers.Cookie = `access_token=${accessToken}; refresh_token=${refreshToken}`;
      }
    };

    fetchingCookie();
    dispatch(checkAPI());
  }, [dispatch]);

  useEffect(() => {
    if (!checkLoading) {
      SplashScreen.hideAsync();
    }
  }, [dispatch]);

  return (
    <NavigationContainer>
      {user ? (
        <>
          <HeaderNavigator />
        </>
      ) : (
        <LoginNavigator />
      )}
    </NavigationContainer>
  );
}

export default Navigation;
