import { View, Text, Pressable, SafeAreaView, StyleSheet } from "react-native";
import { Heading } from "../components";
import React, { useState } from "react";
import getNewWords from "../utils/getNewWords";
import { OutputData } from "../utils/types";
import Swiper from "react-native-swiper";
import util from "util";
import CardContainer from "../components/CardContainer";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";

export default function New() {
  const [newWords, setNewWords] = useState<OutputData[]>(getNewWords(10));

  const handleGetNewWords = () => {
    const numberOfWords = 10;
    const words: OutputData[] = getNewWords(numberOfWords);
    setNewWords(words);
  };

  const navigation = useNavigation();

  const handlePress = () => {
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
        <View style={{ height: "80%", marginTop: 12 }}>
          <Swiper loop={false} style={{}}>
            {newWords.map((word, key) => (
              <CardContainer word={word} key={key} />
            ))}
          </Swiper>
        </View>
      )}
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Pressable onPress={handleGetNewWords}>
          <Text>New</Text>
          <Svg width={50} height={50} viewBox="0 0 50 50">
            <Path
              d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
              c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
              c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
              fill="#D75A4A"
            />
          </Svg>
        </Pressable>
        <Pressable onPress={handlePress}>
          <Text>Favorites</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
