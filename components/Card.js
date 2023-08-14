import { Animated, Text, View, StyleSheet, Pressable } from "react-native";
import { useRef } from "react";

export default function Card({ dispatch, card, game }: any) {
  const flipAnimation = useRef(new Animated.Value(0)).current;
  let flipRotation = 0;
  flipAnimation.addListener(({ value }) => (flipRotation = value));
  console.log(
    flipAnimation.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"],
    })
  );
  console.log(
    typeof flipAnimation.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"],
    })
  );
  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ["0deg", "180deg"],
        }),
      },
    ],
  };

  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ["180deg", "360deg"],
        }),
      },
    ],
  };
  const flipToFront = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const flipToBack = () => {
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      style={style.cardWrapper}
      onPress={() => (!!flipRotation ? flipToBack() : flipToFront())}
    >
      <View style={{ ...style.cardFront, ...flipToBackStyle }}>
        <Text>front</Text>
      </View>
      <View style={{ ...style.cardBack, ...flipToFrontStyle }}>
        <Text>back</Text>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  cardWrapper: {},
  cardFront: {
    position: "absolute",
  },
  cardBack: {
    backfaceVisibility: "hidden",
  },
});
