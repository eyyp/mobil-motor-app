/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MyTabs from './src/navigation/TabNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyTabs);
