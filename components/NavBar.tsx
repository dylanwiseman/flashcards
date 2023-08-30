import { View, Pressable } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

export default function NavBar({ handleNew, screen }: any) {
  const navigation = useNavigation();
  const handleFav = () => {
    // @ts-ignore
    navigation.navigate("Favorites");
  };
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        minWidth: "100%",
        justifyContent: "space-evenly",
        marginTop: 12,
        borderTopColor: "lightgray",
        borderTopWidth: 1,
        paddingTop: 24,
      }}
    >
      <Pressable onPress={handleNew}>
        <Svg width={50} height={50} viewBox="0 0 50 50">
          <Path
            d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
              c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
              c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
              c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
              c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
              C22.602,0.567,25.338,0.567,26.285,2.486z"
            fill={screen === "new" ? "#ED8A19" : "lightgray"}
          />
        </Svg>
      </Pressable>
      <Pressable onPress={handleFav}>
        <Svg width={50} height={50} viewBox="0 0 50 50">
          <Path
            d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
              c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
              c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
            fill={screen === "favorites" ? "#D75A4A" : "lightgray"}
          />
        </Svg>
      </Pressable>
    </View>
  );
}
