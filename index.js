/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MainProfile from './halaman/profil/main';
import LihatDetail from './halaman/profil/detailkehadiran';
import Statistik from './halaman/statistik';
import Entrance from './halaman/entrance';
import RemajaSignUp from './halaman/signup/remaja';

import RemajaDashboard from './halaman/dashboard/remaja';
import PembinaDashboard from './halaman/dashboard/pembina';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RemajaSignUp);
