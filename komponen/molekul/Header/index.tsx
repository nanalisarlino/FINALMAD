import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

<<<<<<< HEAD
interface AtasanProps {
  label: string;
  subtitle?: string;
  top?: number;
  left?: number;
}

const Atasan: React.FC<AtasanProps> = ({ label, subtitle, top = -400, left = -134 }) => {
=======
const Atasan = ({label, top = 14, left = 0}) => {
>>>>>>> 05d3aecf35cf66811792a056f8a33909068c92c7
  return (
    <View style={(styles.container, {top}, {left})}>
      <Image
        source={require('../../../assets/ikon/Panahkembali.png')}
        style={styles.image0}
      />
      <Image
        source={require('../../../assets/gambar/Rectangle11.png')}
        style={styles.image}
      />
<<<<<<< HEAD
      <Text style={[styles.judul, { top, left }]}>{label}</Text>
      {subtitle && (
        <Text style={[styles.subtitle, { top: top + 28, left }]}>{subtitle}</Text>
      )}
=======
      <Text style={styles.judul}>{label}</Text>
>>>>>>> 05d3aecf35cf66811792a056f8a33909068c92c7
    </View>
  );
};

export default Atasan;

const styles = StyleSheet.create({
  container: {
    top: 14,
    left: 0,
  },
  judul: {
    position: 'absolute',
    fontSize: 24,
    color: '#2D3250',
    fontFamily: 'SedanSC-Regular',
  },
  subtitle: {
    position: 'absolute',
    fontSize: 16,
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
