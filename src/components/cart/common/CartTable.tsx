import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Button, Text } from 'react-native-elements';

interface Props {
  items: ItemType[] | null;
  onRemoveOneCart: (id: string, name: string) => void;
}

const CartBody: React.FC<Props> = ({ items, onRemoveOneCart }) => {
  return items && items.length > 0 ? (
    <>
      {items.map((item) => (
        <Row key={item.id} style={styles.content}>
          <Col size={20}>
            <Text style={styles.contentText}>[ {item.native} ]</Text>
            <Text style={styles.contentText}>{item.divide}</Text>
          </Col>
          <Col size={20}>
            <Text style={styles.contentText}>
              {item.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
          </Col>
          <Col size={40}>
            <Text style={[styles.contentText, { color: 'silver' }]}>
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
            </Text>
            <Text style={styles.contentText}>
              {item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </Text>
          </Col>
          <Col size={20} style={{ paddingRight: 5 }}>
            <Button
              title="삭 제"
              type="outline"
              buttonStyle={{
                borderColor: 'red',
              }}
              titleStyle={{ color: 'red', fontSize: 13 }}
              onPress={() => onRemoveOneCart(item.id, item.name)}
            />
          </Col>
        </Row>
      ))}
    </>
  ) : (
    <Row style={styles.content}>
      <Col size={100}>
        <Text style={styles.contentText}>등록된 품목이 없습니다.</Text>
      </Col>
    </Row>
  );
};

const CartTable: React.FC<Props> = ({ items, onRemoveOneCart }) => {
  return (
    <Grid style={styles.table}>
      <Row style={styles.header}>
        <Col size={20}>
          <Text style={styles.headerText}>적용</Text>
        </Col>
        <Col size={20}>
          <Text style={styles.headerText}>수량</Text>
        </Col>
        <Col size={40}>
          <Text style={styles.headerText}>단가</Text>
        </Col>
        <Col size={20}>
          <Text style={styles.headerText}>삭제</Text>
        </Col>
      </Row>

      <CartBody items={items} onRemoveOneCart={onRemoveOneCart} />
    </Grid>
  );
};

const styles = StyleSheet.create({
  table: {
    marginTop: 20,
  },
  header: {
    flex: 1,
    backgroundColor: '#46A678',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 15,
    marginVertical: 5,
    backgroundColor: 'rgb(12, 166, 120)',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#46A678',
    borderBottomWidth: 0.4,
    paddingVertical: 10,
  },
  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CartTable;
