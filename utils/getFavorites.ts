import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getFavorites() {
  try {
    const favoritesJSON = await AsyncStorage?.getItem("favorites");
    let favorites = favoritesJSON ? JSON.parse(favoritesJSON) : [];

    return favorites;
  } catch (error) {
    console.error("Error handling favorite:", error);
  }
}
