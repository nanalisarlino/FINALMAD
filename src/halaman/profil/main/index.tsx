import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {Atasan, Bawahan} from '../../../Komponen/Molekul';
import {TeksBiasa, TeksLink} from '../../../Komponen/Atom';
import {launchImageLibrary} from 'react-native-image-picker';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainProfile = () => {
  const navigation = useNavigation();
  const handlegoback = () => {
    navigation.goBack();
  };

  const route = useRoute();
  const { nama, tanggalLahir, kolom, status } = route.params;
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else {
          setImageUri(response.assets[0].uri);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image source={require('../../../assets/ikon/Panahkembali.png')} />
      </TouchableOpacity>
      <Atasan label={'REMAJA BAITEL KEMA'} />
      {/* Tombol untuk memilih gambar */}
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.bgiconplus} />
      </TouchableOpacity>

      {/* Menampilkan gambar yang dipilih jika ada */}
      {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}

      <Text style={styles.tekstambahfoto}> Informasi Pribadi</Text>

      <Image
        source={require('../../../assets/ikon/+.png')}
        style={styles.iconplus}
      />

      <TeksBiasa label={'Nama : Arlino Abraham Timotius Nanalis'} top={-130} />
      <TeksBiasa label={'Tanggal Lahir : 27 Oktober 2005'} top={-90} />
      <TeksBiasa label={'Kolom : 18'} top={-50} />
      <TeksBiasa label={'Status : Remaja'} top={-10} />

      <View style={styles.garis} />
      <TeksBiasa label={'8 Kali Hadir'} top={50} left={-50} />
      <TeksLink
        label={'Lihat Detail'}
        top={85}
        left={-43}
        onPress={() =>
          navigation.navigate('Detail Kehadiran', {nama, imageUri,})
        }
      />

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
  backButton: {
    position: 'absolute',
    width: 10,
    height: 50,
    top: 10,
    left: 10,
    zIndex: 10,
  },
  image0: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: -430,
    left: -190,
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
