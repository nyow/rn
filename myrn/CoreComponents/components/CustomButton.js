import { View, Text, StyleSheet } from 'react-native';

export default function CustomButton(props) {
    return (
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
    },
})