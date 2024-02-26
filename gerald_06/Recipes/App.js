import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from './constants/colors';
import AddRecipeScreen from './screens/AddRecipeScreen';
import RecipeScreen from './screens/RecipeScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentRecipe, setCurrentRecipe] = useState([
    {
      id: 1, 
      title: "My Recipes",
      text: "1.Pancakes\n2.Spaghetti\n3. Lamb Chops\n4. Chicken Caesar Wrap",
    },
    {
      id: 2, 
      title: "My Recipes v2",
      text: "1.Pancakes\n2.Spaghetti\n3. Lamb Chops\n4. Chicken Caesar Wrap",
    },
  ]);

  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  function recipeScreenHandler() {
    setCurrentScreen("recipe");
  }

  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText){
    setCurrentRecipe((currentRecipe) => {
      return [
        ...currentRecipe,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    recipeScreenHandler();
  }


  function deleteRecipeHandler(id) {
    setCurrentRecipe((currentRecipe) => {
      return currentRecipe.filter((item) => {
        item.id !== id;
      });
    });
  }

  let screen = <HomeScreen onNext={recipeScreenHandler} />;

  if (currentScreen === "add"){
    screen = <AddRecipeScreen onNext={homeScreenHandler}/>
  }

  if (currentScreen === "recipe"){
    screen = <RecipeScreen onHome={homeScreenHandler} onAdd={addRecipeScreenHandler} onDelete={deleteRecipeHandler} currentRecipe={currentRecipe} />
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
