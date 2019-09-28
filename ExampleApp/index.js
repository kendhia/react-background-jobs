/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const BackgroundJobsEvent = async () => {
  debugger
  console.log("running now...")
};

AppRegistry.registerHeadlessTask('BackgroundJobsEvent', () => BackgroundJobsEvent);

AppRegistry.registerComponent(appName, () => App);
