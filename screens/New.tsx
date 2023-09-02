import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import getNewWords from "../utils/getNewWords";
import { OutputData } from "../utils/types";
import Swiper from "react-native-swiper";
import CardContainer from "../components/CardContainer";
import NavBar from "../components/NavBar";

export default function New() {
  const [newWords, setNewWords] = useState<OutputData[]>(getNewWords(200));

  const handleGetNewWords = () => {
    // const numberOfWords = 10;
    // const words: OutputData[] = getNewWords(numberOfWords);
    // setNewWords(words);
  };

  // console.log(util.inspect(newWords[0], false, null, true /* enable colors */));

  return (
    <SafeAreaView>
      <Text style={{ textAlign: "center", marginTop: 12 }}>New Words:</Text>
      {newWords[0] && (
        <View style={{ height: "80%", marginTop: 12 }}>
          <Swiper
            loop={false}
            style={{}}
            loadMinimal
            loadMinimalSize={10}
            showsPagination={false}
          >
            {newWords.map((word, key) => (
              <CardContainer word={word} key={key} />
            ))}
          </Swiper>
        </View>
      )}
      <NavBar handleNew={handleGetNewWords} screen="new" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
