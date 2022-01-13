import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import General from '../../components/home/General';
import useHome from '../../libs/hooks/useHome';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'GeneralHome' | 'GeneralList'
  >;
}

function GeneralHomeScreen({ navigation }: Props) {
  const { menu, onGeneralList } = useHome({ navigation });

  return <General menu={menu} onGeneralList={onGeneralList} />;
}

export default GeneralHomeScreen;
