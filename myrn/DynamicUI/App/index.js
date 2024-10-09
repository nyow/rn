import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, useWindowDimensions, SafeAreaView } from 'react-native';


export default function App() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Text>Hello</Text>
      <View style={[styles.box, {width: windowWidth > 500 ? "70%" : "90%", height: windowHeight > 500 ? "60%" : "90%"}]} >
        <Text style={[styles.text, {fontSize: windowWidth > 500 ? 50 : 24}]}>Welcome!</Text>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
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
