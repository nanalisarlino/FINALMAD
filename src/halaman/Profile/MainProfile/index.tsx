import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {Atasan, Bawahan} from '../../../komponen/molekul';
import {TeksBiasa, TeksLink} from '../../../komponen/atom';
import {launchImageLibrary} from 'react-native-image-picker';

const MainProfile = () => {
  // State untuk menyimpan URI gambar yang dipilih
  const [imageUri, setImageUri] = useState(null);

  // Fungsi untuk memilih gambar dari galeri
  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo', // Hanya foto yang dipilih
        quality: 0.5, // Mengatur kualitas gambar
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else {
          setImageUri(response.assets[0].uri); // Menyimpan URI gambar
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <Atasan label={'REMAJA BAITEL KEMA'} />
      {/* Tombol untuk memilih gambar */}
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.bgiconplus} />
      </TouchableOpacity>

      {/* Menampilkan gambar yang dipilih jika ada */}
      {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}

      <Text style={styles.tekstambahfoto}> Informasi Pribadi</Text>

      <Image
        source={require('../../../assets/ikon/+.png')} // Ikon plus dari assets
        style={styles.iconplus}
      />

      <TeksBiasa label={'Nama : Arlino Abraham Timotius Nanalis'} top={-130} />
      <TeksBiasa label={'Tanggal Lahir : 27 Oktober 2005'} top={-90} />
      <TeksBiasa label={'Kolom : 18'} top={-50} />
      <TeksBiasa label={'Status : Remaja'} top={-10} />

      <View style={styles.garis} />
      <TeksBiasa label={'8 Kali Hadir'} top={50} left={-50} />
      <TeksLink label={'Lihat Detail'} top={85} left={-43} />

      <Image
        source={require('../../../assets/gambar/qr.png')} // Gambar QR dari assets
        style={styles.qr}
      />

      <TeksLink label={'Download QR'} top={330} left={-50} />
      <TeksBiasa label={'a90BTh'} top={357} left={-40} />

      <Bawahan />
    </View>
  );
};

export default MainProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  garis: {
    height: 3,
    backgroundColor: '#757575',
    width: '65%',
    top: 30,
  },
  bgiconplus: {
    position: 'absolute',
    width: 82,
    height: 84,
    top: -245,
    left: -40,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
  },
  iconplus: {
    position: 'absolute',
    width: 35,
    height: 37,
    top: 225,
  },
  tekstambahfoto: {
    top: -300,
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  qr: {
    position: 'absolute',
    width: 198,
    height: 198,
    top: 590,
    left: 100,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});
