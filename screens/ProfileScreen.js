import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../util/colors";
import { FONTS } from "../util/fonts";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const ProfileScreen = () => {
  const navigation = useNavigation();
  //IDEA==================================================
  //To get recipes, when clicked, put in useEffect with categories, and check if recipes.isActive===true, then make API call.
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Recipes",
      isActive: true,
      backgroundColor: COLORS.secondary100,
    },
    {
      id: 2,
      name: "Stats",
      isActive: false,
      backgroundColor: "transparent",
    },
    {
      id: 3,
      name: "Groups",
      isActive: false,
      backgroundColor: "transparent",
    },
  ]);
  const [activeButton, setActiveButton] = useState(1);

  const buttonHandler = (id) => {
    setActiveButton(id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.bgContainer}></View>
      <SafeAreaView>
        <View style={styles.bugerContainer}>
          <TouchableOpacity>
            <FontAwesome name="navicon" color={COLORS.secondary200} size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.textImageContainer}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: FONTS["Bebas-Neue"],
                color: COLORS.gray,
                fontSize: 48,
              }}
            >
              Sveicināts atpakaļ,
              <Text
                style={{
                  fontFamily: FONTS["Bebas-Neue"],
                  color: COLORS.secondary100,
                  fontSize: 48,
                }}
              >
                Ulvis!
              </Text>
            </Text>
          </View>

          <View style={styles.image}></View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.infoContainer}>
            <View style={styles.box}>
              <Text
                style={{
                  color: COLORS.secondary100,
                  fontSize: 18,
                  fontFamily: FONTS["Sans-Medium"],
                }}
              >
                Patīk
              </Text>
              <Text
                style={{
                  fontFamily: FONTS["Sans-Light"],
                  color: COLORS.gray300,
                  fontSize: 16,
                }}
              >
                4928
              </Text>
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  color: COLORS.secondary100,
                  fontSize: 18,
                  fontFamily: FONTS["Sans-Medium"],
                }}
              >
                Raksti
              </Text>
              <Text
                style={{
                  fontFamily: FONTS["Sans-Light"],
                  color: COLORS.gray300,
                  fontSize: 16,
                }}
              >
                28
              </Text>
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  color: COLORS.secondary100,
                  fontSize: 18,
                  fontFamily: FONTS["Sans-Medium"],
                }}
              >
                Idejas
              </Text>
              <Text
                style={{
                  fontFamily: FONTS["Sans-Light"],
                  color: COLORS.gray300,
                  fontSize: 16,
                }}
              >
                48
              </Text>
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  color: COLORS.secondary100,
                  fontSize: 18,
                  fontFamily: FONTS["Sans-Medium"],
                }}
              >
                Punkti
              </Text>
              <Text
                style={{
                  fontFamily: FONTS["Sans-Light"],
                  color: COLORS.gray300,
                  fontSize: 16,
                }}
              >
                325
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.categoryContainer}>
        {categories.map((cat, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.category,
                cat.id === activeButton
                  ? { backgroundColor: COLORS.secondary100 }
                  : { backgroundColor: "transparent" },
              ]}
              onPress={() => buttonHandler(cat.id)}
            >
              <View>
                <Text
                  style={[
                    {
                      fontFamily: FONTS["Sans-Light"],
                      fontSize: 18,
                    },
                    cat.id === activeButton
                      ? { color: COLORS.gray }
                      : { color: COLORS.gray300 },
                  ]}
                >
                  {cat.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.recipeBoxContainer}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
    padding: 18,
  },
  bugerContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: COLORS.primary200,
    justifyContent: "center",
    alignItems: "center",
  },
  bgContainer: {
    backgroundColor: COLORS.primary300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 350,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 8,
    backgroundColor: COLORS.secondary300,
  },
  textImageContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    width: 250,
    height: 70,
    backgroundColor: COLORS.gray,
    borderRadius: 8,
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  box: {
    alignItems: "center",
  },
  categoryContainer: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  category: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  active: {
    backgroundColor: COLORS.secondary100,
  },
  recipeBoxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: 1,
    marginTop: 20,
  },
  recipeBox: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: COLORS.secondary300,
    margin: 4,
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 5,
  },
});

export default ProfileScreen;
