import { createContext } from "react";

export const InvertContext = createContext({
  inverted: false,
  invertCards: () => {},
});
