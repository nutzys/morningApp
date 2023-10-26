import { Image, Keyboard, Pressable, StyleSheet, View } from "react-native";
import InputField from "../components/UI/InputField";
import ButtonUI from "../components/UI/ButtonUI";
import { useContext } from "react";
import { UserContext } from "../store/user-context";
import { Formik } from "formik";
import * as yup from "yup";

const Schema = yup.object({
  names: yup.string().min(3).required(),
  email: yup.string().email("Must be a valid E-Mail!").required(),
  password: yup.string().min(6, "Must contain 6 chars!").required(),
});

const RegisterScreen = ({ navigation }) => {
  const ctx = useContext(UserContext);
  const loginHandler = () => {
    navigation.navigate("Login");
  };

  const registerHandler = async (values) => {
    await ctx.setEmail(values.email);
    await ctx.setName(values.names);
    await ctx.setPassword(values.password);
    ctx.makeUser();
    navigation.navigate("Login");
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
        initialValues={{ names: "", email: "", password: "" }}
        validationSchema={Schema}
        onSubmit={registerHandler}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          touched,
          handleBlur,
        }) => (
          <>
            <InputField
              placeholder="Name"
              onTextChange={handleChange("names")}
              value={values.names}
              error={touched.names && errors.names}
              onBlur={handleBlur("names")}
              height={45}
            />
            <InputField
              placeholder="E-Mail"
              onTextChange={handleChange("email")}
              value={values.email}
              error={touched.email && errors.email}
              onBlur={handleBlur("email")}
              height={45}
            />
            <InputField
              placeholder="Password"
              isPassword={true}
              onTextChange={handleChange("password")}
              value={values.password}
              error={touched.password && errors.password}
              onBlur={handleBlur("password")}
              height={45}
            />
            <View style={styles.btnContainer}>
              <ButtonUI
                text="Register"
                outlined={false}
                iconName="add-to-list"
                onPress={handleSubmit}
              />
              <ButtonUI
                text="Login"
                outlined={true}
                iconName="login"
                onPress={loginHandler}
              />
            </View>
          </>
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

export default RegisterScreen;
