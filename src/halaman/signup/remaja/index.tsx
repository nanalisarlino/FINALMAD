import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, ImageBackground } from 'react-native';
import { InputText, Atasan, Bawahan } from '../../../Komponen/Molekul';
import { Button } from '../../../Komponen/Atom';

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
  };

  const handleBack = () => {
    console.log('Back pressed');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/gambar/bg.png')}
        style={styles.backgroundImage}
      />

      <View style={styles.overlay}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <View style={styles.headerContainer}> 
        <Atasan label="DAFTAR" subtitle="Remaja" />
        </View>

        <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}>
          <InputText label="Nama" value={nama} onChangeText={setNama} placeholder="Masukkan nama lengkap" />
          <InputText label="Tanggal Lahir" value={tanggalLahir} onChangeText={setTanggalLahir} placeholder="Masukkan tanggal lahir" />
          <InputText label="Kolom" value={kolom} onChangeText={setKolom} placeholder="Masukkan kolom" />
          <InputText label="Nama Ayah" value={namaAyah} onChangeText={setNamaAyah} placeholder="Masukkan nama ayah" />
          <InputText label="Nama Ibu" value={namaIbu} onChangeText={setNamaIbu} placeholder="Masukkan nama ibu" />
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

        <View style={{ height: 80 }} />

      <View style={styles.footerContainer}> 
        <Bawahan />
      </View> 
      </View>
    </View>
  );
};

export default RemajaSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    backgroundColor: 'rgba(255,255,255,0.92)',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  topOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '15%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 2,
  },
  headerContainer: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
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
  footerContainer: {
    position: 'absolute',
    top: 280,
    width: '100%',
    alignItems: 'center',
  },
});