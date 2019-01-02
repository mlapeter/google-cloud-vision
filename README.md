# google-cloud-vision
Google Cloud Vision in a React Native app using Expo


To run this app, you'll need to create a `config` folder at the root of the app and add a file in it called `environment.js` with the following info below. You'll need to create a free firebase project and also a free google cloud vision account and replace the example info below. For full details and a tutorial, view the blog post: [Using Google Cloud Vision With Expo and React Native](https://medium.com/@mlapeter/using-google-cloud-vision-with-expo-and-react-native-7d18991da1ddm)

```
var environments = {
  staging: {
    FIREBASE_API_KEY: "blabla",
    FIREBASE_AUTH_DOMAIN: "blabla.firebaseapp.com",
    FIREBASE_DATABASE_URL: "https://blabla.firebaseio.com/",
    FIREBASE_PROJECT_ID: "blabla",
    FIREBASE_STORAGE_BUCKET: "blabla.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "blabla",
    GOOGLE_CLOUD_VISION_API_KEY: "blabla"
  },
  production: {
    // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
  }
};
function getReleaseChannel() {
  let releaseChannel = Expo.Constants.manifest.releaseChannel;
  if (releaseChannel === undefined) {
    return "staging";
  } else if (releaseChannel === "staging") {
    return "staging";
  } else {
    return "staging";
  }
}
function getEnvironment(env) {
  console.log("Release Channel: ", getReleaseChannel());
  return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());
export default Environment;
```
