import React, { useCallback, useMemo } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import ListItem from './ListItem';

interface Props {
  fronts: BillType[];
  loading: boolean;
  hasMoreBills: boolean;
  onReadFront: (id: string) => void;
  onLoadMore: () => void;
}

const ListItems: React.FC<Props> = ({
  fronts,
  loading,
  hasMoreBills,
  onLoadMore,
  onReadFront,
}) => {
  const renderItem = useCallback(
    ({ item }: { item: BillType }) => (
      <ListItem front={item} onReadFront={onReadFront} />
    ),
    []
  );

  const memoziedItem = useMemo(() => renderItem, [fronts]);

  return (
    <FlatList
      data={fronts}
      renderItem={memoziedItem}
      keyExtractor={(item) => item.id}
      ListFooterComponent={loading ? <ActivityIndicator /> : null}
      disableVirtualization={false}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.1}
      windowSize={10}
    />
  );
};

export default ListItems;
