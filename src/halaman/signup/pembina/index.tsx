import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground, ScrollView } from 'react-native';
import { InputText, Atasan, Bawahan } from '../../../Komponen/Molekul';
import { Button } from '../../../Komponen/Atom';

const PembinaSignUp: React.FC = () => {
  const [nama, setNama] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [kolom, setKolom] = useState('');
  const [alamat, setAlamat] = useState('');
  const [nomorHP, setNomorHP] = useState('');
  const [password, setPassword] = useState('');

  const handleDaftar = () => {
    console.log({ nama, tanggalLahir, kolom, alamat, nomorHP, password });
  };

  const handleBack = () => {
    console.log('Back pressed');
  };

  return (
    <ImageBackground
      source={require('../../../assets/gambar/background.png')}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Atasan label="DAFTAR" subtitle="Pembina" />

        <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}>
          <InputText label="Nama" value={nama} onChangeText={setNama} placeholder="Masukkan nama lengkap" />
          <InputText label="Tanggal Lahir" value={tanggalLahir} onChangeText={setTanggalLahir} placeholder="Masukkan tanggal lahir" />
          <InputText label="Kolom" value={kolom} onChangeText={setKolom} placeholder="Masukkan kolom" />
          <InputText label="Alamat" value={alamat} onChangeText={setAlamat} placeholder="Masukkan alamat rumah" multiline />
          <InputText label="Nomor HP (WhatsApp)" value={nomorHP} onChangeText={setNomorHP} placeholder="Masukkan nomor HP" keyboardType="phone-pad" />
          <InputText label="Password" value={password} onChangeText={setPassword} placeholder="Masukkan password" secureTextEntry />

          <View style={{ marginTop: 16 }}>
            <Button title="Daftar" onPress={handleDaftar} />
          </View>

          <TouchableOpacity onPress={() => console.log('Navigate to Sign In')}>
            <Text style={styles.loginText}>Masuk</Text>
          </TouchableOpacity>
        </ScrollView>

        <Bawahan />
      </View>
    </ImageBackground>
  );
};

export default PembinaSignUp;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 10,
  },
  backText: {
    fontSize: 20,
    color: '#2D3250',
  },
  formContainer: {
    paddingBottom: 30,
  },
  loginText: {
    fontSize: 15,
    marginTop: 12,
    color: '#2D3250',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});