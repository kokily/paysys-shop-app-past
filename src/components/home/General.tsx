import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import AppTemplate from '../common/AppTemplate';

interface Props {
  menu: {
    id: number;
    divide: string;
  }[];
  onGeneralList: (divide: string) => void;
}

const General: React.FC<Props> = ({ menu, onGeneralList }: Props) => (
  <AppTemplate>
    {menu.map((item) => (
      <ListItem
        key={item.id}
        bottomDivider
        hasTVPreferredFocus={false}
        onPress={() => onGeneralList(item.divide)}
      >
        <ListItem.Content style={styles.menu}>
          <ListItem.Title style={styles.item}>{item.divide}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ))}
  </AppTemplate>
);

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  item: {
    fontSize: 18,
    fontWeight: '600',
    color: '#e47112',
  },
});

export default General;
