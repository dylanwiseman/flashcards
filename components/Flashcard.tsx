import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

interface FlashcardProps {
  kanji: string;
  kana: string;
  definition: string;
  star: boolean;
}

const Flashcard: React.FC<FlashcardProps> = ({
  kanji,
  kana,
  definition,
  star,
}) => {
  //TODO: figure out how to make this thing flip
  const [isFlipped, setIsFlipped] = useState(false);

  const frontInterpolate = new Animated.Value(0);
  const backInterpolate = new Animated.Value(180);

  const frontFlip = frontInterpolate.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backFlip = backInterpolate.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const flipCard = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
    Animated.spring(frontInterpolate, {
      toValue: isFlipped ? 180 : 0,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();

    Animated.spring(backInterpolate, {
      toValue: isFlipped ? 360 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={flipCard} activeOpacity={0.8}>
        <Animated.View
          style={[
            styles.item,
            { transform: [{ rotateY: isFlipped ? backFlip : frontFlip }] },
          ]}
        >
          <View style={styles.content}>
            {isFlipped ? (
              <View>
                <Text>{definition}</Text>
              </View>
            ) : (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text style={styles.kanji}>{kanji}</Text>
                <Text style={!kanji && styles.kanji}>{kana}</Text>
              </View>
            )}
          </View>
          <View style={styles.starContainer}>
            <Text style={{ ...styles.star, color: star ? "#FFF1C1" : "white" }}>
              ★
            </Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // alignItems: "center",
    margin: "auto",
    padding: 10,
    // justifyContent: "flex-start",
  },
  item: {
    width: "100%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    position: "absolute",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  kanji: {
    fontSize: 32,
    fontWeight: "bold",
  },
  star: {
    fontSize: 36, // Adjust the size of the star as needed
    // Color of the star
  },
  starContainer: {
    position: "absolute",
    top: 12,
    right: 12,
  },
});

export default Flashcard;
