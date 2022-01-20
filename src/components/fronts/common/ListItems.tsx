import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import useListFronts from '../../../libs/hooks/useListFronts';
import ListItem from './ListItem';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'FrontList'>;
}

const ListItems: React.FC<Props> = ({ navigation }) => {
  const { fronts, loading, onReadFront, onLoadMore } = useListFronts({
    navigation,
  });

  const renderItem = ({ item }: { item: BillType }) => (
    <ListItem front={item} onReadFront={onReadFront} />
  );

  const memoziedItem = useMemo(() => renderItem, [fronts]);

  return (
    <FlatList
      data={fronts}
      renderItem={memoziedItem}
      keyExtractor={(item, i) => item.id + i}
      ListFooterComponent={loading ? <ActivityIndicator /> : null}
      disableVirtualization={false}
      onEndReached={onLoadMore}
      onEndReachedThreshold={1}
    />
  );
};

export default ListItems;
