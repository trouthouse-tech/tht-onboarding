import React from 'react';
import {Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image source={require('./assets/img/logo.png')} style={styles.image} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.createAccountButton]}>
          <Text>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.signInButton]}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#FFFBF9',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: 190,
    width: 140,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAccountButton: {
    borderWidth: 0.5,
    borderColor: '#FF7C1E',
  },
  signInButton: {
    backgroundColor: '#FF7C1E',
    marginTop: 10,
  },
});

export default App;
