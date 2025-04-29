/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MainProfile from './halaman/profil/main';
import LihatDetail from './halaman/profil/detailkehadiran';
import Statistik from './halaman/statistik';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Statistik);
