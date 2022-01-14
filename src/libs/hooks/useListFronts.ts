import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBillsAPI } from '../api/bills';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'FrontList'>;
}

export default function useListFronts({ navigation }: Props) {
  const dispatch = useDispatch();
  const { bills, hasMoreBills, listBillsLoading } = useSelector(
    (state) => state.bills
  );
  const [cursor, setCursor] = useState('');

  const onReadFront = (id: string) => {
    navigation.navigate('FrontRead', { id });
  };

  const onLoadMore = async () => {
    if (hasMoreBills && !listBillsLoading) {
      const lastId = bills[bills.length - 1]?.id;
      setCursor(lastId);
      await dispatch(listBillsAPI({ cursor }));
    }
  };

  useEffect(() => {
    dispatch(listBillsAPI({}));
  }, []);

  return {
    fronts: bills,
    loading: listBillsLoading,
    hasMoreBills,
    onReadFront,
    onLoadMore,
  };
}
