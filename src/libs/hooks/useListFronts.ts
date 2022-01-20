import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBillsAPI } from '../api/bills';
import { changeTitle, clearBills } from '../modules/bills';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'FrontList'>;
}

export default function useListFronts({ navigation }: Props) {
  const dispatch = useDispatch();
  const { bills, hasMoreBills, listBillsLoading, title } = useSelector(
    (state) => state.bills
  );
  const [search, setSearch] = useState('');

  const onReadFront = (id: string) => {
    navigation.navigate('FrontRead', { id });
  };

  const onLoadMore = async () => {
    const lastId = bills[bills.length - 1]?.id;
    console.log(lastId, title);
    await dispatch(listBillsAPI({ cursor: lastId, title }));
  };

  const onSearch = async () => {
    if (search === '') {
      await dispatch(changeTitle(''));
      await dispatch(clearBills());
      await dispatch(listBillsAPI({}));
    } else {
      await dispatch(changeTitle(search));
      await dispatch(clearBills());
      await dispatch(listBillsAPI({ title: search }));
    }
  };

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
    search,
    setSearch,
    onReadFront,
    onLoadMore,
    onSearch,
  };
}
