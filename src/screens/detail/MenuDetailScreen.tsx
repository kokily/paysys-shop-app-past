import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import useMenuDetail from '../../libs/hooks/useMenuDetail';
import Loading from '../../components/common/Loading';
import MenuDetail from '../../components/menu/MenuDetail';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Detail'>;
  route: RouteProp<RootStackParamList, 'Detail'>;
}

function MenuDetailScreen({ navigation, route }: Props) {
  const { menu, loading, price, setPrice, count, setCount, onAddCart, onBack } =
    useMenuDetail({ navigation, route });

  if (loading) return <Loading />;

  return (
    <MenuDetail
      menu={menu}
      price={price}
      setPrice={setPrice}
      count={count}
      setCount={setCount}
      onAddCart={onAddCart}
      onBack={onBack}
    />
  );
}

export default MenuDetailScreen;
