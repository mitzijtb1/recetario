import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RecipeListScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Aquí puedes agregar la lógica para cerrar sesión y redirigir al usuario a la ventana de inicio de sesión
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text>Bienvenido a la lista de recetas</Text>
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecipeListScreen;
