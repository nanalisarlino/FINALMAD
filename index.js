/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import PembinaDashboard from './src/halaman/dashboard/pembina';
import Routing from './src/App';
AppRegistry.registerComponent(appName, () => Routing);
