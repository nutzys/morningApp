import { useContext } from "react";
import { Text, View } from "react-native";
import { UserContext } from "../store/user-context";

const MainScreen = ({ navigation }) => {
  const ctx = useContext(UserContext);
  return (
    <View>
      {ctx.isAuth && <Text>Main screen, hello: {ctx.authUser.user.name}</Text>}
    </View>
  );
};

export default MainScreen;
