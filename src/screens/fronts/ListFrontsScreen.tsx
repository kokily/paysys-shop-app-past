import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import ListFronts from '../../components/fronts/ListFronts';
import useListFronts from '../../libs/hooks/useListFronts';
import useLoggedIn from '../../libs/hooks/useLoggedIn';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'FrontList'>;
}

function ListFrontsScreen({ navigation }: Props) {
  useLoggedIn();
  const { search, setSearch, onSearch } = useListFronts({ navigation });

  return (
    <ListFronts
      search={search}
      setSearch={setSearch}
      onSearch={onSearch}
      navigation={navigation}
    />
  );
}

export default ListFrontsScreen;
