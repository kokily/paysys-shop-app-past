import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBillsAPI } from '../api/bills';
import { clearBills } from '../modules/bills';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'FrontList'>;
}

export default function useListFronts({ navigation }: Props) {
  const dispatch = useDispatch();
  const { bills, hasMoreBills, listBillsLoading } = useSelector(
    (state) => state.bills
  );
  const [cursor, setCursor] = useState('');

  // Search State
  const [title, setTitle] = useState('');

  const onReadFront = (id: string) => {
    navigation.navigate('FrontRead', { id });
  };

  const onLoadMore = async () => {
    if (hasMoreBills && !listBillsLoading) {
      const lastId = bills[bills.length - 1]?.id;
      setCursor(lastId);
      await dispatch(listBillsAPI({ cursor, title }));
    }
  };

  const onSearch = async () => {
    if (title === '') {
      dispatch(clearBills());
      dispatch(listBillsAPI({}));
    } else {
      dispatch(clearBills());
      dispatch(listBillsAPI({ title }));
    }
  };

  useEffect(() => {
    setTitle('');
    dispatch(clearBills());
    dispatch(listBillsAPI({ title }));
  }, []);

  return {
    fronts: bills,
    loading: listBillsLoading,
    hasMoreBills,
    title,
    setTitle,
    onReadFront,
    onLoadMore,
    onSearch
  };
}
