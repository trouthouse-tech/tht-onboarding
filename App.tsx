import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image source={require('../tht-onboarding/assets/img/logo.png')} style={styles.image} />
      <TouchableOpacity>
        <Text>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Sign In</Text>
      </TouchableOpacity>
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
    height: 190,
    width: 140,
  },
});

export default App;
