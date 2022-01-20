import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function useLoggedIn({ navigation }: Props) {
  const { user, checkLoading, checkError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!checkLoading && !user && checkError) {
      navigation.navigate('Login');
    }
  }, []);
}
