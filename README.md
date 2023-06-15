# TBC Mobile

## Prerequisites

- [Node.js > 16](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 14](https://developer.apple.com/xcode)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Setup

- For installing dependencies run the following command

  - `yarn install` or `npm install`

- Create .env file and copy paste enviorment variable from sample.env

## Run Command

- For IOS:
  - `yarn ios` OR `npm run ios`
- For Android:
  - `yarn android` OR `npm run android`

# Known Issues

- `'value' is unavailable: introduced in iOS 12.0`

  - (source: https://github.com/facebook/react-native/issues/34106) <img width="820" alt="Screenshot 2023-04-15 at 17 02 15" src="https://user-images.githubusercontent.com/5429520/232235804-afeb0cc5-4d3e-4544-86da-e90946cbdda7.png">

  - if you get an error running patch-package then delete the package that's giving the error in node_modules and re-install it with npm install package_name

  - Delete Pods
  - Delete podfile.lock
  - Delete node_modules
  - Delete yarn.lock

  - Run yarn
  - Delete node_modules/react-native (or whichever package is giving the error)
  - Run rpm install react-native (or whichever package is giving the error)
  - Run npx patch-package (this will update the iOS version in the package)
  - Cd iOS & pod install
  - Yarn iOS
# StipeApp
