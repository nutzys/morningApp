import { useContext, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { UserContext } from "../store/user-context";
import { COLORS } from "../util/colors";
import { FONTS } from "../util/fonts";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PlanCard from "../components/UI/home/PlanCard";

const MainScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Plānošana",
      isActive: true,
    },
    {
      id: 2,
      name: "Ēdiens",
      isActive: false,
    },
    {
      id: 3,
      name: "Iestatījumi",
      isActive: false,
    },
  ]);
  const [activeButton, setActiveButton] = useState(1);
  const buttonHandler = (id) => {
    setActiveButton(id);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.topcContainer}>
          <View>
            <Text
              style={{
                fontFamily: FONTS["Bebas-Neue"],
                fontSize: 48,
              }}
            >
              Labrīt, <Text style={{ color: COLORS.secondary100 }}>Ulvis!</Text>
            </Text>
            <Text
              style={{
                fontFamily: FONTS["Sans-Light"],
                fontSize: 16,
                color: COLORS.gray300,
              }}
            >
              Kā plānosi šodienu?
            </Text>
          </View>
          <View
            style={{
              borderRadius: 150,
              width: 100,
              height: 100,
              backgroundColor: COLORS.secondary200,
            }}
          ></View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.catContainer}>
            {categories.map((cat, index) => {
              return (
                <TouchableOpacity
                  onPress={() => buttonHandler(cat.id)}
                  key={index}
                >
                  <View
                    style={
                      cat.id === activeButton
                        ? {
                            backgroundColor: COLORS.secondary100,
                            borderRadius: 8,
                            paddingHorizontal: 8,
                            paddingVertical: 4,
                          }
                        : { backgroundColor: "transparent" }
                    }
                  >
                    <Text
                      style={[
                        cat.id === activeButton
                          ? { color: COLORS.primary300 }
                          : { color: COLORS.gray },
                        styles.catText,
                      ]}
                    >
                      {cat.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <ScrollView>
            <PlanCard />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  topcContainer: {
    height: 250,
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    justifyContent: "space-between",
  },
  bottomContainer: {
    padding: 18,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: COLORS.primary200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "70%",
  },
  catContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 20,
  },
  catText: {
    fontSize: 16,
    fontFamily: FONTS["Sans-Regular"],
  },
});
export default MainScreen;
