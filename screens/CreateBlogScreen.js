import {
  Alert,
  Dimensions,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import InputField from "../components/UI/InputField";
import ButtonUI from "../components/UI/ButtonUI";
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { useContext, useState } from "react";
import { PostContext } from "../store/post-context";
import * as yup from "yup";
import { UserContext } from "../store/user-context";
import ImageUpload from "../components/UI/ImageUpload";
import * as ImagePicker from "expo-image-picker";
import ImageDisplay from "../components/UI/ImageDisplay";

const Schema = yup.object({
  title: yup.string().required().min(5),
  content: yup.string().required().min(10),
});

const CreateBlogScreen = () => {
  const postCtx = useContext(PostContext);
  const userCtx = useContext(UserContext);
  const [images, setImages] = useState([]);
  const screenWidth = Dimensions.get("screen").width;
  const handleSubmit = async (values) => {
    await imageHandler();
    // postCtx.addTitle(values.title);
    // postCtx.addContent(values.content);
    // postCtx.setUid(userCtx.authUser.id);
  };
  const imageHandler = async () => {
    let status = ImagePicker.requestMediaLibraryPermissionsAsync();

    const result = await ImagePicker.launchImageLibraryAsync();
    setImages((prev) => [...prev, { uri: result.assets[0].uri }]);
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
            return (
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
                <ScrollView
                  style={[styles.imageContainer, { width: screenWidth }]}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  snapToInterval={screenWidth}
                >
                  <ImageUpload onPress={imageHandler} />
                  {images &&
                    images.map((image, index) => {
                      return (
                        <TouchableOpacity key={index}>
                          <ImageDisplay source={image.uri} />
                        </TouchableOpacity>
                      );
                    })}
                </ScrollView>
                <View style={styles.btnContainer}>
                  <ButtonUI text="Add" />
                  <ButtonUI text="Cancel" outlined={true} />
                </View>
              </>
            );
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
  },
  imageContainer: {
    flexDirection: "row",
    flexGrow: 0,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default CreateBlogScreen;
