import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import {InputText, Atasan, Bawahan} from '../../../Komponen/Molekul';
import {Button} from '../../../Komponen/Atom';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

const PembinaSignUp: React.FC = () => {
  const navigation = useNavigation();

  const [nama, setNama] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [kolom, setKolom] = useState('');
  const [alamat, setAlamat] = useState('');
  const [nomorHP, setNomorHP] = useState('');
  const [password, setPassword] = useState('');

  const handleDaftar = () => {
    console.log({nama, tanggalLahir, kolom, alamat, nomorHP, password});
    navigation.navigate('Pembina Dashboard');
  };

  const handlegoback = () => {
    navigation.goBack();
  };

  return (
    <View>
      <ImageBackground
        source={require('../../../assets/gambar/bg.png')}
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={['rgba(45, 50, 89, 0.9)', 'rgba(255, 255, 255, 0.8)']}
        style={styles.linear}>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity>
            <View style={{marginTop: 16, alignItems: 'center'}}>
              <Button title="Daftar" onPress={handleDaftar} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Pilih')}>
            <Text style={styles.loginText}>Masuk</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.teks}>Daftar</Text>
          <Text style={styles.subtitle}> Pembina</Text>
        </View>
        <TouchableOpacity style={styles.backButton} onPress={handlegoback}>
          <Image
            source={require('../../../assets/ikon/Panahkembali.png')}
            style={{tintColor: '#fff'}}
          />
        </TouchableOpacity>
        <View style={styles.overlay}>
          <ScrollView
            contentContainerStyle={styles.formContainer}
            showsVerticalScrollIndicator={false}>
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
          </ScrollView>

          <View style={{height: 80}} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default PembinaSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linear: {
    padding: 30,
  },
  buttoncontainer: {
    top: 720,
    zIndex: 10,
  },
  teks: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 35,
    fontFamily: 'SedanSC-Regular',
  },
  subtitle: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'league-spartan-regular',
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
  topOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '15%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 2,
  },
  overlay: {
    marginTop: 10,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  formContainer: {
    paddingBottom: 30,
  },
  loginText: {
    position: 'absolute',
    fontSize: 15,
    color: '#2D3250',
    fontWeight: 'bold',
    top: -30,
    left: 150,
  },
});
