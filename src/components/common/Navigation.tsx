import React, { useCallback, useEffect, useState } from 'react';
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
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        const accessToken = await AsyncStorage.getItem('access_token');
        const refreshToken = await AsyncStorage.getItem('refresh_token');

        if (accessToken && refreshToken) {
          console.log('체크!');
          // @ts-ignore
          client.defaults.headers.Cookie = `access_token=${accessToken}; refresh_token=${refreshToken}`;
        }

        await SplashScreen.preventAutoHideAsync();
        await dispatch(checkAPI());
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (err: any) {
        console.warn(err);
      } finally {
        setAppReady(true);
      }
    }

    prepare();
  }, [dispatch]);

  const onLayout = useCallback(async () => {
    if (appReady && !checkLoading) {
      await SplashScreen.hideAsync();
    }
  }, [appReady, checkLoading]);

  return (
    <NavigationContainer onReady={onLayout}>
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
