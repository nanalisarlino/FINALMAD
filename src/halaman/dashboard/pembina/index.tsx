import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { Atasan, Bawahan } from '../../../Komponen/Molekul';

// Static image map for local assets
const iconMap: Record<string, any> = {
  Statistik: require('../../../assets/ikon/Statistik.png'),
  personal: require('../../../assets/ikon/personal.png'),
  jadwal: require('../../../assets/ikon/jadwal.png'),
  logout: require('../../../assets/ikon/logout.png'),
};

const PembinaDashboard: React.FC = () => {
  const menuItems = [
    {
      icon: 'Statistik',
      label: 'Statistik Kehadiran',
      onPress: () => console.log('Statistik Kehadiran'),
    },
    {
      icon: 'personal',
      label: 'Informasi Pribadi',
      onPress: () => console.log('Informasi Pribadi'),
    },
    {
      icon: 'jadwal',
      label: 'Jadwal Ibadah',
      onPress: () => console.log('Jadwal Ibadah'),
    },
    {
      icon: 'logout',
      label: 'Log Out',
      onPress: () => console.log('Log Out'),
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/gambar/bg.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Atasan label="DASHBOARD" subtitle="Pembina" />

          <View style={styles.gridContainer}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={item.onPress}
              >
                <View style={styles.logoContainer}>
                  <Image
                    source={iconMap[item.icon]}
                    style={styles.logo}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.footerContainer}>
            <Bawahan />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PembinaDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(45, 50, 89, 0.5)',
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
    height: '25%', // Only cover top 25%
    backgroundColor: 'rgba(45, 50, 89, 0.5)',
    paddingHorizontal: 20,
    paddingTop: 60,
    justifyContent: 'space-between',
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
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    columnGap: 30,
    rowGap: 20,
    marginTop: 150,
  },  
  menuItem: {
    width: '40%',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'flex-start', // stack from top
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
    flexDirection: 'column', // ensure logo and text are stacked
  },  
  logoContainer: {
    width: 50,
    height: 50,
    marginBottom: 12, // gives space between logo and text
  },  
  logo: {
    width: '100%',
    height: '100%',
  },
  menuLabel: {
    fontSize: 14,
    color: '#2D3250',
    textAlign: 'center',
    fontWeight: 'bold',
    flexWrap: 'wrap',
    maxWidth: '100%',
    paddingVertical: 5,
  },  
  footerContainer: {
    alignItems: 'center',
    marginTop: 70,
  },
});
