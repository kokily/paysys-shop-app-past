import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCartAPI } from '../api/cart';
import { readMenuAPI } from '../api/menu';
import { clearMenu } from '../modules/menu';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Detail'>;
  route: RouteProp<RootStackParamList, 'Detail'>;
}

export default function useMenuDetail({ navigation, route }: Props) {
  const { id }: any = route.params;
  const dispatch = useDispatch();
  const { menu, readMenuLoading } = useSelector((state) => state.menu);
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');

  const onAddCart = async () => {
    if (
      count === '' ||
      price === '' ||
      parseInt(count) < 1 ||
      parseInt(price) < 1
    ) {
      Alert.alert('단가와 수량을 입력하세요!');
      return;
    }

    await dispatch(
      addCartAPI({
        item_id: id,
        count: parseInt(count),
        price: parseInt(price),
      })
    );
    await Alert.alert('전표 전송!');
    navigation.goBack();
  };

  const onBack = () => {
    dispatch(clearMenu());
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(readMenuAPI(id));

    return () => {
      dispatch(clearMenu());
    };
  }, [dispatch]);

  useEffect(() => {
    if (menu) {
      if (menu?.price !== 0) {
        setPrice(menu.price.toString());
      }
    }
  }, [menu]);

  return {
    menu,
    loading: readMenuLoading,
    price,
    setPrice,
    count,
    setCount,
    onAddCart,
    onBack,
  };
}
