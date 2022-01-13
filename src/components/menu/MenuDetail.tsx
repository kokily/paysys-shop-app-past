import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import AppTemplate from '../common/AppTemplate';
import MenuButtons from './common/MenuButtons';
import MenuContent from './common/MenuContent';
import MenuTop from './common/MenuTop';

interface Props {
  menu: ItemType | null;
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  count: string;
  setCount: Dispatch<SetStateAction<string>>;
  onAddCart: () => void;
  onBack: () => void;
}

const MenuDetail: React.FC<Props> = ({
  menu,
  price,
  setPrice,
  count,
  setCount,
  onAddCart,
  onBack,
}) => (
  <AppTemplate>
    {menu && (
      <Card>
        <Card.Title style={styles.title}>
          {menu.divide} | {menu.native}
        </Card.Title>

        <Card.Divider />

        <MenuTop menu={menu} price={price} setPrice={setPrice} />
        <MenuContent
          menu={menu}
          price={price}
          count={count}
          setCount={setCount}
        />
        <MenuButtons onAddCart={onAddCart} onBack={onBack} />
      </Card>
    )}
  </AppTemplate>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: 'white',
    backgroundColor: '#FF6B6B',
    padding: 10,
  },
});

export default MenuDetail;
