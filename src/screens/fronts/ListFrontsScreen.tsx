import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import Loading from '../../components/common/Loading';
import ListFronts from '../../components/fronts/ListFronts';
import useListFronts from '../../libs/hooks/useListFronts';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'FrontList'>;
}

function ListFrontsScreen({ navigation }: Props) {
  const { fronts, loading, hasMoreBills, onReadFront, onLoadMore } =
    useListFronts({ navigation });

  if (loading) return <Loading />;

  return (
    <ListFronts
      fronts={fronts}
      hasMoreBills={hasMoreBills}
      onReadFront={onReadFront}
      onLoadMore={onLoadMore}
    />
  );
}

export default ListFrontsScreen;
