import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBillsAPI } from '../api/bills';
import { clearBills } from '../modules/bills';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function useListFronts({ navigation }: Props) {
  const dispatch = useDispatch();
  const { bills, hasMoreBills, listBillsLoading } = useSelector(
    (state) => state.bills
  );

  // Search State
  const [title, setTitle] = useState('');

  const onReadFront = (id: string) => {
    navigation.navigate('FrontRead', { id });
  };

  const onLoadMore = useCallback(() => {
    if (hasMoreBills && !listBillsLoading) {
      const lastId = bills[bills.length - 1]?.id;
      dispatch(listBillsAPI({ cursor: lastId, title }));
      console.log(bills.length);
    }
  }, [hasMoreBills, listBillsLoading, bills]);

  const onSearch = useCallback(() => {
    if (title === '') {
      dispatch(clearBills());
      dispatch(listBillsAPI({}));
    } else {
      dispatch(clearBills());
      dispatch(listBillsAPI({ title }));
    }
  }, [title]);

  useEffect(() => {
    dispatch(listBillsAPI({ title }));

    return () => {
      dispatch(clearBills());
    };
  }, [dispatch]);

  return {
    fronts: bills,
    loading: listBillsLoading,
    hasMoreBills,
    title,
    setTitle,
    onReadFront,
    onLoadMore,
    onSearch,
  };
}
