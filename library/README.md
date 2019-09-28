
# react-native-react-native-background-jobs

## Getting started

`$ npm install react-native-react-native-background-jobs --save`

### Mostly automatic installation
Linking is done automatically.

#### Usage

1. Open up `android/app/src/main/AndroidManifest`
  - Add `<service android:name="kendhia.reactlibrary.BackgroundJobsService" />`.
  - Add the following permissions: 
```
<uses-permission android:name="android.permission.WAKE_LOCK" />
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
```

2. Inside your `index.js` 
	- Register the service the same way you register your app.
	`AppRegistry.registerHeadlessTask('BackgroundJobsEvent', () => BackgroundJobsEvent);`
	- Now, you can define the code you want to be running forever. Ex:
  	```
  	const BackgroundJobsEvent = async () => {
  		console.log("running forever...")
	};
  	```




// TODO:Enrich the Readme
I know this readme file might not be so much understandable. I'll try to update it asap.
  