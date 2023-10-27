import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../util/colors";
const ImageUpload = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="add" size={24} color={COLORS.primary} />
      <Text style={styles.text}>Upload Image</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderStyle: "dashed",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
  },
});

export default ImageUpload;
