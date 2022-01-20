import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import React from 'react';
import Loading from '../../components/common/Loading';
import useMenuList from '../../libs/hooks/useMenuList';
import ReserveList from '../../components/menu/ReserveList';
import useLoggedIn from '../../libs/hooks/useLoggedIn';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList>;
}

function ReserveListScreen({ navigation, route }: Props) {
  useLoggedIn({ navigation });
  const { menus, divide, loading, onReadMenu } = useMenuList({
    navigation,
    route,
  });

  if (loading) return <Loading />;

  return <ReserveList menus={menus} divide={divide} onReadMenu={onReadMenu} />;
}

export default ReserveListScreen;
