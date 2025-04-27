import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.judul}> Remaja Baitel Kema</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    width: 414,
    height: 381,
    left: 0,
    top: -271,
    borderRadius: 40,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  judul: {
    position: 'absolute',
    left: 95,
    top: 333,
    fontSize: 24,
    color: '#2D3250',
    fontFamily: 'SedanSC-Regular',
  },
});
