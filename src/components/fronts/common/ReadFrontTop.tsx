import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';

interface Props {
  front: BillType;
}

const ReadFrontTop: React.FC<Props> = ({ front }) => (
  <Grid style={styles.table}>
    <Row>
      <Col size={40} style={styles.header}>
        <Text style={styles.headerText}>작성자</Text>
      </Col>
      <Col size={60} style={styles.content}>
        <Text style={styles.contentText}>{front.username} 님</Text>
      </Col>
    </Row>

    <Row>
      <Col size={40} style={styles.header}>
        <Text style={styles.headerText}>작성일자</Text>
      </Col>
      <Col size={60} style={styles.content}>
        <Text style={styles.contentText}>
          {new Date(front.created_at).toLocaleDateString('ko-KR')}
        </Text>
      </Col>
    </Row>

    <Row>
      <Col size={40} style={styles.header}>
        <Text style={styles.headerText}>행사장소</Text>
      </Col>
      <Col size={60} style={styles.content}>
        <Text style={styles.contentText}>{front.hall}</Text>
      </Col>
    </Row>
  </Grid>
);

const styles = StyleSheet.create({
  table: {
    marginTop: 20,
  },
  header: {
    backgroundColor: '#364fc7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ReadFrontTop;
