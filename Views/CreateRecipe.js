import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet, Alert } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';

import { db } from '../database/firebase';

const CreateRecipe = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  const saveNewRecipe = async () => {
    if (title === '') {
      Alert.alert('Completar título', 'Por favor introduce el título', [
        {
          text: 'Ok',
          style: 'destructive',
        },
      ]);
    } else if (description === '') {
      Alert.alert('Completar descripción', 'Por favor introduce la descripción', [
        {
          text: 'Ok',
          style: 'destructive',
        },
      ]);
    } else if (ingredients === '') {
      Alert.alert('Completar ingredientes', 'Por favor introduce los ingredientes', [
        {
          text: 'Ok',
          style: 'destructive',
        },
      ]);
    } else {
      const dataColl = collection(db, 'recipes');
      await addDoc(dataColl, {
        title: title,
        description: description,
        ingredients: ingredients,
      });

      Alert.alert('Receta agregada', 'Receta agregada correctamente a la base de datos', [
        {
          text: 'Ok',
        },
      ]);

      navigation.navigate('RecipeList');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Título de la receta"
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Descripción de la receta"
          onChangeText={(text) => setDescription(text)}
          value={description}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Ingredientes de la receta"
          onChangeText={(text) => setIngredients(text)}
          value={ingredients}
        />
      </View>
      <View>
        <Button
          title="Guardar receta"
          onPress={saveNewRecipe}
          color="orange"
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
};

export default CreateRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: "#FCC085",
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  button: {
    borderRadius: 10,
  },
});
