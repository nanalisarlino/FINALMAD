/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {MainProfile, LihatDetail} from './halaman/profil';
import Statistik from './halaman/statistik';
import {name as appName} from './app.json';
import Entrance from './halaman/entrance';
import SignIn from './halaman/signin';
import {SignUp, PembinaSignUp, RemajaSignUp} from './halaman/signup';

AppRegistry.registerComponent(appName, () => SignUp);
