import RNFS from "react-native-fs";
import jsonData from "../jmdict-eng-3.5.0.json";

// const jsonData = {
//   // Your JSON data goes here
// };

// Function to filter common words based on "common" field in "kanji" or "kana"
function filterCommonWords(data) {
  const { words } = data;
  return words.filter((word) => {
    const isKanjiCommon = word.kanji[0] && word.kanji[0].common;
    const isKanaCommon = word.kana[0] && word.kana[0].common;
    return isKanjiCommon || isKanaCommon;
  });
}

// Function to create the output JavaScript object and write to a new file
async function writeCommonWordsToFile(filteredWords, outputFilePath) {
  const commonWordsObject = {
    commonWords: filteredWords,
  };

  try {
    const content = `export default ${JSON.stringify(
      commonWordsObject,
      null,
      2
    )};\n`;
    await RNFS.writeFile(outputFilePath, content, "utf8");
    console.log(`File ${outputFilePath} created successfully.`);
  } catch (error) {
    console.error("Error writing common words to file:", error);
  }
}

// Main function to filter and write common words to a new file
async function extractCommonWords() {
  try {
    const commonWords = filterCommonWords(jsonData);
    const outputFilePath = "./path/to/common-words.js"; // Replace with your desired output file path
    await writeCommonWordsToFile(commonWords, outputFilePath);
  } catch (error) {
    console.error("Error processing JSON data:", error);
  }
}

// Call the main function
extractCommonWords();
