import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

interface Props {
  onRemoveBill: () => void;
  onRestoreBill: () => void;
}

function ReadFrontButtons({ onRemoveBill, onRestoreBill }: Props) {
  return (
    <View style={styles.buttonGroup}>
      <Button
        title="삭 제"
        type="solid"
        buttonStyle={[styles.button, styles.remove]}
        titleStyle={styles.remove}
        onPress={onRemoveBill}
      />
      <Button
        title="수 정"
        type="solid"
        buttonStyle={[styles.button, styles.restore]}
        titleStyle={styles.restore}
        onPress={onRestoreBill}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  button: {
    width: 120,
    marginRight: 10,
    fontWeight: '600',
  },
  remove: {
    color: 'white',
    borderColor: 'red',
    backgroundColor: 'red',
  },
  restore: {
    color: 'white',
    borderColor: '#00a0a0',
    backgroundColor: '#00a0a0',
  },
});

export default ReadFrontButtons;
