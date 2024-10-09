import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native';


export default function App() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={[styles.box, {width: windowWidth > 500 ? "70%" : "90%", height: windowHeight > 500 ? "60%" : "90%"}]} >
        <Text style={[styles.text, {fontSize: windowWidth > 500 ? 50 : 24}]}>Welcome!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'lightblue',
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 500 ? "60%" : "90%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text: {
    // fontSize: windowWidth > 500 ? 50 : 24,
  // },
});
