import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';

interface ItemProps {
  front: BillType;
  onReadFront: (id: string) => void;
}

const Item: React.FC<ItemProps> = ({ front, onReadFront }) => (
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

interface Props {
  fronts: BillType[];
  hasMoreBills: boolean;
  onReadFront: (id: string) => void;
  onLoadMore: () => void;
}

const ListItems: React.FC<Props> = ({
  fronts,
  hasMoreBills,
  onReadFront,
  onLoadMore,
}) => (
  <>
    {fronts.length < 1 ? (
      <Row style={styles.front}>
        <Col size={100}>
          <Text style={styles.frontText}>작성된 빌지가 없습니다.</Text>
        </Col>
      </Row>
    ) : (
      <>
        {fronts.map((front) => (
          <Item key={front.id} front={front} onReadFront={onReadFront} />
        ))}
      </>
    )}

    {hasMoreBills && (
      <Row style={styles.front} onPress={onLoadMore}>
        <Col size={100}>
          <Text style={styles.moreText}>더 읽어오기</Text>
        </Col>
      </Row>
    )}
  </>
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
  moreText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e55ce',
    paddingVertical: 10,
    textAlign: 'center',
  },
});

export default ListItems;
