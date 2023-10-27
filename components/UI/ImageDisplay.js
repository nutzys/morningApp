import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ImageDisplay = ({ source, onPress }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: source }} style={styles.image} />
      <TouchableOpacity style={styles.deleteBtn} onPress={onPress}>
        <Ionicons name="md-trash-outline" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  deleteBtn: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
export default ImageDisplay;
