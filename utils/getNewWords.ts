import { WordEntry, MyJsonObject, OutputData, InputData } from "./types";
import jsonDicData from "../jmdict-eng-common-3.5.0.json";
import getPartOfSpeech from "./partOfSpeech";

export default function getNewWords(numberOfWords: number): OutputData[] {
  try {
    const jsonData: MyJsonObject = jsonDicData as MyJsonObject;

    if (!jsonData?.words || jsonData?.words?.length === 0) {
      throw new Error('Invalid JSON file or empty "words" array.');
    }

    const { words } = jsonData || [];
    const newWords: WordEntry[] = [];

    while (newWords?.length < numberOfWords && words?.length > 0) {
      const randomIndex = Math?.floor(Math?.random() * words?.length);
      const wordObj = words?.splice(randomIndex, 1)[0];
      newWords?.push(wordObj);
    }

    function transformData(input: InputData): OutputData {
      const kanjiText = input?.kanji[0]?.text || "";
      const kanaText = input?.kana[0]?.text || "";
      const partOfSpeech =
        getPartOfSpeech(input?.sense[0]?.partOfSpeech[0]) || "";
      const definition = input?.sense[0]?.gloss
        ?.map((g) => g?.text)
        ?.join(", ");

      const output: OutputData = {
        id: input?.id,
        kanji: kanjiText,
        kana: kanaText,
        partOfSpeech: partOfSpeech,
        definition: definition,
        star: false,
      };

      return output;
    }

    let outputWords = newWords?.map((word) => {
      return transformData(word);
    });

    return outputWords;
  } catch (error) {
    console.warn("Error reading or processing JSON file:", error);
    return [];
  }
}
