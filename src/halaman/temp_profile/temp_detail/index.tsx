import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Atasan, Bawahan} from '../../../Komponen/Molekul';
import {Garis, TeksBiasa} from '../../../Komponen/Atom';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const DetailKehadiran = ({}) => {
  return (
    <View style={styles.container}>
      <Atasan label={'REMAJA BAITEL KEMA'} />
      <View style={styles.bgiconplus} />
      <Text style={styles.tekstambahfoto}> Informasi Pribadi</Text>
      <TeksBiasa label={'Detail Kehadiran'} top={-160} left={-60} />
      <View style={styles.persegisaja}>
        <TeksBiasa
          label={'Arlino Abraham Timotius Nanalis'}
          top={60}
          left={40}
        />
        <TeksBiasa label={'Hadir: 17'} top={90} left={127} />
        <TeksBiasa label={'13 April'} top={160} left={127} />
        <Garis top={195} height={2} left={60} width={200} />
        <TeksBiasa label={'6 April'} top={201} left={127} />
        <Garis top={235} height={2} left={60} width={200} />
        <TeksBiasa label={'30 Maret'} top={241} left={127} />
        <Garis top={275} height={2} left={60} width={200} />
      </View>
      <Bawahan />
    </View>
  );
};

export default DetailKehadiran;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgiconplus: {
    position: 'absolute',
    width: 82,
    height: 84,
    top: 200,
    left: 165,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
  },
  tekstambahfoto: {
    top: -300,
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  persegisaja: {
    position: 'absolute',
    width: 330,
    height: 500,
    top: 340,
    left: 42,
    borderColor: '#757575',
    borderWidth: 2,
    backgroundColor: '#D9D9D9',
  },
});
