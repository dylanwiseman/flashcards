import { WordEntry, MyJsonObject } from "./types";
import jsonDicData from "../jmdict-eng-3.5.0.json";

export default function getNewWords(numberOfWords: number): WordEntry[] {
  try {
    const jsonData: MyJsonObject = jsonDicData as MyJsonObject;

    if (!jsonData.words || jsonData.words.length === 0) {
      throw new Error('Invalid JSON file or empty "words" array.');
    }

    const { words } = jsonData;
    const newWords: WordEntry[] = [];

    while (newWords.length < numberOfWords && words.length > 0) {
      const randomIndex = Math.floor(Math.random() * words.length);
      const wordObj = words.splice(randomIndex, 1)[0];
      newWords.push(wordObj);
    }

    return newWords;
  } catch (error) {
    console.error("Error reading or processing JSON file:", error);
    return [];
  }
}
