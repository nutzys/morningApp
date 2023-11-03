import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../util/colors";
import { FONTS } from "../../../util/fonts";
import { FontAwesome } from "@expo/vector-icons";

const PlanCard = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: FONTS["Sans-Light"],
            fontSize: 18,
          }}
        >
          Šodien
        </Text>
        <Text style={{ fontFamily: FONTS["Sans-Light"], fontSize: 14 }}>
          12:45
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 5,
        }}
      >
        <View>
          <Text style={{ fontFamily: FONTS["Sans-Light"], fontSize: 12 }}>
            Lorem ipsum dolor sit amet consectetur.
          </Text>
        </View>
        <FontAwesome
          name="angle-double-right"
          size={24}
          color={COLORS.gray300}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: COLORS.gray,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
  },
});

export default PlanCard;
