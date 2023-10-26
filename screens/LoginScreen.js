import { Image, Keyboard, Pressable, StyleSheet, ViewBase } from "react-native";
import { View } from "react-native";
import InputField from "../components/UI/InputField";
import ButtonUI from "../components/UI/ButtonUI";
import { useContext } from "react";
import { UserContext } from "../store/user-context";
import { Formik } from "formik";
import * as yup from "yup";

const Schema = yup.object({
  email: yup.string().required().min(10).email("Must be a valid email!"),
  password: yup.string().required().min(6),
});

const LoginScreen = ({ navigation }) => {
  const ctx = useContext(UserContext);

  const registerHandler = () => {
    navigation.navigate("Register");
  };
  const loginHandler = async (values) => {
    await ctx.setEmail(values.email);
    await ctx.setPassword(values.password);
    ctx.loggedUser();
    navigation.navigate("Home");
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../images/BetMornings.png")}
          style={styles.image}
        />
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Schema}
        onSubmit={loginHandler}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          touched,
          handleBlur,
        }) => (
          <View>
            <InputField
              placeholder="E-Mail"
              onTextChange={handleChange("email")}
              error={touched.email && errors.email}
              value={values.email}
              onBlur={handleBlur("email")}
              height={45}
            />
            <InputField
              placeholder="Password"
              isPassword={true}
              onTextChange={handleChange("password")}
              error={touched.password && errors.password}
              value={values.password}
              onBlur={handleBlur("password")}
              height={45}
            />
            <View style={styles.btnContainer}>
              <ButtonUI text="Login" iconName="login" onPress={handleSubmit} />
              <ButtonUI
                text="Register"
                outlined={true}
                iconName="add-to-list"
                onPress={registerHandler}
              />
            </View>
          </View>
        )}
      </Formik>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
  },
  image: {
    width: 300,
    height: 150,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
