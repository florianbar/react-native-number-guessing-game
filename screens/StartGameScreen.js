import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { COLORS } from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(inputText) {
    setEnteredNumber(inputText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "default",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }

    onPickNumber(chosenNumber);
    resetInputHandler();
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Start a New Game!</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={enteredNumber}
            onChangeText={numberInputHandler}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  input: {
    width: 60,
    height: 55,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: COLORS.accent500,
    borderBottomWidth: 2,
    color: COLORS.accent500,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
