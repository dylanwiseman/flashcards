import { View, Text, Pressable, SafeAreaView, StyleSheet } from "react-native";
import { Heading } from "../components";
import React, { useState } from "react";
import getNewWords from "../utils/getNewWords";
import { OutputData } from "../utils/types";
// import Flashcard from "../components/Flashcard";
import Swiper from "react-native-swiper";
import util from "util";
import CardContainer from "../components/CardContainer";
import { useNavigation } from "@react-navigation/native";

export default function New() {
  const [newWords, setNewWords] = useState<OutputData[]>(getNewWords(10));

  const handleGetNewWords = () => {
    const numberOfWords = 10; // Change this to the desired number of new words
    const words: OutputData[] = getNewWords(numberOfWords);
    setNewWords(words);
  };

  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the 'Favorites' screen when pressed
    // @ts-ignore
    navigation.navigate("Favorites");
  };

  console.log(util.inspect(newWords[0], false, null, true /* enable colors */));

  return (
    <SafeAreaView>
      <Heading style={{ textAlign: "center", marginTop: 12 }}>
        New Words:
      </Heading>
      {newWords[0] && (
        <View style={{ height: "90%", marginTop: 12 }}>
          <Swiper loop={false} style={{}}>
            {newWords.map((word, key) => (
              <CardContainer word={word} key={key} />
            ))}
          </Swiper>
        </View>
      )}
      <Pressable onPress={handlePress}>
        <Text>Go to Favorites</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#FFD700",
  //   margin: 24,
  //   width: 75, // Adjust the size as needed
  //   height: 75, // Adjust the size as needed
  //   borderRadius: 5,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   position: "relative",
  // },
  // star: {
  //   fontSize: 36, // Adjust the size of the star as needed
  //   color: "#FFF1C1", // Color of the star
  // },
  // star2: {
  //   position: "absolute",
  //   fontSize: 42, // Adjust the size of the star as needed
  //   color: "#D4AF37", // Color of the star
  // },
});
