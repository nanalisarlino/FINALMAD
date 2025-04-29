import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from '../../../komponen/atom';
import { Bawahan } from '../../../komponen/molekul';
import { useNavigation } from '@react-navigation/native';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const handleRemaja = () => {
    console.log('Daftar sebagai Remaja');
    // navigation.navigate('RemajaSignUp');
  };

  const handlePembina = () => {
    console.log('Daftar sebagai Pembina');
    // navigation.navigate('PembinaSignUp');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('../../assets/background.jpg')}
        style={styles.backgroundImage}
      />

      {/* White Transparent Overlay */}
      <View style={styles.overlay} />

      {/* Main Content */}
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>DAFTAR</Text>

          <View style={styles.buttonsContainer}>
            <Button title="Remaja" onPress={handleRemaja} />
            <Button title="Pembina" onPress={handlePembina} />
          </View>
        </View>

        {/* Bottom Section: Back Button + Footer */}
        <View style={styles.bottomSection}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Bawahan />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 40,
    fontFamily: 'SedanSC-Regular',
    color: '#2D3250',
  },
  buttonsContainer: {
    gap: 20,
    alignItems: 'center',
  },
  bottomSection: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: '#2D3250',
  },
});