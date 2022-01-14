import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';
import ListItems from './common/ListItems';

interface Props {
  fronts: BillType[];
  hasMoreBills: boolean;
  onReadFront: (id: string) => void;
  onLoadMore: () => void;
}

const ListFronts: React.FC<Props> = ({
  fronts,
  hasMoreBills,
  onReadFront,
  onLoadMore,
}) => (
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
);

const styles = StyleSheet.create({
  table: {},
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
