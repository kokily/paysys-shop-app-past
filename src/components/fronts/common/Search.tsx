import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Button, Card, Input } from 'react-native-elements';

interface Props {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  onSearch: () => void;
}

const Search: React.FC<Props> = ({ title, setTitle, onSearch }) => (
  <Card containerStyle={styles.card}>
    <Grid>
      <Row>
        <Col size={70}>
          <Input
            textContentType="none"
            autoCapitalize="none"
            value={title}
            onChangeText={setTitle}
            placeholder="제목을 검색하세요"
          />
        </Col>
        <Col size={30}>
          <Button title="검색" onPress={onSearch} />
        </Col>
      </Row>
    </Grid>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginTop: 0,
    marginBottom: 15,
    paddingBottom: 0,
  },
});

export default Search;
