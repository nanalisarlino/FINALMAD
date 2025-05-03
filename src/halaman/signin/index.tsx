import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { InputText, Bawahan } from '../../Komponen/Molekul';
import { Button } from '../../Komponen/Atom';

const SignIn: React.FC = () => {
  const [nomorHP, setNomorHP] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('remaja');

  const handleMasuk = () => {
    console.log({ nomorHP, password, role });
  };

  const handleDaftar = () => {
    console.log('Navigating to sign-up page');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/gambar/bg.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : undefined}
            style={styles.keyboardAvoiding}
          >
            <ScrollView
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
            >
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

              <View style={{ marginTop: 16 }}>
                <Button title="Masuk" onPress={handleMasuk} />
              </View>

              <TouchableOpacity onPress={handleDaftar}>
                <Text style={styles.daftarText}>Belum punya akun? Daftar</Text>
              </TouchableOpacity>

              <View style={{ height: 60 }} /> {/* Spacer */}
            </ScrollView>
          </KeyboardAvoidingView>

          <View style={styles.footerContainer}>
            <Bawahan />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 80,
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
  footerContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});