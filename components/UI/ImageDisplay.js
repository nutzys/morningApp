import { Image, StyleSheet, View } from "react-native";

const ImageDisplay = ({ source }) => {
  return (
    <View>
      <Image source={{ uri: source }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
export default ImageDisplay;
