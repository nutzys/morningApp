import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";
import DevicesScreen from "./screens/DevicesScreen";
import { COLORS } from "./util/colors";
import UserContextProvider, { UserContext } from "./store/user-context";
import { StyleSheet } from "react-native";
import { useContext } from "react";
import BlogScreen from "./screens/BlogScreen";
import CreateBlogScreen from "./screens/CreateBlogScreen";

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const ctx = useContext(UserContext);

  const DrawerNavigator = ({ navigation }) => {
    const ctx = useContext(UserContext);
    const logoutUser = () => {
      ctx.logout();
      navigation.navigate("Login");
    };
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          drawerActiveBackgroundColor: COLORS.secondary,
          drawerActiveTintColor: COLORS.front,
          drawerContentStyle: {
            backgroundColor: COLORS.primary,
          },
          drawerInactiveTintColor: COLORS.front,
          headerTintColor: COLORS.front,
        }}
      >
        <Drawer.Screen
          name="Main"
          component={MainScreen}
          options={{
            drawerIcon: ({ size, color }) => {
              return <Ionicons name="home" size={size} color={color} />;
            },
            headerRight: ({ tintColor }) => {
              return (
                <Ionicons
                  style={styles.rightSide}
                  name="exit"
                  color={tintColor}
                  size={24}
                  onPress={logoutUser}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ size, color }) => {
              return <Ionicons name="people" size={size} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="Devices"
          component={DevicesScreen}
          options={{
            drawerIcon: ({ size, color }) => {
              return (
                <Ionicons
                  name="hardware-chip-sharp"
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="Blogs"
          component={BlogScreen}
          options={{
            drawerIcon: ({ size, color }) => {
              return <Ionicons name="list" color={color} size={size} />;
            },
          }}
        />
        <Drawer.Screen
          name="CreateBlog"
          component={CreateBlogScreen}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Ionicons name="add" size={size} color={color} />;
            },
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!ctx.isAuth && (
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
            component={DrawerNavigator}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  rightSide: {
    marginRight: 10,
  },
});
