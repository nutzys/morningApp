import * as Font from "expo-font";
export const loadFonts = async () => {
  try {
    await Font.loadAsync({
      "Sans-Light": require("../assets/fonts/SourceSans3-Light.ttf"),
      "Sans-Light-Italic": require("../assets/fonts/SourceSans3-LightItalic.ttf"),
      "Sans-Medium": require("../assets/fonts/SourceSans3-Medium.ttf"),
      "Sans-Medium-Italic": require("../assets/fonts/SourceSans3-MediumItalic.ttf"),
      "Sans-Regular": require("../assets/fonts/SourceSans3-Regular.ttf"),
      "Bebas-Neue": require("../assets/fonts/BebasNeue-Regular.ttf"),
    });
  } catch (error) {
    console.log(error);
  }
};

export const FONTS = {
  "Sans-Light": "Sans-Light",
  "Sans-Light-Italic": "Sans-Light-Italic",
  "Sans-Medium": "Sans-Medium",
  "Sans-Medium-Italic": "Sans-Medium-Italic",
  "Sans-Regular": "Sans-Regular",
  "Bebas-Neue": "Bebas-Neue",
};
