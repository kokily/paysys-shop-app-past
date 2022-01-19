import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import ListFrontsTemplate from './common/ListFrontsTemplate';
import ListItems from './common/ListItems';
import Search from './common/Search';

interface Props {
  fronts: BillType[];
  loading: boolean;
  hasMoreBills: boolean;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  onReadFront: (id: string) => void;
  onLoadMore: () => void;
  onSearch: () => void;
}

const ListFronts: React.FC<Props> = ({
  fronts,
  loading,
  hasMoreBills,
  title,
  setTitle,
  onReadFront,
  onLoadMore,
  onSearch,
}) => (
  <ListFrontsTemplate>
    <ScrollView>
      <Search title={title} setTitle={setTitle} onSearch={onSearch} />

      <Grid style={styles.table}>
        <Row style={styles.header}>
          <Col size={20}>
            <Text style={styles.headerText}>날짜</Text>
          </Col>
          <Col size={40}>
            <Text style={styles.headerText}>행사명</Text>
          </Col>
          <Col size={20}>
            <Text style={styles.headerText}>장소</Text>
          </Col>
          <Col size={20}>
            <Text style={styles.headerText}>작성자</Text>
          </Col>
        </Row>
      </Grid>
    </ScrollView>

    <ListItems
      fronts={fronts}
      loading={loading}
      hasMoreBills={hasMoreBills}
      onReadFront={onReadFront}
      onLoadMore={onLoadMore}
    />
  </ListFrontsTemplate>
);

const styles = StyleSheet.create({
  table: {
    paddingVertical: 0,
    marginBottom: 40,
  },
  header: {
    paddingVertical: 10,
    backgroundColor: '#3E98AD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default ListFronts;
