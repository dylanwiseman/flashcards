// import { StatusBar } from "expo-status-bar";
import { useState, createContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import New from "./screens/New";
import Archive from "./screens/Archive";
import Favorites from "./screens/Favorites";
import { InvertContext } from "./utils/Context";

// TO DO:
// green reverse button needs to reverse ALL cards in the stack
// heart button not working on english side (card flips when pressed)
// add word type (noun, verb, etc)

export default function App() {
  const Stack = createStackNavigator();
  const [invert, setInvert] = useState(false);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#1B1B1E",
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <InvertContext.Provider
        value={{
          inverted: invert,
          invertCards: () => {
            setInvert(!invert);
          },
        }}
      >
        <Stack.Navigator
          screenOptions={{ headerShown: false, animationEnabled: false }}
          initialRouteName="New"
        >
          <Stack.Screen name="New" component={New} />
          <Stack.Screen name="Favorites" component={Favorites} />
          <Stack.Screen name="Archive" component={Archive} />
        </Stack.Navigator>
      </InvertContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
