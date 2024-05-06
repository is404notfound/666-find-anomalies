import React from 'react';
import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
            
          </Text>
        <Button
          title="Game Start"
          onPress={() => navigation.navigate('Game')}
        />
      </View>
    );
  }