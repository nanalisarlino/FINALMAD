/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MainProfile from './halaman/profil/main';
import LihatDetail from './halaman/profil/detailkehadiran';
import Statistik from './halaman/statistik';
import Entrance from './halaman/entrance';
import SignIn from './halaman/signin';
import SignUp from './halaman/signup/main';
import RemajaSignUp from './halaman/signup/remaja';
import PembinaSignUp from './halaman/signup/pembina';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainProfile);
