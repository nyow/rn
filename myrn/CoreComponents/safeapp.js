import { StyleSheet, View, Text, Image, ImageBackground, ScrollView, Button, Alert, StatusBar, SafeAreaView, Platform } from 'react-native';
import CustomButton from './components/CustomButton';
const image = require('./assets/abouttop.webp');
export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>
      {/* <Text><Text style={{ color: 'red' }}>Hello</Text> World</Text> */}
      
      {/* <Image source={{uri: 'https://picsum.photos/200'}} style={{ width: 100, height: 100 }} /> */}
      {/* <ImageBackground source={image} style={{  flex: 1}}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Hello asdmals, d asasldk sd ksld als kals dasd k,l lkk addsd askd lsd  sasdkls dlk aslkd lkks dlkas askd sslsd lsa dlsald lkasd lmk sad a dkd sllskad l</Text>
        </ImageBackground> */}
      <Image source={{uri: 'https://picsum.photos/200'}} style={{ width: 100, height: 100 }} />

      <CustomButton title="Click me" />
      <ScrollView horizontal={true}>
      <Text  style={[styles.box, styles.buttonnew, styles.worksiosboxshadow]} onPress={() => Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ])} >
      dsadsdkjkjkkjkjkjkjkjkjkjkjkj
      </Text>
      <Image source={{uri: 'https://picsum.photos/200'}} style={[styles.box, styles.worksiosboxshadow, styles.worksandroidboxshadow]} />
      </ScrollView>
      <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Sed, repellendus. More text.
      </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: StatusBar.currentHeight,
  },
  box: {
    width: 300,
    height: 300,
    margin: 20,
  },
  buttonnew: {
    backgroundColor: 'lightgreen',
    color: 'black',
  },
  worksiosboxshadow: Platform.select({
    ios: {
      shadowColor: '#333333',
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
    },
    android: {
      elevation: 5,
    },
  }),
  worksandroidboxshadow: {
    elevation: 5,
  }

})

