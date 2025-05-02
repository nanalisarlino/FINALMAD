/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {MainProfile, LihatDetail} from './halaman/profil';
import Statistik from './halaman/statistik';
import {name as appName} from './app.json';
import JadwalIbadah from './halaman/jadwal';
import Latihan from './test';

AppRegistry.registerComponent(appName, () => Latihan);
