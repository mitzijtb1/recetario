import React, { useLayoutEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed';

import { db } from '../database/firebase';
import { getDoc, doc } from "firebase/firestore";

const RecipeDetail = ({ navigation, route }) => {
  const { id } = route.params;

  const [isLoading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState(null);

  // Función para obtener una receta de la base de datos
  const getRecipeById = async () => {
    const docRef = doc(db, "recipes", id);
    const docDB = await getDoc(docRef);
    setRecipe(docDB.data());
    const { title, description, ingredients } = docDB.data();
    setLoading(false);
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() =>
            navigation.navigate('RecipeEdit', { id, title, description, ingredients })
          }
          title='Editar'
          color='orange'
        />
      ),
      title: title
    });
  };

  useLayoutEffect(() => {
    if (recipe === null) {
      getRecipeById();
    }
  });

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
        <Text>Cargando receta...</Text>
      </View>
    );
  }

  return (
    <View >
      <ListItem key={recipe.id}>
        <Avatar
          source={{
            uri: 'https://image.isu.pub/170401053150-8908b3ee6d62ed81f1aaefc1a6ee1d91/jpg/page_1.jpg'
          }}
          rounded
        />
        <ListItem.Content>
          <ListItem.Title>{recipe.title}</ListItem.Title>
          <ListItem.Subtitle>{recipe.description}</ListItem.Subtitle>
          <ListItem.Subtitle>{recipe.ingredients}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default RecipeDetail;


