import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import Reserve from '../../components/home/Reserve';
import useHome from '../../libs/hooks/useHome';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'ReserveHome' | 'ReserveList'
  >;
}

function ReserveHomeScreen({ navigation }: Props) {
  const { menu, onReserveList } = useHome({ navigation });

  return <Reserve menu={menu} onReserveList={onReserveList} />;
}

export default ReserveHomeScreen;
