import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { auth } from '../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Inscription réussie 🎉');
      // navigation vers une autre page
    } catch (error) {
      alert('Erreur d’inscription : ' + error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/telephone.png')} // Remplace par ton vrai logo
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Titre */}
        <Text style={styles.title}>Créer un compte</Text>

        {/* Formulaire */}
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
          <TextInput
            placeholder="Confirmer le mot de passe"
            placeholderTextColor="#999"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
          />
        </View>

        {/* Bouton inscription */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>S'inscrire</Text>
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

        {/* Lien vers la connexion */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Déjà un compte ? Se connecter</Text>
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
