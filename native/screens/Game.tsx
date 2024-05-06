import React from 'react';
import WebView from 'react-native-webview';

export default function GameScreen({ navigation }) {

  return (
    <WebView source={{ uri: 'http://localhost:3000' }} style={{ flex: 1 }} />
  );
}