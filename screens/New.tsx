import { View, Text, Pressable, SafeAreaView } from "react-native";
import { Heading } from "../components";
import React, { useState } from "react";
import getNewWords from "../utils/getNewWords";
import { WordEntry } from "../utils/types";
import Flashcard from "../components/Flashcard";

export default function New() {
  const [newWords, setNewWords] = useState<WordEntry[]>([]);

  const handleGetNewWords = () => {
    const numberOfWords = 3; // Change this to the desired number of new words
    const words: WordEntry[] = getNewWords(numberOfWords);
    setNewWords(words);
  };

  return (
    <SafeAreaView>
      <Text>This the new stuff</Text>
      <Pressable onPress={handleGetNewWords}>
        <Text>Get New Words</Text>
      </Pressable>

      <Heading>New Words:</Heading>
      {newWords.map((word) => (
        <Text key={word.id}>{word.kanji[0]?.text || word.kana[0]?.text}</Text>
      ))}
      {newWords.map((word) => (
        <Flashcard
          key={word.id}
          word={word.kanji[0]?.text || word.kana[0]?.text}
          definition={word.sense[0].gloss[0].text}
        />
      ))}
    </SafeAreaView>
  );
}
