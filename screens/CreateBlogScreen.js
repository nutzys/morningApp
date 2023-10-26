import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import InputField from "../components/UI/InputField";
import ButtonUI from "../components/UI/ButtonUI";
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { useContext } from "react";
import { PostContext } from "../store/post-context";
import * as yup from "yup";

const Schema = yup.object({
  title: yup.string().required().min(5),
  content: yup.string().required().min(10),
});

const CreateBlogScreen = () => {
  const postCtx = useContext(PostContext);
  const handleSubmit = (values) => {
    postCtx.addTitle(values.title);
    postCtx.addContent(values.content);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="local-post-office" size={72} />
        </View>
        <Formik
          initialValues={{ title: "", content: "" }}
          validationSchema={Schema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            touched,
            handleBlur,
          }) => {
            <>
              <InputField
                placeholder="Title"
                height={45}
                value={values.title}
                error={touched.title && errors.title}
                onTextChange={handleChange("title")}
                onBlur={handleBlur("title")}
              />
              <InputField
                placeholder="Content"
                multiline={true}
                nol={4}
                height={150}
                value={values.content}
                error={touched.content && errors.content}
                onTextChange={handleChange("content")}
                onBlur={handleBlur("content")}
              />
              <View style={styles.btnContainer}>
                <ButtonUI text="Add" />
                <ButtonUI text="Cancel" outlined={true} />
              </View>
            </>;
          }}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
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
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
});

export default CreateBlogScreen;
