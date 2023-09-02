import { View, Text, Pressable, SafeAreaView, StyleSheet } from "react-native";
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

  const renderPagination = (index: number, total: number, context: any) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: "grey" }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    );
  };

  //   console.log(
  //     util.inspect(favoriteWords[0], false, null, true /* enable colors */)
  //   );

  return (
    <SafeAreaView>
      <Text style={{ textAlign: "center", marginTop: 12 }}>
        Favorite Words:
      </Text>
      <View style={{ height: "80%", marginTop: 12 }}>
        {favoriteWords[0] ? (
          <Swiper loop={false} style={{}} renderPagination={renderPagination}>
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
      <NavBar screen="favorites" handleNew={handlePress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paginationStyle: {
    position: "absolute",
    top: "80%",
    left: "48%",
  },
  paginationText: {
    color: "grey",
  },
});
