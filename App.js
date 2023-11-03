import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";
import DevicesScreen from "./screens/DevicesScreen";
import { COLORS } from "./util/colors";
import UserContextProvider, { UserContext } from "./store/user-context";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useLayoutEffect } from "react";
import BlogScreen from "./screens/BlogScreen";
import CreateBlogScreen from "./screens/CreateBlogScreen";
import PostContextProvider from "./store/post-context";
import { loadFonts } from "./util/fonts";

export default function App({ navigation }) {
  useLayoutEffect(() => {
    loadFonts();
  }, []);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  const ctx = useContext(UserContext);
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Blog" component={BlogScreen} />
        <Drawer.Screen name="Create" component={CreateBlogScreen} />
      </Drawer.Navigator>
    );
  };
  const TabNavigator = () => {
    const navigation = useNavigation();
    return (
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            right: 20,
            left: 20,
            borderRadius: 150,
            height: 60,
            backgroundColor: COLORS.primary300,
          },
          tabBarActiveTintColor: COLORS.secondary100,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color, focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    top: 13,
                  }}
                >
                  <FontAwesome name="home" size={size} color={color} />
                  <Text
                    style={
                      focused
                        ? { color: COLORS.secondary100, fontSize: 12 }
                        : { color: color, fontSize: 12 }
                    }
                  >
                    Home
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    top: 13,
                  }}
                >
                  <FontAwesome name="user" size={size} color={color} />
                  <Text
                    style={
                      focused
                        ? { color: COLORS.secondary100, fontSize: 12 }
                        : { color: color, fontSize: 12 }
                    }
                  >
                    Profile
                  </Text>
                </View>
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Devices"
          component={DevicesScreen}
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    top: 13,
                  }}
                >
                  <FontAwesome name="microchip" size={size} color={color} />
                  <Text
                    style={
                      focused
                        ? { color: COLORS.secondary100, fontSize: 12 }
                        : { color: color, fontSize: 12 }
                    }
                  >
                    Devices
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <UserContextProvider>
      <PostContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: {
                backgroundColor: COLORS.gray,
              },
            }}
          >
            {!ctx.token && (
              <>
                <Stack.Screen
                  name="Register"
                  component={RegisterScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{
                    headerShown: false,
                  }}
                />
              </>
            )}
            <Stack.Screen
              name="Home"
              component={TabNavigator}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PostContextProvider>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  rightSide: {
    marginRight: 10,
  },
});
