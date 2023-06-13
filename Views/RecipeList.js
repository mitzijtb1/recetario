import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { db } from '../database/firebase';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';

const RecipeList = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const dataColl = collection(db, 'recipes');
    const docsDB = await getDocs(dataColl);

    // Arreglo local para guardar las recetas que se cargaron en la base de datos
    const readRecipes = [];
    docsDB.forEach((doc) => {
      const { title, description, ingredients } = doc.data();
      readRecipes.push({
        id: doc.id,
        title,
        description,
        ingredients,
      });
    }); // fin de forEach

    // Cambiamos el estado del arreglo de recetas global con el listado de recetas cargado de la base de datos
    setRecipes(readRecipes);
    // Indicamos que se terminó la carga de recetas
    setLoading(false);
  }; // fin de getRecipes

  useEffect(() => {
    if (recipes.length > 0) return;
    setLoading(true);
    getRecipes();
  }, [recipes]);

  // Función para eliminar una receta
  async function onDelete(id, title) {
    Alert.alert(
      'Eliminar receta',
      '¿Realmente deseas eliminar la receta ' + title + '?',
      [
        {
          text: 'Ok',
          onPress: async () => {
            await deleteDoc(doc(db, 'recipes', id));
            setRecipes([]);
          },
        },
        {
          text: 'Cancelar',
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View>
      {loading ? (
        <Text>Cargando recetas...</Text>
      ) : (
        <ScrollView>
          <Button
            title="Crear receta"
            onPress={() => {
              navigation.navigate('CreateRecipe');
            }}
            buttonStyle={{ backgroundColor: 'orange', borderRadius: 10 }}
          />
          {recipes.map((recipe) => {
            return (
              <ListItem
                key={recipe.id}
                bottomDivider
                onPress={() =>
                  navigation.navigate('RecipeDetail', {
                    id: recipe.id,
                  })
                }
              >
                <Avatar
                  source={{
                    uri:
                      'https://image.isu.pub/170401053150-8908b3ee6d62ed81f1aaefc1a6ee1d91/jpg/page_1.jpg',
                  }}
                  rounded
                />
                <ListItem.Content>
                  <ListItem.Title>{recipe.title}</ListItem.Title>
                  <ListItem.Subtitle>{recipe.description}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content>
                  <Button
                    type="clear"
                    onPress={() => {
                      onDelete(recipe.id, recipe.title);
                    }}
                  >
                    <Ionicons name="trash-outline" size={25} color="red" />
                  </Button>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default RecipeList;
