import { View, StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
    elevation: 8, // android only
    // iOS only
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    // end - iOS only
    backgroundColor: COLORS.primary600,
  },
});
