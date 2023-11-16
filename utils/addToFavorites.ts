import AsyncStorage from "@react-native-async-storage/async-storage";
import { OutputData } from "./types";

export default async function addToFavorites(word: OutputData) {
  try {
    const favoritesJSON = await AsyncStorage?.getItem("favorites");
    let favorites = favoritesJSON ? JSON.parse(favoritesJSON) : [];

    const wordIndex = favorites?.findIndex(
      (item: OutputData) => item?.id === word?.id
    );

    if (wordIndex === -1) {
      favorites?.push(word);
    } else {
      favorites?.splice(wordIndex, 1);
    }

    await AsyncStorage?.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.error("Error handling favorite:", error);
  }
}
