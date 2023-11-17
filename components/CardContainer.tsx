import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Flashcard from "./Flashcard";
import { OutputData } from "../utils/types";
import addToFavorites from "../utils/addToFavorites";

export default function CardContainer({ word }: any) {
  const [fav, setFav] = useState<boolean>(word?.star);
  const handleFav = async (word: OutputData) => {
    try {
      word.star = !word?.star;
      await addToFavorites(word);
      setFav(word.star);
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <View>
      <View style={{ height: 500, paddingTop: 48 }}>
        <Flashcard
          key={word?.id}
          kanji={word?.kanji || ""}
          kana={word?.kana || ""}
          definition={word?.definition}
          fav={fav}
          handleFav={() => handleFav(word)}
          partOfSpeech={word?.partOfSpeech}
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

const styles = StyleSheet.create({});
