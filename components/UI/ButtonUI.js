import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../util/colors";
import { Entypo } from "@expo/vector-icons";
import { FONTS } from "../../util/fonts";

const ButtonUI = ({ text, outlined, iconName, onPress }) => {
  return (
    <TouchableOpacity
      style={outlined ? styles.containerOutlined : styles.container}
      onPress={onPress}
    >
      <View style={styles.innerContainer}>
        <Text style={outlined ? styles.textOutlined : styles.text}>{text}</Text>
        <Entypo
          name={iconName}
          size={18}
          color={COLORS.primary}
          style={
            outlined
              ? [styles.icon, styles.textOutlined]
              : [styles.icon, styles.text]
          }
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingHorizontal: 16,
    backgroundColor: COLORS.secondary100,
    borderRadius: 8,
    justifyContent: "center",
  },
  containerOutlined: {
    flex: 1,
    justifyContent: "center",
    height: 45,
    borderWidth: 2,
    borderColor: COLORS.secondary100,
    borderRadius: 9,
    margin: 5,
    paddingHorizontal: 16,
  },
  text: {
    color: COLORS.gray,
    fontFamily: FONTS.sansregular,
  },
  textOutlined: {
    color: COLORS.secondary100,
  },
  innerContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    marginLeft: 6,
  },
});

export default ButtonUI;
