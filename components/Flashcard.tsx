import React, { useState } from "react";
import Svg, { Path } from "react-native-svg";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";

interface FlashcardProps {
  kanji: string;
  kana: string;
  definition: string;
  fav: boolean;
  handleFav: any;
}

const Flashcard: React.FC<FlashcardProps> = ({
  kanji,
  kana,
  definition,
  fav,
  handleFav,
}) => {
  //TODO: figure out how to make this thing flip
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  // const [heart, setHeart] = useState<boolean>(fav);

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
                <Text style={styles.def}>{definition}</Text>
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
                <Text style={!kanji ? styles.kanji : styles.kana}>{kana}</Text>
              </View>
            )}
          </View>
          <Pressable
            onPress={async () => {
              await handleFav();
            }}
            style={styles.heartContainer}
          >
            <Svg width={35} height={35} viewBox="0 0 35 35">
              <Path
                d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
              c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
              c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
                fill={fav ? "#D75A4A" : "lightgray"}
                scale=".7"
              />
            </Svg>
          </Pressable>
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
    height: 500,
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    position: "absolute",
    // shadowColor: "black",
    // shadowOffset: { width: 2, height: 2 },
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  kanji: {
    fontSize: 64,
    fontWeight: "bold",
  },
  kana: {
    fontSize: 32,
  },
  def: {
    fontSize: 32,
  },
  heart: {
    fontSize: 36,
  },
  heartContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

export default Flashcard;
