import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Views/LoginScreen';
import RecipeListScreen from './Views/RecipeListScreen';
import RecipeList from './Views/RecipeList';
import CreateRecipe from './Views/CreateRecipe';
import RecipeDetail from './Views/RecipeDetail';
import RecipeEdit from './Views/RecipeEdit';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Inicio de Sesión' }}
        />
        <Stack.Screen
          name="RecipeListScreen"
          component={RecipeListScreen}
          options={{ title: 'Recetas' }}
        />
        <Stack.Screen
          name="RecipeList"
          component={RecipeList}
          options={{ title: 'Listado de recetas' }}
        />
        <Stack.Screen
          name="CreateRecipe"
          component={CreateRecipe}
          options={{ title: 'Agregar receta' }}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetail}
          options={{ title: 'Detalle de receta' }}
        />
        <Stack.Screen
          name="RecipeEdit"
          component={RecipeEdit}
          options={{ title: 'Editar receta' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;
