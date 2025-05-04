// app/login.tsx
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { login, register } from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
      Alert.alert('¡Inicio de sesión exitoso!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleRegister = async () => {
    try {
      await register(email, password);
      Alert.alert('¡Usuario registrado exitosamente!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      <View style={{ height: 10 }} />
      <Button title="Registrarse" onPress={handleRegister} color="#888" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginVertical: 8,
    borderRadius: 6
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20
  }
});
