import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getFavorites() {
  try {
    // Retrieve existing 'favorites' array from local storage
    const favoritesJSON = await AsyncStorage.getItem("favorites");
    let favorites = favoritesJSON ? JSON.parse(favoritesJSON) : [];

    return favorites;
  } catch (error) {
    console.error("Error handling favorite:", error);
  }
}
