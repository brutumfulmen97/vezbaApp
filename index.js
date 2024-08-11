/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import DrawerStack from './DrawerStack';
// import TabStack from './TabStack';
import {name as appName} from './app.json';
import AppWrapper from './AppWrapper';

AppRegistry.registerComponent(appName, () => AppWrapper);
