# Find Plasma Online

## About
Hack at home (Brown University Hackathon) Project

Developers:
- Shreevardhan Shah
- Rohitashwa Pareek

Find Plasma Online is a mobile app designed to act as a tool that assists the community to help each other in the crysis that we are facing today due to COVID-19. Compatible donors can share their info and thus help out patients who are in dire need of blood plasma for recovering from the fatal disease.

## Inside the App
Users can open the app and either become a hero(share their details for donating) or ask for a hero's help. The details are matched and compatible donors' and recipients' contacts are shared with each other.

The UI of the app is very simple and intuitive. Users can fill simple forms to get listed as heroes(donors) or recipients. They are matched to nearby people(under development) with similar compatibility.

## Screenshots
<img src="ss1.png" width="300">
<img src="ss2.png" width="300">
<img src="ss3.png" width="300">



## Steps to run project

In the project directory, you can run:

#### `yarn` or `npm install`

This will add the dependencies required to run the project.

#### `yarn start` or `npm start`

This will start the project.

1. Add Fonts to an "assets/fonts" folder in the root of your project.
2. Add rnpm to package.json providing the path to the font files:

```
"rnpm": {
  "assets": [
    "./assets/fonts/"
  ]
}
```

3. Run react-native link

##### This should add your custom fonts in the react native project.
