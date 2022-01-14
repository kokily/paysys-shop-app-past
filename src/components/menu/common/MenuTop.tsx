import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Input, Text } from 'react-native-elements';

interface Props {
  menu: ItemType;
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
}

const MenuTop: React.FC<Props> = ({ menu, price, setPrice }) => (
  <Grid>
    <Row style={styles.content}>
      <Col size={30}>
        <Text style={styles.contentText}>구 분</Text>
      </Col>
      <Col size={70}>
        <Text style={styles.contentText}>{menu.divide}</Text>
      </Col>
    </Row>

    <Row style={styles.content}>
      <Col size={30}>
        <Text style={styles.contentText}>단 가</Text>
      </Col>
      <Col
        size={70}
        style={menu.price === 0 ? { height: 40 } : {}}
      >
        {menu.price === 0 ? (
          <Input
            placeholder="단가를 입력하세요"
            autoCapitalize="none"
            value={price}
            onChangeText={setPrice}
            style={styles.input}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            autoCompleteType="off"
          />
        ) : (
          <Text style={styles.contentText}>
            {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </Text>
        )}
      </Col>
    </Row>

    <Row style={styles.content}>
      <Col size={30}>
        <Text style={styles.contentText}>단 위</Text>
      </Col>
      <Col size={70}>
        <Text style={styles.contentText}>{menu.unit}</Text>
      </Col>
    </Row>
  </Grid>
);

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#748FFC',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: 'white',
    paddingVertical: 10,
  },
  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  input: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 5,
  },
});

export default MenuTop;
