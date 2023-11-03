import {
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputField from "../components/UI/InputField";
import ButtonUI from "../components/UI/ButtonUI";
import { useContext, useLayoutEffect } from "react";
import { UserContext } from "../store/user-context";
import { Formik } from "formik";
import * as yup from "yup";
import { FONTS, loadFonts } from "../util/fonts";
import { COLORS } from "../util/colors";
import MediaButton from "../components/UI/MediaButton";

const Schema = yup.object({
  names: yup
    .string()
    .min(3, "Vārdam jābūt lielākam par 3 rakstzīmēm")
    .required("Laukam jābūt aizpildītam"),
  email: yup
    .string()
    .email("E-Pastam jābūt reālam")
    .required("Laukam jābūt aizpildītam"),
  password: yup
    .string()
    .min(6, "Parolei jāsatur 6 rakstzīmes")
    .required("Laukam jābūt aizpildītam"),
});

const RegisterScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    loadFonts();
  }, []);
  const ctx = useContext(UserContext);
  const loginHandler = () => {
    navigation.navigate("Login");
  };

  const registerHandler = (values) => {
    ctx.makeUser(values.name, values.email, values.password);
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.signUpText}>Reģistrēties</Text>
          <Text style={styles.bottomText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <View style={styles.actionContainer}>
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
                  label="Vārds/Uzvārds"
                  onTextChange={handleChange("names")}
                  error={touched.names && errors.names}
                  value={values.names}
                  onBlur={handleBlur("names")}
                />
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
                <ButtonUI
                  text="Izveidot Profilu"
                  outlined={false}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.continueContainer}>
            <Text style={styles.continueText}>Vai Turpināt Ar</Text>
          </View>
          <View style={styles.mediaButtons}>
            <MediaButton color="#D82E16" iconName="google" mright={5} />
            <MediaButton color="#137ECB" iconName="facebook" mleft={5} />
          </View>
          <View style={styles.bottomAction}>
            <Text style={styles.memberText}>Jau Reģistrējies?</Text>
            <TouchableOpacity onPress={() => loginHandler()}>
              <Text style={styles.signInText}>Pieslēgties!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 170,
    margin: 18,
  },
  signUpText: {
    fontFamily: FONTS["Bebas-Neue"],
    fontSize: 48,
  },
  bottomText: {
    fontFamily: FONTS["Sans-Light-Italic"],
    fontSize: 12,
    color: COLORS.gray300,
  },
  actionContainer: {
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
  continueText: {
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
    fontFamily: FONTS["Sans-Regular"],
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

export default RegisterScreen;
