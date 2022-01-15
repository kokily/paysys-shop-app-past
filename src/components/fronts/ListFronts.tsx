import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';
import AppTemplate from '../common/AppTemplate';
import ListItems from './common/ListItems';
import Search from './common/Search';

interface Props {
  fronts: BillType[];
  hasMoreBills: boolean;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  onReadFront: (id: string) => void;
  onLoadMore: () => void;
  onSearch: () => void;
}

const ListFronts: React.FC<Props> = ({
  fronts,
  hasMoreBills,
  title,
  setTitle,
  onReadFront,
  onLoadMore,
  onSearch,
}) => (
  <AppTemplate>
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

      <ListItems
        fronts={fronts}
        hasMoreBills={hasMoreBills}
        onReadFront={onReadFront}
        onLoadMore={onLoadMore}
      />
    </Grid>
  </AppTemplate>
);

const styles = StyleSheet.create({
  table: {
    flex: 1,
  },
  header: {
    height: 45,
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
