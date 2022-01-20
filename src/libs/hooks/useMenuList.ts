import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMenuAPI } from '../api/menu';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList>;
}

export default function useMenuList({ navigation, route }: Props) {
  const { native, divide }: any = route.params;
  const dispatch = useDispatch();
  const { menus, listMenuLoading } = useSelector((state) => state.menu);

  const onReadMenu = (id: string) => {
    navigation.navigate('Detail', { id });
  };

  useEffect(() => {
    dispatch(listMenuAPI({ native, divide }));
  }, [dispatch]);

  return {
    menus,
    divide,
    loading: listMenuLoading,
    onReadMenu,
  };
}
