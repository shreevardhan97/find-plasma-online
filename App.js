import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import BecomeAHero from "./src/screens/BecomeAHero";
import FindAHero from "./src/screens/FindAHero";
import Mainscreen from "./src/screens/Mainscreen";
import Onboard1 from "./src/screens/Onboard1";
import Onboard2 from "./src/screens/Onboard2";
import Onboard3 from "./src/screens/Onboard3";
import Onboard4 from "./src/screens/Onboard4";
import SplashScreen from "./src/screens/SplashScreen";
import WhyBecomeAHero from "./src/screens/WhyBecomeAHero";

const DrawerNavigation = createDrawerNavigator({
  BecomeAHero: BecomeAHero,
  FindAHero: FindAHero,
  Mainscreen: Mainscreen,
  Onboard1: Onboard1,
  Onboard2: Onboard2,
  Onboard3: Onboard3,
  Onboard4: Onboard4,
  SplashScreen: SplashScreen,
  WhyBecomeAHero: WhyBecomeAHero
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    BecomeAHero: BecomeAHero,
    FindAHero: FindAHero,
    Mainscreen: Mainscreen,
    Onboard1: Onboard1,
    Onboard2: Onboard2,
    Onboard3: Onboard3,
    Onboard4: Onboard4,
    SplashScreen: SplashScreen,
    WhyBecomeAHero: WhyBecomeAHero
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-500": require("./src/assets/fonts/roboto-500.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-900": require("./src/assets/fonts/roboto-900.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
