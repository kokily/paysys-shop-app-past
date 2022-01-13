import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

interface Props {
  onAddCart: () => void;
  onBack: () => void;
}

const MenuButtons: React.FC<Props> = ({ onAddCart, onBack }) => (
  <View style={styles.buttons}>
    <Button
      title="전표전송"
      type="outline"
      titleStyle={styles.confirmTitle}
      buttonStyle={styles.confirmButton}
      onPress={onAddCart}
    />
    <Button
      title="취소하기"
      type="outline"
      titleStyle={styles.cancelTitle}
      buttonStyle={styles.cancelButton}
      onPress={onBack}
    />
  </View>
);

const styles = StyleSheet.create({
  buttons: { flexDirection: 'row', justifyContent: 'center' },
  confirmTitle: { color: 'blue' },
  confirmButton: { borderColor: 'blue', maxWidth: 120, marginRight: 15 },
  cancelTitle: { color: 'red' },
  cancelButton: { borderColor: 'red', maxWidth: 120 },
});

export default MenuButtons;
