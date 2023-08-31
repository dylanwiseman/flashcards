// import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import New from "./screens/New";
import Archive from "./screens/Archive";
import Favorites from "./screens/Favorites";

export default function App() {
  const Stack = createStackNavigator();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animationEnabled: false }}
        initialRouteName="New"
      >
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Archive" component={Archive} />
      </Stack.Navigator>
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
