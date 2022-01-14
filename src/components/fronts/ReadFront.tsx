import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import AppTemplate from '../common/AppTemplate';
import ReadFrontButtons from './common/ReadFrontButtons';
import ReadFrontTable from './common/ReadFrontTable';
import ReadFrontTop from './common/ReadFrontTop';
import TotalAmount from './common/TotalAmount';

interface Props {
  front: BillType | null;
  user: MeType | null;
  onRemoveBill: () => void;
  onRestoreBill: () => void;
}

const ReadFront: React.FC<Props> = ({
  front,
  user,
  onRemoveBill,
  onRestoreBill,
}) => (
  <AppTemplate>
    {front && user && (
      <>
        <Text h4 h4Style={styles.title}>
          [{' '}
          {front.title.length > 18
            ? `${front.title.slice(0, 18)}...`
            : front.title}{' '}
          ]
        </Text>

        <ReadFrontTop front={front} />
        <ReadFrontTable front={front} />
        <TotalAmount total={front.total_amount} />

        <ReadFrontButtons
          onRemoveBill={onRemoveBill}
          onRestoreBill={onRestoreBill}
        />
      </>
    )}
  </AppTemplate>
);

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#00a0a0',
  },
});

export default ReadFront;
