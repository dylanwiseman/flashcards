import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import New from "./screens/New";
import Favorites from "./screens/Favorites";
import { InvertContext } from "./utils/Context";

export type RootStackParamList = {
  New: undefined;
  Favorites: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();
  const [invert, setInvert] = useState(false);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme?.colors,
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
