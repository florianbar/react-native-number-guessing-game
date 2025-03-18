import { useState, useMemo } from "react";
import {
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { COLORS } from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function pickedNumberHandler(chosenNumber) {
    setUserNumber(chosenNumber);
  }

  const screen = useMemo(() => {
    if (userNumber) {
      return <GameScreen userChoice={userNumber} />;
    }
    return <StartGameScreen onPickNumber={pickedNumberHandler} />;
  }, [userNumber]);

  return (
    <>
      <LinearGradient
        colors={[COLORS.primary700, COLORS.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      <StatusBar barStyle="light-content" />
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
