# Welcome to Marianne's Asteroid App

The Near Earth Object Tracker aka "The Asteroid App"

## Project Description

The Asteroid App allows users to see all the Near Earth Objects on a specific date thanks to Nasa's NEO API.
Near Earth Objects are comets and asteroids that have come within a certain distance to the Earth. Users can pick a date using the DateTimePicker from the react native community. A HTTP fetch request is made to the Nasa NEO API, which returns lots of data about all the near earth objects on that day. Some critical information is displayed about each object for that day, including diameter, how far from the earth will it pass, and if it is potentially hazardous! (A potentially hazardous objects are ones that pass closer to Earth and have a certain absolute magnitude.) There is a bonus summary of the date's asteroids available if users want to learn more.

This app was built using React Native and is run using Expo Go. Expo Go makes running and working on React Native apps possible without having Xcode for iOS or Android Studio.
React Native was a new skill for Marianne, but with a strong basis in React and a love for learning it was a fun process learning React Native! It was educational researching what components are available, learning the importance of props, and discovering the frustrating apsects of React Native (cough environment variables cough).
The UI was designed using the React Native style props and StyleSheets and the asteroid icons were designed by Marianne in a Google Doc! <img src="./assets/images/happyAsteroidIcon.png" width="25" height="25">

## Get started

To run this app locally on your machine:

1. In your terminal run $ git clone https://github.com/mganderson13/asteroid-tracker-app.git
2. Navigate to the project directory with the command $ cd asteroid-tracker-app
3. Next, install the project's dependencies by running $ npm install
4. Before you run the app, in the root directory of the project add at .env file with NASA_API_KEY=<api_key> replacing <api_key> with the provided Nasa NEO api key
5. To open this project in Expo Go run the command $ npx expo start
6. Scan the QR code with the camera of your iOS phone or inside the Expo app on an Android

Happy Asteroid Tracking!
