import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import React from 'react';
import Loading from '../../components/common/Loading';
import useMenuList from '../../libs/hooks/useMenuList';
import GeneralList from '../../components/menu/GeneralList';
import useLoggedIn from '../../libs/hooks/useLoggedIn';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'SoldierList' | 'ReserveList' | 'GeneralList'
  >;
  route: RouteProp<
    RootStackParamList,
    'SoldierList' | 'ReserveList' | 'GeneralList'
  >;
}

function GeneralListScreen({ navigation, route }: Props) {
  useLoggedIn();
  const { menus, divide, loading, onReadMenu } = useMenuList({
    navigation,
    route,
  });

  if (loading) return <Loading />;

  return <GeneralList menus={menus} divide={divide} onReadMenu={onReadMenu} />;
}

export default GeneralListScreen;
