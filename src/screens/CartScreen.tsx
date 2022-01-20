import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import Cart from '../components/cart/Cart';
import Loading from '../components/common/Loading';
import useCart from '../libs/hooks/useCart';
import useLoggedIn from '../libs/hooks/useLoggedIn';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Cart'>;
}

function CartScreen({ navigation }: Props) {
  useLoggedIn();
  const {
    cart,
    loading,
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
  } = useCart({ navigation });

  if (loading) return <Loading />;

  return (
    <Cart
      cart={cart}
      title={title}
      setTitle={setTitle}
      hall={hall}
      setHall={setHall}
      etc={etc}
      setEtc={setEtc}
      totalAmount={totalAmount}
      onAddBill={onAddBill}
      onRemoveCart={onRemoveCart}
      onRemoveOneCart={onRemoveOneCart}
    />
  );
}

export default CartScreen;
