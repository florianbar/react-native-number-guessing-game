import { Text, StyleSheet } from "react-native";

import { COLORS } from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: COLORS.accent500,
    padding: 12,
  },
});
