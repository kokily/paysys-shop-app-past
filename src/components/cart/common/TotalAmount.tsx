import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

interface Props {
  total: number;
}

const TotalAmount: React.FC<Props> = ({ total }) => (
  <View>
    <Text style={styles.total}>
      예상 결제금액 :{' '}
      {total && total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
    </Text>
  </View>
);

const styles = StyleSheet.create({
  total: {
    fontSize: 23,
    fontWeight: '600',
    color: 'red',
    textAlign: 'right',
    marginTop: 15,
    marginRight: 15,
  },
});

export default TotalAmount;
