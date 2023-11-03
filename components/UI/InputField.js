import { StyleSheet, Text, TextInput } from "react-native";
import { COLORS } from "../../util/colors";
import { FONTS } from "../../util/fonts";
import { useFonts } from "expo-font";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InputField = ({
  label,
  isPassword,
  onTextChange,
  error,
  value,
  onBlur,
  multiline,
  nol,
  height,
}) => {
  const [fontsLoaded] = useFonts({
    "Sans Light": require("../../assets/fonts/SourceSans3-Light.ttf"),
    "Bebas Neue": require("../../assets/fonts/BebasNeue-Regular.ttf"),
  });
  return (
    <>
      <Text
        style={{
          fontFamily: FONTS.sanslight,
          color: COLORS.gray300,
          fontSize: 10,
        }}
      >
        {label}
      </Text>
      <TextInput
        style={styles.container}
        secureTextEntry={isPassword}
        onChangeText={onTextChange}
        defaultValue={value}
        onBlur={onBlur}
        multiline={multiline}
        numberOfLines={nol}
      />
      <View style={styles.errorContainer}>
        {error && (
          <FontAwesome name="exclamation-circle" size={12} color="red" />
        )}
        <Text style={styles.errorMsg}>{error}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray,
    borderWidth: 1,
    borderColor: COLORS.gray100,
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 10,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  errorMsg: {
    marginVertical: 4,
    marginLeft: 4,
    color: "red",
    fontSize: 10,
  },
  invalid: {
    backgroundColor: "#FFCCCC",
  },
});

export default InputField;
