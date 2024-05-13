import React from 'react';
import WebView from 'react-native-webview';

export default function GameScreen({ navigation }) {
  const WEBVIEW_URL = 'https://is404notfound.github.io/666-find-anomalies/';

  return (
    <WebView source={{ uri: WEBVIEW_URL }} style={{ flex: 1 }} />
  );
}