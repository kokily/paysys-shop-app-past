import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

interface Props {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  hall: string;
  setHall: Dispatch<SetStateAction<string>>;
  etc: string;
  setEtc: Dispatch<SetStateAction<string>>;
}

const CartInputs: React.FC<Props> = ({
  title,
  setTitle,
  hall,
  setHall,
  etc,
  setEtc,
}) => (
  <View style={styles.inputGroup}>
    <Input
      placeholder="행사명(*)"
      autoCapitalize="none"
      autoCompleteType="off"
      value={title}
      onChangeText={setTitle}
    />
    <Input
      placeholder="행사홀(*)"
      autoCapitalize="none"
      autoCompleteType="off"
      value={hall}
      onChangeText={setHall}
    />
    <Input
      placeholder="기타사항"
      autoCapitalize="none"
      autoCompleteType="off"
      value={etc}
      onChangeText={setEtc}
    />
  </View>
);

const styles = StyleSheet.create({
  inputGroup: {
    marginTop: 25,
  },
});

export default CartInputs;
