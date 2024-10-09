import { useState } from 'react';
import { Button, Image, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const validateForm = () => {
    let errors = {};
    if (username.length < 3) {
      errors.username = 'Username must be at least 3 characters';
      console.log(error,"d");
    }
    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
      console.log(error);
    }
    setError(errors);
    return Object.keys(error).length === 0;
    // Possible output: true (if no errors)
    // Possible output: false (if there are errors)
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
        style={styles.form}>
        <Image source={require('./assets/adaptive-icon.png')} style={styles.logo_image}/>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder='Enter your username'  value={username} onChangeText={setUsername}/>
        {error.username && <Text style={styles.error}>{error.username}</Text>}
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder='Enter your password' secureTextEntry value={password} onChangeText={setPassword}/>
        {error.password && <Text style={styles.error}>{error.password}</Text>}
        <Button title='Login' 
        style={styles.button}
        onPress={() => 
        {
          if (validateForm()) {
            console.log(`Username: ${username}, Password: ${password}`);
            setUsername('');
            setPassword('');
            setError({});
          }
        }} />
        <View style={{height: 20}} visble={Platform.OS === 'ios'}>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
  },
  form: {
    margin:40,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  label: {
    marginBottom: 5,
    marginLeft: 4,
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    padding: 30,
  },
  logo_image: {
    width: 200,
    height: 200,
    marginBottom: 50,
    alignSelf: 'center',
  }
});
