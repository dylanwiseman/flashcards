import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import getNewWords from "../utils/getNewWords";
import { OutputData } from "../utils/types";
import Swiper from "react-native-swiper";
import CardContainer from "../components/CardContainer";
import NavBar from "../components/NavBar";

export default function New() {
  const [newWords, setNewWords] = useState<OutputData[]>(getNewWords(10));

  const handleGetNewWords = () => {
    setNewWords(getNewWords(10));
  };

  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          marginTop: 12,
          color: "gray",
          paddingTop: 12,
        }}
      >
        New Words:
      </Text>
      {newWords?.length > 0 && (
        <View style={{ height: "80%", marginTop: 0 }}>
          <Swiper
            loop={false}
            style={{}}
            loadMinimal
            loadMinimalSize={20}
            showsPagination={false}
          >
            {newWords?.map((word, key) => (
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
