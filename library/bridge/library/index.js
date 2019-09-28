import bridgeOperations from '../bridgeOperations';
import startBackgroundJob from './startBackgroundJob';
import stopBackgroundJob from './stopBackgroundJob';

export default {
  startBackgroundJob: () => startBackgroundJob(bridgeOperations),
  stopBackgroundJob: () => stopBackgroundJob(bridgeOperations),
  ...bridgeOperations,
};