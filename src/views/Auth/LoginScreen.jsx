import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Écran de Connexion</Text>
      <Button title="S'inscrire" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}
