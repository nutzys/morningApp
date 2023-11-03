import {
  Button,
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewBase,
} from "react-native";
import { View } from "react-native";
import InputField from "../components/UI/InputField";
import ButtonUI from "../components/UI/ButtonUI";
import { useContext, useState } from "react";
import { UserContext } from "../store/user-context";
import { Formik } from "formik";
import * as yup from "yup";
import MediaButton from "../components/UI/MediaButton";
import { FONTS } from "../util/fonts";
import { COLORS } from "../util/colors";

const Schema = yup.object({
  email: yup
    .string()
    .required("Laukam jābūt aizpildītam")
    .email("E-Pastam jābūt reālam"),
  password: yup
    .string()
    .required("Laukam jābūt aizpildītam")
    .min(6, "Parolei jāsatur 6 rakstzīmes"),
});

const LoginScreen = ({ navigation }) => {
  const ctx = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = () => {
    navigation.navigate("Register");
  };

  const loginHandler = async (values) => {
    await ctx.loggedUser(values.email, values.password);
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={Keyboard.dismiss}>
        <View style={styles.textContainer}>
          <Text style={styles.header}>Labrīt!</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <View style={styles.inputContainer}>
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
              <>
                <InputField
                  label="E-Pasts"
                  onTextChange={handleChange("email")}
                  error={touched.email && errors.email}
                  value={values.email}
                  onBlur={handleBlur("email")}
                />
                <InputField
                  label="Parole"
                  onTextChange={handleChange("password")}
                  error={touched.password && errors.password}
                  value={values.password}
                  onBlur={handleBlur("password")}
                  isPassword={true}
                />
                <ButtonUI text="Pieslēgties" onPress={handleSubmit} />
              </>
            )}
          </Formik>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.continueContainer}>
            <Text style={styles.contineText} t>
              Vai Turpināt Ar
            </Text>
          </View>
          <View style={styles.mediaButtons}>
            <MediaButton iconName="google" color="#D82E16" mright={5} />
            <MediaButton iconName="facebook" color="#137ECB" mleft={5} />
          </View>
          <View style={styles.bottomAction}>
            <Text style={styles.memberText}>Neesi Lietotājs?</Text>
            <TouchableOpacity onPress={() => registerHandler()}>
              <Text style={styles.signInText}>Reģistēties!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 190,
    margin: 18,
  },
  textContainer: {},
  header: {
    fontFamily: FONTS["Bebas-Neue"],
    fontSize: 48,
  },
  paragraph: {
    fontFamily: FONTS["Sans-Light-Italic"],
    fontSize: 12,
    color: COLORS.gray300,
  },
  inputContainer: {
    marginTop: 33,
  },
  bottomContainer: {
    justifyContent: "space-between",
  },
  continueContainer: {
    marginVertical: 33,
    justifyContent: "center",
    alignItems: "center",
  },
  contineText: {
    fontFamily: FONTS["Sans-Regular"],
    fontSize: 12,
    color: COLORS.gray100,
  },
  mediaButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 120,
  },
  bottomAction: {
    flexDirection: "row",
    justifyContent: "center",
  },
  memberText: {
    fontFamily: FONTS["Sans-Light"],
    color: COLORS.gray500,
    fontSize: 12,
  },
  signInText: {
    fontFamily: FONTS["Sans-Medium"],
    color: COLORS.secondary100,
    fontSize: 12,
    marginLeft: 4,
  },
});

export default LoginScreen;
