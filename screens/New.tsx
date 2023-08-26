import { View, Text, Pressable, SafeAreaView } from "react-native";
import { Heading } from "../components";
import React, { useState } from "react";
import getNewWords from "../utils/getNewWords";
import { OutputData } from "../utils/types";
import Flashcard from "../components/Flashcard";
import Swiper from "react-native-swiper";
import util from "util";

export default function New() {
  const [newWords, setNewWords] = useState<OutputData[]>(getNewWords(3));

  const handleGetNewWords = () => {
    const numberOfWords = 3; // Change this to the desired number of new words
    const words: OutputData[] = getNewWords(numberOfWords);
    setNewWords(words);
  };

  console.log(util.inspect(newWords[0], false, null, true /* enable colors */));
  console.log(newWords[1]);
  console.log(newWords[2]);

  return (
    <SafeAreaView>
      <Text>This the new stuff</Text>
      <Pressable onPress={handleGetNewWords}>
        <Text>Get New Words</Text>
      </Pressable>

      <Heading>New Words:</Heading>
      {newWords[0] && (
        <View style={{ height: 500 }}>
          <Swiper loop={false}>
            {newWords.map((word, key) => (
              <View style={{ height: 200, backgroundColor: "blue" }} key={key}>
                <Flashcard
                  key={word.id}
                  kanji={word.kanji || ""}
                  kana={word.kana || ""}
                  definition={word.definition}
                />
              </View>
            ))}
          </Swiper>
        </View>
      )}
    </SafeAreaView>
  );
}
