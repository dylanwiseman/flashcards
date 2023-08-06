import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

interface FlashcardProps {
  word: string;
  definition: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ word, definition }) => {
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
            <Text>{isFlipped ? definition : word}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    width: 200,
    height: 100,
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
});

export default Flashcard;