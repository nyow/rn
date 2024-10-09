import { StyleSheet, View, Text } from "react-native";

export default function Box({ style, children }) {
    return (
    <View style={[styles.box, style]}>
        <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "black",
        padding: 10,
        // width: 180,
        // height: 180,
        flexGrow: 1
    },
    text: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
    }
})