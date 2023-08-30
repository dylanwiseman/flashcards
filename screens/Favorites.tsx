import { View, Text, Pressable, SafeAreaView, StyleSheet } from "react-native";
import { Heading } from "../components";
import React, { useState, useEffect } from "react";
// import getNewWords from "../utils/getNewWords";
import getFavorites from "../utils/getFavorites";
import { OutputData } from "../utils/types";
import Swiper from "react-native-swiper";
import util from "util";
import CardContainer from "../components/CardContainer";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/NavBar";

export default function Favorites() {
  const [favoriteWords, setFavoriteWords] = useState<OutputData[]>([]);
  //   console.log(favoriteWords);

  useEffect(() => {
    const getFaves = async () => {
      setFavoriteWords(await getFavorites());
    };
    getFaves();
  }, []);

  const navigation = useNavigation();

  const handlePress = () => {
    // @ts-ignore
    navigation.navigate("New");
  };

  //   console.log(
  //     util.inspect(favoriteWords[0], false, null, true /* enable colors */)
  //   );

  return (
    <SafeAreaView>
      <Heading style={{ textAlign: "center", marginTop: 12 }}>
        Favorite Words:
      </Heading>
      {/* {favoriteWords[0] && ( */}
      <View style={{ height: "80%", marginTop: 12 }}>
        {favoriteWords[0] ? (
          <Swiper loop={false} style={{}}>
            {favoriteWords.map((word, key) => (
              <CardContainer word={word} key={key} />
            ))}
          </Swiper>
        ) : (
          <CardContainer
            word={{
              id: "1322480",
              kanji: "斜陽",
              kana: "しゃう",
              partOfSpeech: "n",
              definition: "setting sun",
              star: true,
            }}
          />
        )}
      </View>
      {/* )} */}
      <NavBar screen="favorites" handleNew={handlePress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#FFD700",
  //   margin: 24,
  //   width: 75, // Adjust the size as needed
  //   height: 75, // Adjust the size as needed
  //   borderRadius: 5,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   position: "relative",
  // },
  // star: {
  //   fontSize: 36, // Adjust the size of the star as needed
  //   color: "#FFF1C1", // Color of the star
  // },
  // star2: {
  //   position: "absolute",
  //   fontSize: 42, // Adjust the size of the star as needed
  //   color: "#D4AF37", // Color of the star
  // },
});
