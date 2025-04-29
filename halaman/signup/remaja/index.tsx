import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { InputText, Atasan, Bawahan } from '../../../komponen/molekul';
import { Button } from '../../../komponen/atom';

const RemajaSignUp: React.FC = () => {
  const [nama, setNama] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [kolom, setKolom] = useState('');
  const [namaAyah, setNamaAyah] = useState('');
  const [namaIbu, setNamaIbu] = useState('');
  const [alamat, setAlamat] = useState('');
  const [nomorHP, setNomorHP] = useState('');
  const [password, setPassword] = useState('');

  const handleDaftar = () => {
    console.log({
      nama,
      tanggalLahir,
      kolom,
      namaAyah,
      namaIbu,
      alamat,
      nomorHP,
      password,
    });
    // Save logic here
  };

  const handleBack = () => {
    console.log('Back pressed');
    // navigation.goBack() if using React Navigation
  };

  return (
        <ImageBackground
        source={require('../../../assets/images/bg-auth.png')} // Ganti path sesuai lokasi file
        style={styles.imageBackground}
        >
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Header */}
      <Atasan label="DAFTAR" subtitle="Remaja" />

      <View style={styles.formContainer}>
        <InputText
          label="Nama"
          value={nama}
          onChangeText={setNama}
          placeholder="Masukkan nama lengkap"
        />
        <InputText
          label="Tanggal Lahir"
          value={tanggalLahir}
          onChangeText={setTanggalLahir}
          placeholder="Masukkan tanggal lahir"
        />
        <InputText
          label="Kolom"
          value={kolom}
          onChangeText={setKolom}
          placeholder="Masukkan kolom"
        />
        <InputText
          label="Nama Ayah"
          value={namaAyah}
          onChangeText={setNamaAyah}
          placeholder="Masukkan nama ayah"
        />
        <InputText
          label="Nama Ibu"
          value={namaIbu}
          onChangeText={setNamaIbu}
          placeholder="Masukkan nama ibu"
        />
        <InputText
          label="Alamat"
          value={alamat}
          onChangeText={setAlamat}
          placeholder="Masukkan alamat rumah"
          multiline
        />
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
        <Button title="Daftar" onPress={handleDaftar} />

        <TouchableOpacity onPress={() => console.log('Navigate to Sign In')}>
            <Text style={styles.loginText}>Masuk</Text>
        </TouchableOpacity>
      </View>

      <Bawahan />
    </View>
    </ImageBackground>
  );
};

export default RemajaSignUp;

const styles = StyleSheet.create({
   imageBackground: {
    flex: 1,
    resizeMode: 'cover',
},
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 20,
    paddingTop: 60,
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
    flex: 1,
    marginTop: 20,
    gap: 16,
    width: 345,
    height: 40,
  },
  loginText: {
    fontSize: 15,
    marginTop: 12,
    color: '#2D3250',
    fontWeight: 'bold',
    textAlign: 'center',
  },  
});