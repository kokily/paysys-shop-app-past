import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import Loading from '../../components/common/Loading';
import ListFronts from '../../components/fronts/ListFronts';
import useListFronts from '../../libs/hooks/useListFronts';
import useLoggedIn from '../../libs/hooks/useLoggedIn';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

function ListFrontsScreen({ navigation }: Props) {
  useLoggedIn({ navigation });
  const {
    fronts,
    loading,
    hasMoreBills,
    title,
    setTitle,
    onReadFront,
    onLoadMore,
    onSearch,
  } = useListFronts({ navigation });

  if (loading) return <Loading />;

  return (
    <ListFronts
      fronts={fronts}
      loading={loading}
      hasMoreBills={hasMoreBills}
      title={title}
      setTitle={setTitle}
      onReadFront={onReadFront}
      onLoadMore={onLoadMore}
      onSearch={onSearch}
    />
  );
}

export default ListFrontsScreen;
