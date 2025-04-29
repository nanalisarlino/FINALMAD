import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from '../../komponen/atom';
import { Bawahan } from '../../komponen/molekul';

const Entrance: React.FC = () => {
  const handleMasuk = () => {
    console.log('Masuk clicked');
  };

  const handleDaftar = () => {
    console.log('Daftar clicked');
  };

  return (
    <View style={styles.container}>
      {/* Background Image (Top 70%) */}
      <Image
        source={require('../../assets/background.jpg')}
        style={styles.backgroundImage}
      />
      
      {/* Gradient Image (Bottom 30%) */}
      <Image
        source={require('../../assets/gradient.png')}
        style={styles.gradientImage}
      />
      
      {/* Title Overlay */}
      <View style={styles.overlayContent}>
        <Text style={styles.title}>Sistem Absensi RGK</Text>
      </View>

      {/* Bottom Content (SHALLOM!, Buttons, Logo) */}
      <View style={styles.bottomContent}>
        <View style={styles.textAndButtons}>
          <Text style={styles.shallom}>SHALLOM!</Text>
          <View style={styles.buttonsContainer}>
            <Button title="Masuk" onPress={handleMasuk} />
            <Button title="Daftar" onPress={handleDaftar} />
          </View>
        </View>
        <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Bawahan />
      </View>
    </View>
  );
};

export default Entrance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  gradientImage: {
    width: '100%',
    height: '30%',
    resizeMode: 'cover',
  },
  overlayContent: {
    position: 'absolute',
    top: '20%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'SedanSC-Regular',
    textAlign: 'center',
  },
  bottomContent: {
    position: 'absolute',
    bottom: 100, // Places it above footer with a gap
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  textAndButtons: {
    alignItems: 'flex-end',
  },
  shallom: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 155,
    height: 167,
    top: 23,
    left: 671,
    resizeMode: 'contain',
  },  
});