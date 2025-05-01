import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { InputText, Bawahan } from '../../komponen/molekul';
import { Button } from '../../komponen/atom';

const SignIn: React.FC = () => {
  const [nomorHP, setNomorHP] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('remaja');

  const handleMasuk = () => {
    console.log({ nomorHP, password, role });
  };

  const handleDaftar = () => {
    console.log('Navigating to sign-up page');
    // navigation.navigate('SignUp')
  };

  return (
    <ImageBackground
      source={require('../../../assets/gambar/background.png')}
      style={styles.imageBackground}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <InputText
            label="Nomor HP (WhatsApp)"
            value={nomorHP}
            onChangeText={setNomorHP}
            placeholder="Masukkan nomor HP"
            keyboardType="phone-pad"
          />
          <InputText
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Masukkan password"
            secureTextEntry
          />

          {/* Dropdown Role */}
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={role}
              onValueChange={(itemValue) => setRole(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Remaja" value="remaja" />
              <Picker.Item label="Pembina" value="pembina" />
            </Picker>
          </View>

          {/* Masuk Button */}
          <View style={{ marginTop: 16 }}>
            <Button title="Masuk" onPress={handleMasuk} />
          </View>

          {/* Daftar Link */}
          <TouchableOpacity onPress={handleDaftar}>
            <Text style={styles.daftarText}>Belum punya akun? Daftar</Text>
          </TouchableOpacity>
        </View>

        <Bawahan />
      </View>
    </ImageBackground>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  container: {
    flexDirection: 'column',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 16,
  },
  picker: {
    width: '100%',
    height: 42,
  },
  daftarText: {
    fontSize: 15,
    marginTop: 16,
    color: '#2D3250',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});