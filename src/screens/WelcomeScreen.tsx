import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import AppTemplate from '../components/common/AppTemplate';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

function WelcomeScreen({ navigation }: Props) {
  return (
    <AppTemplate>
      <Card containerStyle={styles.container}>
        <Card.Title style={styles.title}>행사전표시스템</Card.Title>

        <Card.Divider />

        <View style={styles.contentBox}>
          <Text h4 h4Style={styles.content}>
            행사전표시스템은 컨벤션에서 사용하는 전표를 전산화하는 앱입니다.
          </Text>

          <Card.Image
            source={require('./../assets/shot01.png')}
            style={styles.image1}
          />

          <Text h4 h4Style={styles.content}>
            앱 사용자 등록은 홈페이지에서 승인받아 사용합니다.
          </Text>

          <Card.Image
            source={require('./../assets/shot02.png')}
            style={styles.image2}
          />

          <Text h4 h4Style={styles.content}>
            문의사항은 아래 관리자에게 연락주세요!
          </Text>
        </View>

        <View>
          <Text h4 h4Style={styles.copyright}>
            관리자: hkkokily5@gmail.com
          </Text>
        </View>

        <Button
          title="로그인하기"
          onPress={() => navigation.navigate('Login')}
        />
      </Card>
    </AppTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: '#4db8cf',
  },
  contentBox: {
    display: 'flex',
    marginBottom: 15,
  },
  content: {
    fontSize: 15,
    fontWeight: '300',
    marginTop: 25,
  },
  image1: {
    width: 150,
    marginTop: 25,
    marginLeft: 50,
  },
  image2: {
    width: 200,
    marginTop: 25,
    marginLeft: 110,
  },
  copyright: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 25,
  },
});

export default WelcomeScreen;
