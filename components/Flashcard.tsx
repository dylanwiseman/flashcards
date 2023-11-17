import React, { useState, useRef, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Pressable } from "react-native";
import HeartSVG from "./HeartSVG";
import { InvertContext } from "../utils/Context";

interface FlashcardProps {
  kanji: string;
  kana: string;
  definition: string;
  fav: boolean;
  handleFav: any;
  partOfSpeech: string;
}

const Flashcard: React.FC<FlashcardProps> = ({
  kanji,
  kana,
  definition,
  fav,
  handleFav,
  partOfSpeech,
}) => {
  const inversion = useContext(InvertContext);
  const [isFlipped, setIsFlipped] = useState<boolean>(inversion?.inverted);

  const flipAnim = useRef(new Animated.Value(0)).current;
  flipAnim.addListener(({ value }) => {});

  const frontFlip = () => {
    Animated?.spring(flipAnim, {
      toValue: 1,
      friction: 5,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };

  const backFlip = () => {
    Animated?.spring(flipAnim, {
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

  const didMount = useRef(false);

  useEffect(() => {
    if (didMount?.current) {
      //@ts-ignore
      flipAnim._value > 0.5 ? backFlip() : frontFlip();
      setIsFlipped(inversion?.inverted);
    } else didMount.current = true;
  }, [inversion?.inverted]);

  return (
    <View style={styles?.wrapper}>
      <Pressable onPress={flipCard}>
        <Animated.View
          id="back"
          style={[
            styles?.item,
            {
              transform: [
                { perspective: 1000 },
                {
                  rotateY: flipAnim?.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["180deg", "360deg"],
                  }),
                },
              ],
              backfaceVisibility: isFlipped ? "visible" : "hidden",
            },
          ]}
        >
          <View style={styles?.content}>
            <View>
              <Text style={styles?.def}>{definition}</Text>
              <Text style={styles?.pos}>{partOfSpeech}</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          id="front"
          style={[
            styles?.item,
            {
              transform: [
                { perspective: 1000 },
                {
                  rotateY: flipAnim?.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "180deg"],
                  }),
                },
              ],
              backfaceVisibility: "hidden",
            },
          ]}
        >
          <View style={styles?.content}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text style={styles?.kanji}>{kanji}</Text>
              <Text style={!kanji ? styles?.kanji : styles?.kana}>{kana}</Text>
            </View>
          </View>
        </Animated.View>
      </Pressable>
      <Pressable
        hitSlop={15}
        onPress={async () => {
          try {
            await handleFav();
          } catch (error) {
            console.log(error);
          }
        }}
        style={{ ...styles?.heartContainer, bottom: 0, right: 30 }}
      >
        <HeartSVG width={35} height={35} scale={0.7} fill="#D75A4A" fav={fav} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet?.create({
  wrapper: {
    margin: "auto",
    padding: 10,
    height: 560,
    position: "relative",
  },
  item: {
    width: "100%",
    height: 500,
    backgroundColor: "#F8F4E3",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
  },
  pos: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    color: "#424248",
    marginTop: 12,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
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
