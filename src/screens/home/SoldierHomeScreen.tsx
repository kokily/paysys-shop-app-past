import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import Soldier from '../../components/home/Soldier';
import useHome from '../../libs/hooks/useHome';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'SoldierHome' | 'SoldierList'
  >;
}

function SoldierHomeScreen({ navigation }: Props) {
  const { menu, onSoldierList } = useHome({ navigation });

  return <Soldier menu={menu} onSoldierList={onSoldierList} />;
}

export default SoldierHomeScreen;
