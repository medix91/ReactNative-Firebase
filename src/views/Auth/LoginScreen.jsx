import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/telephone.png')} // à remplacer par ton futur logo
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Titre */}
        <Text style={styles.title}>Connexion</Text>

        {/* Champs */}
        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Mot de passe"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>

        {/* Bouton connexion */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>

        {/* séparateur */}
        <Text style={styles.or}>ou</Text>

        {/* Icônes sociales */}
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconBox}>
            <Image source={require('../../../assets/google-icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Image source={require('../../../assets/apple-icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Image source={require('../../../assets/github-icon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Lien inscription */}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Pas encore de compte ? S'inscrire</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    padding: 30,
    justifyContent: 'center',
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00BF63',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  button: {
    backgroundColor: '#00BF63',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#00BF63',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  or: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#666',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 30,
  },
  iconBox: {
    backgroundColor: '#f2f2f2',
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  link: {
    color: '#00BF63',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
  },
});
