import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { readBillAPI, removeBillAPI, restoreBillAPI } from '../api/bills';
import { clearBill } from '../modules/bills';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList>;
}

export default function useReadFront({ navigation, route }: Props) {
  const { id }: any = route.params;
  const dispatch = useDispatch();
  const { bill, readBillLoading } = useSelector((state) => state.bills);
  const { user } = useSelector((state) => state.auth);

  const onRemoveBill = async () => {
    Alert.alert('경고!', '전표가 삭제됩니다!', [
      {
        text: '취소',
        onPress: () => {
          return;
        },
      },
      {
        text: '네!',
        onPress: async () => {
          await dispatch(removeBillAPI(id));
          await Alert.alert('삭제완료!');
          navigation.goBack();
        },
      },
    ]);
  };

  const onRestoreBill = async () => {
    Alert.alert('경고!', '전표 삭제 후 목록으로 돌아갑니다', [
      {
        text: '취소',
        onPress: () => {
          return;
        },
      },
      {
        text: '네!',
        onPress: async () => {
          await dispatch(restoreBillAPI(id));
          await Alert.alert('목록으로 돌아갑니다.');
          navigation.navigate('Cart');
        },
      },
    ]);
  };

  useEffect(() => {
    dispatch(readBillAPI(id));

    return () => {
      dispatch(clearBill());
    };
  }, [dispatch]);

  return {
    front: bill,
    user,
    loading: readBillLoading,
    onRemoveBill,
    onRestoreBill,
  };
}
