import React from 'react';
import { View, Text, Button } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Écran d'Inscription</Text>
      <Button title="Se connecter" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
