import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image source={require('./assets/img/logo.png')} style={styles.image} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.createAccountButton, styles.button]}>
          <Text>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.signInButton, styles.button]}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAccountButton: {
    borderWidth: 0.5,
    borderColor: '#FF7C1E',
  },
  image: {
    flex: 1,
    height: 190,
    width: 140,
    resizeMode: 'contain',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#FFFBF9',
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#FF7C1E',
    marginTop: 10,
  },
});

export default App;
