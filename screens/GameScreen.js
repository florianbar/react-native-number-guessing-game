import { Text, View, StyleSheet } from "react-native";

import Title from "../components/title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Player's Guess</Title>
      <Text>Guess</Text>
      <View>
        <Text>Higher or lower</Text>
        <Text>+ -</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
