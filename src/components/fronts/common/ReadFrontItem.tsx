import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';

interface Props {
  item: ItemType;
}

const ReadFrontItem: React.FC<Props> = ({ item }) => (
  <Row style={styles.bottomLine}>
    <Col size={20} style={styles.content}>
      <Text style={styles.contentText}>{item.native}</Text>
    </Col>
    <Col size={40} style={styles.content}>
      <Text style={styles.contentText}>{item.name}</Text>
      <Text style={styles.grayText}>
        {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
      </Text>
    </Col>
    <Col size={15} style={styles.content}>
      <Text style={styles.contentText}>{item.count}</Text>
    </Col>
    <Col size={45} style={styles.content}>
      <Text style={styles.contentText}>
        {item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
      </Text>
    </Col>
  </Row>
);

const styles = StyleSheet.create({
  content: {
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    fontWeight: '700',
  },
  grayText: {
    color: '#6e6e6e',
  },
  bottomLine: {
    borderBottomColor: '#364FC7',
    borderBottomWidth: 0.4,
  },
});

export default ReadFrontItem;
