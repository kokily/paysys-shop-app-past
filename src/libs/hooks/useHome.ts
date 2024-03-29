import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    | 'SoldierHome'
    | 'SoldierList'
    | 'ReserveHome'
    | 'ReserveList'
    | 'GeneralHome'
    | 'GeneralList'
  >;
}

export default function useHome({ navigation }: Props) {
  const menu = [
    { id: 0, divide: '식사(뷔페)' },
    { id: 1, divide: '식사(중식)' },
    { id: 2, divide: '식사(양식)' },
    { id: 3, divide: '식사(한식)' },
    { id: 4, divide: '식사(수행)' },
    { id: 5, divide: '식사(다과)' },
    { id: 6, divide: '대관료' },
    { id: 7, divide: '레드와인' },
    { id: 8, divide: '화이트와인/샴페인' },
    { id: 9, divide: '주스/차' },
    { id: 10, divide: '민속주/고량주' },
    { id: 11, divide: '양주' },
    { id: 12, divide: '기타주류' },
    { id: 13, divide: '칵테일' },
    { id: 14, divide: '반입료' },
    { id: 15, divide: '부대비용' },
  ];

  const onSoldierList = (divide: string) => {
    navigation.navigate('SoldierList', {
      native: '현역',
      divide: `${divide}`,
    });
  };

  const onReserveList = (divide: string) => {
    navigation.navigate('ReserveList', {
      native: '예비역',
      divide: `${divide}`,
    });
  };

  const onGeneralList = (divide: string) => {
    navigation.navigate('GeneralList', {
      native: '일반',
      divide: `${divide}`,
    });
  };

  return {
    menu,
    onSoldierList,
    onReserveList,
    onGeneralList,
  };
}
