import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';

interface Props {
  front: BillType;
  onReadFront: (id: string) => void;
}

const ListItem: React.FC<Props> = ({ front, onReadFront }) => (
  <Row style={styles.front} onPress={() => onReadFront(front.id)}>
    <Col size={20}>
      <Text style={styles.frontText}>
        {new Date(front.created_at).toLocaleDateString('ko-KR')}
      </Text>
    </Col>
    <Col size={40}>
      <Text style={styles.frontText}>
        {front.title.length > 11
          ? `${front.title.slice(0, 11)}...`
          : front.title}
      </Text>
    </Col>
    <Col size={20}>
      <Text style={styles.frontText}>{front.hall}</Text>
    </Col>
    <Col size={20}>
      <Text style={styles.frontText}>{front.username}</Text>
    </Col>
  </Row>
);

const styles = StyleSheet.create({
  front: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  frontText: {
    fontSize: 16,
    color: '#3E98AD',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default ListItem;
