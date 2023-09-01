import React, { useState, useRef } from "react";
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
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  // const [heart, setHeart] = useState<boolean>(fav);

  const flipAnim = useRef(new Animated.Value(0)).current;
  //@ts-ignore
  flipAnim.addListener(({ value }) => (this._value = value));
  //@ts-ignore

  const frontFlip = () => {
    Animated.spring(flipAnim, {
      toValue: 1,
      friction: 5,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };

  const backFlip = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.spring(flipAnim, {
      toValue: 0,
      friction: 5,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };

  const flipCard = () => {
    //@ts-ignore
    flipAnim._value > 0.5 ? backFlip() : frontFlip();
    setIsFlipped(!isFlipped);
  };

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={flipCard}>
        <Animated.View
          id="back"
          style={[
            styles.item,
            {
              transform: [
                { perspective: 1000 },
                {
                  rotateY: flipAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["180deg", "360deg"],
                  }),
                },
              ],
              backfaceVisibility: isFlipped ? "visible" : "hidden",
            },
          ]}
        >
          <View style={styles.content}>
            <View>
              <Text style={styles.def}>{definition}</Text>
            </View>
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

        <Animated.View
          id="front"
          style={[
            styles.item,
            {
              transform: [
                { perspective: 1000 },
                {
                  rotateY: flipAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "180deg"],
                  }),
                },
              ],
              backfaceVisibility: "hidden",
            },
          ]}
        >
          <View style={styles.content}>
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
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: "auto",
    padding: 10,
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
