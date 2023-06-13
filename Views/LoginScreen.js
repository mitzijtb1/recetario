import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación con tu backend
    // Verificar las credenciales del usuario y manejar el inicio de sesión

    // Si el inicio de sesión es exitoso, navega a la ventana principal
    navigation.navigate('RecipeList');
  };

  return (
    <View style={styles.container}>
      <FontAwesome name="user" size={100} color="black" style={styles.icon} />
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button
        title="Iniciar Sesión"
        onPress={handleLogin}
        color="black"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
  },
  icon: {
    marginBottom: 20,
  },
});

export default LoginScreen;
