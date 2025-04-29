import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Atasan = ({label, top = -400, left = -134}) => {
  return (
    <View>
      <Image
        source={require('../../../assets/ikon/Panahkembali.png')}
        style={styles.image0}
      />
      <Image
        source={require('../../../assets/gambar/Rectangle11.png')}
        style={styles.image}
      />
      <Text style={[styles.judul, {top}, {left}]}>{label}</Text>
    </View>
  );
};

export default Atasan;

const styles = StyleSheet.create({
  judul: {
    position: 'absolute',
    left: -134,
    top: -400,
    fontSize: 24,
    color: '#2D3250',
    fontFamily: 'SedanSC-Regular',
  },
  image0: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: -430,
    left: -190,
  },
  image: {
    position: 'absolute',
    top: -460,
    left: -205,
  },
});
