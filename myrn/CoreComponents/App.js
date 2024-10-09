import { StyleSheet, View, Text, Image, ImageBackground, ScrollView, Button, Alert, StatusBar, SafeAreaView, Platform } from 'react-native';
import CustomButton from './components/CustomButton';
import Box from './components/Box';
const image = require('./assets/abouttop.webp');
export default function App() {
  return (
    <SafeAreaView style={styles.baseContainer}>
      <View style={styles.container}>
        <Box style={{ backgroundColor: 'lightgreen', 
            }}>Box 1</Box>
          
          <Box style={{ backgroundColor: 'lightblue'  }}>Box 2</Box>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  baseContainer: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'lightgray',
    flex: 1,
  },
  container: {
    backgroundColor: 'plum',
    borderWidth: 4,
    borderColor: 'purple',
    width: 280,
    // height: 200,
    flex: 1,
    // overflow: 'visible', // visible | hidden | scroll | auto
    // justifyContent: 'space-between', // space-around | space-between | space-evenly
    // alignItems: 'stretch', // stretch | baseline | center | flex-end | flex-start
    flexDirection: 'row', // row | row-reverse | column | column-reverse
    // flexWrap: 'wrap', // wrap | nowrap | wrap-reverse
    // alignContent: 'space-around' // space-around | space-between | space-evenly | stretch

  }
})

