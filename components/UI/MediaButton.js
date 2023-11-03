import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../util/colors";
import { StyleSheet } from "react-native";
const MediaButton = ({ onPress, color, iconName, mright, mleft }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: color, marginRight: mright, marginLeft: mleft },
      ]}
    >
      <View style={styles.innerContainer}>
        <FontAwesome name={iconName} size={18} color={COLORS.gray} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    borderRadius: 8,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MediaButton;
