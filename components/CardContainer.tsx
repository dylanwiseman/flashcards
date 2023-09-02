import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Flashcard from "./Flashcard";
import { OutputData } from "../utils/types";
import addToFavorites from "../utils/addToFavorites";

export default function CardContainer({ word }: any) {
  const [fav, setFav] = useState<boolean>(word.star);
  const handleFav = async (word: OutputData) => {
    word.star = !word.star;
    await addToFavorites(word);
    setFav(word.star);
  };
  return (
    <View>
      <View style={{ height: 500 }}>
        <Flashcard
          key={word.id}
          kanji={word.kanji || ""}
          kana={word.kana || ""}
          definition={word.definition}
          fav={fav}
          handleFav={() => handleFav(word)}
        />
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFD700",
    margin: 24,
    width: 75,
    height: 75,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  star: {
    fontSize: 36,
    color: "#FFF1C1",
  },
  star2: {
    position: "absolute",
    fontSize: 42,
    color: "#D4AF37",
  },
});
