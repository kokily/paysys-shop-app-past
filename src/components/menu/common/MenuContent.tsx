import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Input, Text } from 'react-native-elements';

interface Props {
  menu: ItemType;
  price: string;
  count: string;
  setCount: Dispatch<SetStateAction<string>>;
}

const MenuContent: React.FC<Props> = ({ menu, price, count, setCount }) => (
  <Grid>
    <Row style={styles.number}>
      <Col size={30}>
        <Text style={styles.numberText}>수량: </Text>
      </Col>
      <Col size={70}>
        <Input
          placeholder="수 량"
          autoCapitalize="none"
          value={count}
          onChangeText={setCount}
          style={styles.numberInput}
          inputContainerStyle={{
            borderBottomWidth: 0,
          }}
          autoCompleteType="off"
          keyboardType="number-pad"
        />
      </Col>
    </Row>

    <Row style={styles.total}>
      <Col size={100}>
        <Text style={styles.totalMsg}>
          합계 금액:{' '}
          {menu.price === 0 ? (
            <>
              {(parseInt(price) * parseInt(count))
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </>
          ) : (
            <>
              {(menu.price * parseInt(count))
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </>
          )}
        </Text>
      </Col>
    </Row>
  </Grid>
);

const styles = StyleSheet.create({
  number: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  numberText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  numberInput: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    borderBottomWidth: 0.4,
  },
  total: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalMsg: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});

export default MenuContent;
