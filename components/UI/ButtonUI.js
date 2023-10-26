import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../util/colors";
import { Entypo } from "@expo/vector-icons";

const ButtonUI = ({text, outlined, iconName, onPress}) => {
    return (
        <TouchableOpacity style={outlined ? styles.containerOutlined : styles.container} onPress={onPress}>
            <View style={styles.innerContainer}>
                <Text style={outlined? styles.textOutlined : styles.text}>{text}</Text>
                <Entypo name={iconName} size={18} color={COLORS.primary} style={outlined ? [styles.icon, styles.textOutlined] : [styles.icon, styles.text]}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 45,
        margin: 5,
        paddingHorizontal: 16,
        backgroundColor: COLORS.primary,
        borderRadius: 9,
        justifyContent: "center",
    },
    containerOutlined: {
        flex: 1,
        justifyContent: "center",
        height: 45,
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderRadius: 9,
        margin: 5,
        paddingHorizontal: 16,
    },
    text: {
        color: "#fff"
    },
    textOutlined: {
        color: COLORS.primary
    }, 
    innerContainer: {
        justifyContent: "center",
        flexDirection: "row"
    },
    icon: {
        marginLeft: 6,
    }
});

export default ButtonUI;