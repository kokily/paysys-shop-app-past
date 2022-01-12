import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Navigation from './src/components/common/Navigation';
import rootReducer from './src/libs/modules';

const store = configureStore({ reducer: rootReducer });

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
