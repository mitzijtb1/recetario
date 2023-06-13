import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet, Alert } from 'react-native';
import { setDoc, doc } from "firebase/firestore";

import { db } from '../database/firebase';

const RecipeEdit = ({ navigation, route }) => {
  const { id, title, description, ingredients } = route.params;

  const [editTitle, setTitle] = useState(title);
  const [editDescription, setDescription] = useState(description);
  const [editIngredients, setIngredients] = useState(ingredients);

  const editRecipe = async () => {
    if (editTitle === '') {
      Alert.alert(
        'Completar título',
        'Por favor introduce el título',
        [
          {
            text: 'Ok',
            style: 'destructuve'
          },
        ],
        { cancelable: false }
      );
    } else if (editDescription === '') {
      Alert.alert(
        'Completar descripción',
        'Por favor introduce la descripción',
        [
          {
            text: 'Ok',
            style: 'destructive'
          },
        ],
        { cancelable: false }
      );
    } else if (editIngredients === '') {
      Alert.alert(
        'Completar ingredientes',
        'Por favor introduce los ingredientes',
        [
          {
            text: 'Ok',
            style: 'destructive'
          },
        ],
        { cancelable: false }
      );
    } else {
      await setDoc(
        doc(db, "recipes", id),
        {
          title: editTitle,
          description: editDescription,
          ingredients: editIngredients
        },
        {
          merge: true
        }
      );

      Alert.alert(
        'Receta actualizada',
        'Receta actualizada correctamente en la base de datos',
        [
          {
            text: 'Ok'
          },
        ],
        { cancelable: false }
      );

      navigation.navigate('RecipeList');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Título de la receta"
          onChangeText={(text) => setTitle(text)}
          value={editTitle}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Descripción de la receta"
          onChangeText={(text) => setDescription(text)}
          value={editDescription}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Ingredientes: "
          onChangeText={(text) => setIngredients(text)}
          value={editIngredients}
        />
      </View>
      <View>
        <Button
          title="Guardar cambios"
          onPress={() => editRecipe()}
          color="orange"
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  button: {
    borderRadius: 20
  }
});

export default RecipeEdit;
