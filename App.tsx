import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView>
      <Image source={require('../tht-onboarding/assets/img/logo.png')} style={styles.image} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 190,
    width: 140,
  },
});

export default App;
