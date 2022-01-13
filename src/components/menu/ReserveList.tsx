import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, ListItem, Text } from 'react-native-elements';
import AppTemplate from '../common/AppTemplate';

interface Props {
  menus: ItemType[];
  divide: string;
  onReadMenu: (id: string) => void;
}

const ReserveList: React.FC<Props> = ({ menus, divide, onReadMenu }) => (
  <AppTemplate>
    <Text h4 h4Style={styles.title}>
      {divide}
    </Text>

    <Divider />

    {menus.map((menu) => (
      <ListItem
        key={menu.id}
        hasTVPreferredFocus={false}
        onPress={() => onReadMenu(menu.id)}
        style={styles.container}
      >
        <ListItem.Content style={styles.menu}>
          <ListItem.Title style={styles.title}>
            {menu.name} |{' '}
            {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} |{' '}
            {menu.native}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ))}
  </AppTemplate>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 5,
    color: '#68a614',
  },
  container: {
    borderBottomColor: '#68a614',
    borderBottomWidth: 0.4,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ReserveList;
