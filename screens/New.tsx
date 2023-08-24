import { View, Text, Pressable, SafeAreaView } from "react-native";
import { Heading } from "../components";
import React, { useState } from "react";
import getNewWords from "../utils/getNewWords";
import { WordEntry } from "../utils/types";
import Flashcard from "../components/Flashcard";
import Swiper from "react-native-swiper";

export default function New() {
  const [newWords, setNewWords] = useState<WordEntry[]>(getNewWords(3));

  const handleGetNewWords = () => {
    const numberOfWords = 3; // Change this to the desired number of new words
    const words: WordEntry[] = getNewWords(numberOfWords);
    setNewWords(words);
  };

  console.log(newWords[0]);
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
            {newWords.map((word) => (
              <View style={{ height: 200, backgroundColor: "blue" }}>
                <Flashcard
                  key={word.id}
                  word={word.kanji[0]?.text || word.kana[0]?.text}
                  definition={word.sense[0].gloss[0].text}
                />
              </View>
            ))}
          </Swiper>
        </View>
      )}
    </SafeAreaView>
  );
}
