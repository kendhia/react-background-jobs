
# react-native-react-native-background-jobs

## Getting started

`$ npm install react-native-react-native-background-jobs --save`

### Mostly automatic installation

`$ react-native link react-native-react-native-background-jobs`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import kendhia.reactlibrary.RNReactNativeBackgroundJobsPackage;` to the imports at the top of the file
  - Add `new RNReactNativeBackgroundJobsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-react-native-background-jobs'
  	project(':react-native-react-native-background-jobs').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-react-native-background-jobs/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-react-native-background-jobs')
  	```


## Usage
```javascript
import RNReactNativeBackgroundJobs from 'react-native-react-native-background-jobs';

// TODO: What to do with the module?
RNReactNativeBackgroundJobs;
```
  