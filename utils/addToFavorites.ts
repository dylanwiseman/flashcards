import AsyncStorage from "@react-native-async-storage/async-storage";
import { OutputData } from "./types";

export default async function addToFavorites(word: OutputData) {
  try {
    // Retrieve existing 'favorites' array from local storage
    const favoritesJSON = await AsyncStorage.getItem("favorites");
    let favorites = favoritesJSON ? JSON.parse(favoritesJSON) : [];

    // Check if the word exists in the favorites array using word.id
    const wordIndex = favorites.findIndex(
      (item: OutputData) => item.id === word.id
    );

    if (wordIndex === -1) {
      // Word doesn't exist in favorites, add it
      favorites.push(word);
    } else {
      // Word exists in favorites, remove it
      favorites.splice(wordIndex, 1);
    }

    // Update 'favorites' array in local storage
    await AsyncStorage.setItem("favorites", JSON.stringify(favorites));

    // Update the state if necessary
    // setStar(!star);
  } catch (error) {
    console.error("Error handling favorite:", error);
  }
}
