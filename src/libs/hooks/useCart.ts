import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { addBillAPI } from '../api/bills';
import { removeCartAPI, removeOneCartAPI, viewCartAPI } from '../api/cart';
import { clearCart } from '../modules/cart';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Cart'>;
}

export default function useCart({ navigation }: Props) {
  const dispatch = useDispatch();
  const { cart, totalAmount, viewCartLoading } = useSelector(
    (state) => state.cart
  );
  const [title, setTitle] = useState('');
  const [hall, setHall] = useState('');
  const [etc, setEtc] = useState(' ');

  const onAddBill = async () => {
    if ([title, hall, etc].includes('')) {
      Alert.alert('빈 칸 없이 입력해주세요');
      return;
    }

    await dispatch(addBillAPI({ title, hall, etc }));
    await Alert.alert('전표 전송!');
    await onRemoveCart();
    navigation.navigate('FrontList');
  };

  const onRemoveCart = async () => {
    await dispatch(removeCartAPI());
    await dispatch(viewCartAPI());
  };

  const onRemoveOneCart = async (id: string, name: string) => {
    Alert.alert(`${name} 품목을 삭제합니다.`);
    await dispatch(removeOneCartAPI(id));
    await dispatch(clearCart());
    await dispatch(viewCartAPI());
  };

  useEffect(() => {
    dispatch(clearCart());
    dispatch(viewCartAPI());
  }, [dispatch]);

  return {
    cart,
    loading: viewCartLoading,
    title,
    setTitle,
    hall,
    setHall,
    etc,
    setEtc,
    totalAmount,
    onAddBill,
    onRemoveCart,
    onRemoveOneCart,
  };
}
