import { StyleSheet, Text, TextInput } from "react-native";
import { COLORS } from "../../util/colors";

const InputField = ({
  placeholder,
  isPassword,
  onTextChange,
  error,
  value,
  onBlur,
  multiline,
  nol,
  height,
}) => {
  return (
    <>
      <TextInput
        style={[styles.container, { height: height }]}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        onChangeText={onTextChange}
        defaultValue={value}
        onBlur={onBlur}
        multiline={multiline}
        numberOfLines={nol}
      />
      <Text style={styles.errorMsg}>{error}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 9,
    height: 45,
    marginHorizontal: 10,
    marginVertical: 8,
    paddingLeft: 10,
    backgroundColor: COLORS.front,
  },
  errorMsg: {
    marginLeft: 15,
    marginBottom: 4,
    color: "red",
    fontSize: 12,
  },
  invalid: {
    backgroundColor: "#FFCCCC",
  },
});

export default InputField;
