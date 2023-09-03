import { View, Pressable } from "react-native";
import React, { useContext } from "react";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { InvertContext } from "../utils/Context";

export default function NavBar({ handleNew, screen }: any) {
  const navigation = useNavigation();
  const handleFav = () => {
    // @ts-ignore
    navigation.navigate("Favorites");
  };
  const inversion = useContext(InvertContext);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        minWidth: "100%",
        justifyContent: "space-evenly",
        marginTop: 12,
        paddingTop: 24,
      }}
    >
      <Pressable onPress={inversion.invertCards}>
        <Svg width={50} height={50} viewBox="0 0 110 122">
          <Path
            d="M41.759,15.103l-0.003,0.174h35.077c0.089,0,0.176,0.005,0.262,0.016c3.325,0.267,6.487,0.843,9.461,1.78l0.008,0.003 c3.021,0.95,5.853,2.286,8.469,4.062c1.827,1.239,3.404,2.59,4.768,4.033c1.363,1.441,2.527,2.988,3.532,4.618 c1.557,2.527,2.806,5.523,3.803,8.643c1.228,3.84,2.076,7.868,2.65,11.415c0.229,1.417,0.398,2.801,0.449,4.005 c0.059,1.382-0.049,2.591-0.399,3.472c-0.206,0.519-0.473,0.962-0.801,1.326c-0.378,0.421-0.831,0.738-1.357,0.949 c-3.667,1.468-6.662-2.08-8.46-4.211l-0.004,0.003l-0.331-0.393c-3.032-3.536-6.757-6.041-11.022-7.732 c-4.333-1.718-9.252-2.611-14.598-2.903l-31.771,0.002l0.015,0.271l0,9.127c0,0.086-0.005,0.17-0.015,0.253 c-0.089,2.142-0.799,3.66-2.136,4.544c-1.34,0.887-3.091,0.97-5.257,0.24c-0.235-0.079-0.448-0.196-0.632-0.341 c-10.452-8.2-20.905-16.397-31.353-24.602l-0.147-0.127C0.23,32.152-0.25,30.51,0.114,28.867c0.322-1.452,1.333-2.69,2.692-3.761 l28.87-22.727c1.25-0.984,2.562-1.749,3.797-2.119c1.107-0.332,2.187-0.362,3.181-0.002c1.084,0.393,1.95,1.188,2.502,2.475 c0.393,0.917,0.615,2.098,0.615,3.584v8.556C41.772,14.951,41.768,15.028,41.759,15.103L41.759,15.103z M68.619,107.776 l0.003-0.175H33.545c-0.088,0-0.176-0.005-0.261-0.016c-3.325-0.267-6.488-0.843-9.461-1.78l-0.007-0.003 c-3.021-0.949-5.853-2.285-8.469-4.061c-1.839-1.248-3.423-2.607-4.791-4.059c-1.376-1.459-2.546-3.018-3.551-4.656 c-1.622-2.646-2.98-6.021-4.055-9.54c-1.276-4.181-2.157-8.56-2.607-12.145c-0.133-1.063-0.214-2.102-0.213-3.053 c0.001-1.071,0.125-2.011,0.414-2.735c0.202-0.506,0.467-0.945,0.798-1.314c0.385-0.43,0.838-0.751,1.36-0.961 c3.667-1.468,6.663,2.08,8.46,4.212l0.004-0.003l0.332,0.393c3.032,3.536,6.756,6.041,11.022,7.731 c4.333,1.718,9.252,2.611,14.598,2.903l31.77-0.003l-0.015-0.271l-0.001-9.127c0-0.086,0.006-0.17,0.016-0.253 c0.089-2.143,0.799-3.661,2.136-4.545c1.341-0.887,3.091-0.97,5.257-0.239c0.235,0.078,0.447,0.195,0.632,0.341l31.354,24.602 l0.147,0.127c1.736,1.58,2.217,3.224,1.853,4.865c-0.322,1.452-1.333,2.69-2.692,3.761L78.702,120.5 c-1.25,0.984-2.562,1.748-3.797,2.118c-1.107,0.332-2.187,0.362-3.182,0.003c-1.084-0.393-1.95-1.188-2.502-2.476 c-0.393-0.917-0.615-2.098-0.615-3.584v-8.556C68.606,107.928,68.611,107.852,68.619,107.776L68.619,107.776z M72.229,105.025 c0.465,0.773,0.603,1.688,0.592,2.831l0.006,0.149v8.556c0,0.904,0.097,1.535,0.269,1.936c0.051,0.118,0.057,0.165,0.063,0.167 c0.082,0.03,0.274-0.004,0.544-0.084c0.699-0.209,1.534-0.716,2.396-1.394l28.869-22.728c0.652-0.514,1.111-0.986,1.193-1.354 c0.034-0.157-0.121-0.416-0.555-0.815L74.6,67.956c-0.664-0.199-1.081-0.242-1.253-0.128c-0.146,0.097-0.233,0.486-0.259,1.165 l0.004,9.172c0.075,1.035-0.088,1.955-0.538,2.734c-0.531,0.924-1.354,1.532-2.516,1.771c-0.164,0.041-0.335,0.063-0.512,0.063 H37.117v-0.005l-0.107-0.003c-5.816-0.309-11.215-1.293-16.04-3.205c-4.89-1.938-9.166-4.817-12.66-8.889l-0.36-0.423l0.004-0.004 l-0.004-0.005c-0.996-1.181-2.616-3.102-3.517-3.049c-0.069,0.218-0.1,0.616-0.101,1.14c0,0.683,0.074,1.562,0.197,2.542 c0.428,3.417,1.255,7.547,2.442,11.435c0.975,3.191,2.191,6.228,3.626,8.568c0.854,1.394,1.851,2.721,3.023,3.964 c1.179,1.249,2.528,2.41,4.083,3.465c2.238,1.519,4.708,2.677,7.38,3.52c2.655,0.839,5.505,1.355,8.521,1.599h35.392v0.009 C70.569,103.392,71.57,103.931,72.229,105.025L72.229,105.025z M38.149,17.854c-0.466-0.772-0.604-1.688-0.592-2.831l-0.005-0.149 V6.317c0-0.904-0.098-1.535-0.269-1.936c-0.051-0.118-0.057-0.165-0.063-0.167c-0.083-0.03-0.274,0.004-0.544,0.084 c-0.699,0.21-1.535,0.716-2.396,1.394L5.411,28.419c-0.652,0.514-1.111,0.987-1.192,1.354c-0.035,0.158,0.121,0.416,0.555,0.815 c10.332,8.115,20.671,16.223,31.006,24.334c0.664,0.2,1.081,0.242,1.251,0.128c0.147-0.097,0.234-0.487,0.259-1.165l-0.003-9.172 c-0.075-1.036,0.088-1.956,0.538-2.735c0.532-0.924,1.355-1.532,2.515-1.771c0.164-0.041,0.335-0.063,0.513-0.063h32.409v0.005 l0.107,0.003c5.815,0.308,11.215,1.293,16.039,3.206c4.89,1.938,9.166,4.817,12.66,8.889l0.359,0.423l-0.004,0.003l0.004,0.004 c0.996,1.181,2.616,3.103,3.517,3.049c0.1-0.305,0.12-0.916,0.087-1.712c-0.043-1.017-0.193-2.237-0.4-3.511 c-0.547-3.382-1.351-7.204-2.502-10.805c-0.898-2.81-2.01-5.487-3.375-7.703c-0.851-1.381-1.846-2.7-3.02-3.942 c-1.173-1.24-2.516-2.393-4.06-3.44c-2.238-1.519-4.708-2.677-7.38-3.52c-2.655-0.839-5.505-1.355-8.521-1.599H41.382v-0.008 C39.809,19.487,38.809,18.949,38.149,17.854L38.149,17.854z"
            fill={inversion.inverted ? "green" : "#424248"}
          />
        </Svg>
      </Pressable>
      <Pressable onPress={handleNew}>
        <Svg width={50} height={50} viewBox="0 0 50 50">
          <Path
            d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
              c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
              c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
              c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
              c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
              C22.602,0.567,25.338,0.567,26.285,2.486z"
            fill={screen === "new" ? "#ED8A19" : "#424248"}
          />
        </Svg>
      </Pressable>
      <Pressable onPress={handleFav}>
        <Svg width={50} height={50} viewBox="0 0 50 50">
          <Path
            d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
              c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
              c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
            fill={screen === "favorites" ? "#D75A4A" : "#424248"}
          />
        </Svg>
      </Pressable>
    </View>
  );
}
