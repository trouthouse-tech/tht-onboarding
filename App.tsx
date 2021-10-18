import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
    flex: 1, //will take to 100% of view mode
    backgroundColor: '#FFFBF9',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: 198,
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
