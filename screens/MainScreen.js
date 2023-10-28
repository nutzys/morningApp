import { useContext } from "react";
import { Text, View } from "react-native";
import { UserContext } from "../store/user-context";

const MainScreen = ({ navigation }) => {
  const ctx = useContext(UserContext);
  return (
    <View>{ctx.token && <Text>Main screen, hello: {ctx.user.name}</Text>}</View>
  );
};

export default MainScreen;
