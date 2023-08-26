export interface Kanji {
  common: boolean;
  text: string;
  tags: string[];
}

export interface Kana {
  common: boolean;
  text: string;
  tags: string[];
  appliesToKanji: string[];
}

export interface Gloss {
  lang: string;
  gender: null;
  type: null;
  text: string;
}

export interface Sense {
  partOfSpeech: string[];
  appliesToKanji: string[];
  appliesToKana: string[];
  related: string[];
  antonym: string[];
  field: string[];
  dialect: string[];
  misc: string[];
  info: string[];
  languageSource: string[];
  gloss: Gloss[];
}

export interface WordEntry {
  id: string;
  kanji: Kanji[];
  kana: Kana[];
  sense: Sense[];
}

export interface MyJsonObject {
  version: string;
  languages: string[];
  commonOnly: boolean;
  dictDate: string;
  dictRevisions: string[];
  tags: { [key: string]: string };
  words: WordEntry[];
}

export interface InputData {
  id: string;
  kanji: { common: boolean; text: string; tags: any[] }[];
  kana: {
    common: boolean;
    text: string;
    tags: any[];
    appliesToKanji: string[];
  }[];
  sense: {
    partOfSpeech: string[];
    appliesToKanji: string[];
    appliesToKana: string[];
    related: string[];
    antonym: string[];
    field: string[];
    dialect: string[];
    misc: string[];
    info: string[];
    languageSource: string[];
    gloss: { lang: string; gender: null; type: null; text: string }[];
  }[];
}

export interface OutputData {
  id: string;
  kanji: string;
  kana: string;
  partOfSpeech: string;
  definition: string;
  star: boolean;
}

/* HERE'S AN EXAMPLE:
  
  const exampleWordEntry: WordEntry = {
    id: "1000230",
    kanji: [{ common: false, text: "明かん", tags: [] }],
    kana: [
      { common: false, text: "あかん", tags: [], appliesToKanji: ["*"] },
      { common: false, text: "アカン", tags: [], appliesToKanji: [] },
    ],
    sense: [
      {
        partOfSpeech: ["exp"],
        appliesToKanji: ["*"],
        appliesToKana: ["*"],
        related: [],
        antonym: [],
        field: [],
        dialect: ["ksb"],
        misc: ["uk"],
        info: ["commonly used with adj-i inflections, e.g. あかんかった, あかんくない, etc."],
        languageSource: [],
        gloss: [
          { lang: "eng", gender: null, type: null, text: "useless" },
          { lang: "eng", gender: null, type: null, text: "no good" },
          { lang: "eng", gender: null, type: null, text: "hopeless" },
        ],
      },
      {
        partOfSpeech: ["exp"],
        appliesToKanji: ["*"],
        appliesToKana: ["*"],
        related: [],
        antonym: [],
        field: [],
        dialect: ["ksb"],
        misc: ["uk"],
        info: [],
        languageSource: [],
        gloss: [
          { lang: "eng", gender: null, type: null, text: "cannot" },
          { lang: "eng", gender: null, type: null, text: "must not" },
          { lang: "eng", gender: null, type: null, text: "not allowed" },
        ],
      },
    ],
  };

  */
