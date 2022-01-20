import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import ListFrontsTemplate from './common/ListFrontsTemplate';
import ListItems from './common/ListItems';
import Search from './common/Search';

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  onSearch: () => void;
  navigation: NativeStackNavigationProp<RootStackParamList, 'FrontList'>;
}

const ListFronts: React.FC<Props> = ({
  search,
  setSearch,
  onSearch,
  navigation,
}) => (
  <ListFrontsTemplate>
    <ScrollView scrollEnabled={false}>
      <Search title={search} setTitle={setSearch} onSearch={onSearch} />

      <Grid style={styles.table}>
        <Row style={styles.header}>
          <Col size={20}>
            <Text style={styles.headerText}>날짜</Text>
          </Col>
          <Col size={40}>
            <Text style={styles.headerText}>행사명</Text>
          </Col>
          <Col size={20}>
            <Text style={styles.headerText}>장소</Text>
          </Col>
          <Col size={20}>
            <Text style={styles.headerText}>작성자</Text>
          </Col>
        </Row>
      </Grid>
    </ScrollView>

    <ListItems navigation={navigation} />
  </ListFrontsTemplate>
);

const styles = StyleSheet.create({
  table: {
    paddingVertical: 0,
    marginBottom: 40,
  },
  header: {
    paddingVertical: 10,
    backgroundColor: '#3E98AD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default ListFronts;
