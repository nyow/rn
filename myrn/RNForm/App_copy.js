import { useState } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('my message');
  const [showMessage, setShowMessage] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput 
      style={styles.input} 
      placeholder='Enter your name' 
      onChangeText={(text) => setName(text)}
      // secureTextEntry
      keyboardType='numeric'
      autoCapitalize='none'
      autoCorrect={false}
      value={name}
      />
      <TextInput 
      style={[styles.input, styles.multilineInput]} 
      placeholder='message' 
      onChangeText={(text) => setMessage(text)}
      // secureTextEntry
      keyboardType='default'
      autoCapitalize='none'
      autoCorrect={false}
      multiline
      numberOfLines={4}
      value={message}
      />
      <Text>Your name is {name}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Show message</Text>
        <Switch value={showMessage} onValueChange={setShowMessage}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={showMessage ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onPress={() => setShowMessage(!showMessage)}
        />
      </View>
      {showMessage && <Text>Your message is {message}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 12,
  },
});