import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
}

function AppTemplate({ children }: Props) {
  return <SafeAreaView>{children}</SafeAreaView>;
}

export default AppTemplate;
