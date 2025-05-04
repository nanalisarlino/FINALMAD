/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Routing from './src/App';
import {PembinaSignUp, Pilih, RemajaSignUp} from './src/halaman/signup';
import SignIn from './src/halaman/SignIn';
import {MainProfile} from './src/halaman/profil';
AppRegistry.registerComponent(appName, () => MainProfile);
