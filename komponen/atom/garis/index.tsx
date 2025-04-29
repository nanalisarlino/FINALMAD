import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const Garis = ({top = 0, left = 0}) => {
  return <View style={[styles.garis, {top}, {left}]} />;
};

export default Garis;

const styles = StyleSheet.create({
  garis: {
    height: 3,
    backgroundColor: '#757575',
    width: 65,
    top: 30,
    left: 30,
  },
});
