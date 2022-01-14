import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

interface Props {
  onAddBill: () => void;
  onRemoveCart: () => void;
}

const CartButtons: React.FC<Props> = ({ onAddBill, onRemoveCart }) => (
  <View style={styles.buttonGroup}>
    <Button
      title="전체삭제"
      type="outline"
      titleStyle={styles.removeTitle}
      style={styles.removeButton}
      onPress={onRemoveCart}
    />
    <Button
      title="전송하기"
      type="outline"
      titleStyle={styles.addTitle}
      style={styles.addButton}
      onPress={onAddBill}
    />
  </View>
);

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  removeTitle: {
    color: 'red',
  },
  removeButton: {
    borderColor: 'red',
    maxWidth: 120,
    marginRight: 15,
  },
  addTitle: {
    color: 'blue',
  },
  addButton: {
    borderColor: 'blue',
    maxWidth: 120,
  },
});

export default CartButtons;
