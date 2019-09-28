import { NativeModules } from 'react-native';
import startBackgroundJob from './startBackgroundJob';
import stopBackgroundJob from './stopBackgroundJob';

const bridge = NativeModules.RNBackgroundJobs;
// const eventEmitter = new NativeEventEmitter(bridge);

export default {
  startBackgroundJob: () => startBackgroundJob(bridge),
  stopBackgroundJob: () => stopBackgroundJob(bridge),
};