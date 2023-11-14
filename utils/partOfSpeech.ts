export default function getPartOfSpeech(posAbbreviation: string): string {
  switch (posAbbreviation) {
    case "adj":
    case "adj-f":
    case "adj-i":
    case "adj-ix":
    case "adj-kari":
    case "adj-ku":
    case "adj-na":
    case "adj-nari":
    case "adj-no":
    case "adj-pn":
    case "adj-shiku":
    case "adj-t":
      return "adjective";

    case "adv":
    case "adv-to":
      return "adverb";

    case "aux":
    case "aux-adj":
      return "auxiliary adjective";

    case "aux-v":
      return "auxiliary verb";

    case "conj":
      return "conjunction";

    case "cop":
      return "copula";

    case "ctr":
      return "counter";

    case "exp":
      return "expression";

    case "int":
      return "interjection";

    case "n":
    case "n-adv":
    case "n-pr":
    case "n-pref":
    case "n-suf":
    case "n-t":
      return "noun";

    case "num":
      return "numeric";

    case "pn":
      return "pronoun";

    case "pref":
      return "prefix";

    case "prt":
      return "particle";

    case "suf":
      return "suffix";

    case "unc":
      return "unclassified";

    case "v-unspec":
    case "v1":
    case "v1-s":
    case "v2a-s":
    case "v2b-k":
    case "v2b-s":
    case "v2d-k":
    case "v2d-s":
    case "v2g-k":
    case "v2g-s":
    case "v2h-k":
    case "v2h-s":
    case "v2k-k":
    case "v2k-s":
    case "v2m-k":
    case "v2m-s":
    case "v2n-s":
    case "v2r-k":
    case "v2r-s":
    case "v2s-s":
    case "v2t-k":
    case "v2t-s":
    case "v2w-s":
    case "v2y-k":
    case "v2y-s":
    case "v2z-s":
    case "v4b":
    case "v4g":
    case "v4h":
    case "v4k":
    case "v4m":
    case "v4n":
    case "v4r":
    case "v4s":
    case "v4t":
    case "v5aru":
    case "v5b":
    case "v5g":
    case "v5k":
    case "v5k-s":
    case "v5m":
    case "v5n":
    case "v5r":
    case "v5r-i":
    case "v5s":
    case "v5t":
    case "v5u":
    case "v5u-s":
    case "v5uru":
    case "vi":
    case "vk":
    case "vn":
    case "vr":
    case "vs":
    case "vs-c":
    case "vs-i":
    case "vs-s":
    case "vt":
    case "vz":
      return "verb";

    default:
      return "unknown";
  }
}
