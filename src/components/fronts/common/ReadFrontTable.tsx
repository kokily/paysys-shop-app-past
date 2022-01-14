import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';
import ReadFrontItem from './ReadFrontItem';

interface Props {
  front: BillType;
}

const ReadFrontTable: React.FC<Props> = ({ front }) => (
  <Grid style={styles.table}>
    <Row>
      <Col size={20} style={styles.header}>
        <Text style={styles.headerText}>구분</Text>
      </Col>
      <Col size={40} style={styles.header}>
        <Text style={styles.headerText}>상품명/단가</Text>
      </Col>
      <Col size={15} style={styles.header}>
        <Text style={styles.headerText}>수량</Text>
      </Col>
      <Col size={45} style={styles.header}>
        <Text style={styles.headerText}>금액</Text>
      </Col>
    </Row>

    {front.items.map((item) => (
      <ReadFrontItem key={item.id} item={item} />
    ))}
  </Grid>
);

const styles = StyleSheet.create({
  table: {
    marginTop: 20,
  },
  header: {
    backgroundColor: '#364FC7',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ReadFrontTable;
