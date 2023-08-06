import { View, Text, Pressable, SafeAreaView } from "react-native";
import React, { useState } from "react";
import getNewWords from "../utils/getNewWords";
import { WordEntry } from "../utils/types";

export default function New() {
  const [newWords, setNewWords] = useState<WordEntry[]>([]);

  const handleGetNewWords = () => {
    const numberOfWords = 10; // Change this to the desired number of new words
    const words: WordEntry[] = getNewWords(numberOfWords);
    setNewWords(words);
  };

  return (
    <SafeAreaView>
      <Text>This the new stuff</Text>
      <Pressable onPress={handleGetNewWords}>
        <Text>Get New Words</Text>
      </Pressable>

      <Text>New Words:</Text>
      {newWords.map((word) => (
        <Text key={word.id}>{word.kanji[0]?.text || word.kana[0]?.text}</Text>
      ))}
    </SafeAreaView>
  );
}
