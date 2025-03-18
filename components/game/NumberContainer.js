import { Text, View, StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontFamily: "open-sans-bold",
    color: COLORS.accent500,
    fontSize: 36,
  },
});
