/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MainProfile from './src/halaman/profil/main';
import LihatDetail from './src/halaman/profil/detailkehadiran';
import Statistik from './src/halaman/statistik';
import Entrance from './src/halaman/entrance';
import SignIn from './src/halaman/signin';

import RemajaSignUp from './src/halaman/signup/remaja';
import PembinaSignUp from './src/halaman/signup/pembina';
import RemajaDashboard from './src/halaman/dashboard/remaja';
import PembinaDashboard from './src/halaman/dashboard/pembina';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SignIn);
