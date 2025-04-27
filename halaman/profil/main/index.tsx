import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../../komponen/molekul/Header';

const MainProfile = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default MainProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
