import { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    const [enteredText, setEnteredText] = useState("");

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={enteredText}
                    onChangeText={setEnteredText}
                    maxLength={2}r
                    keyboardType="number-pad"
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton style={styles.button}>Reset</PrimaryButton>
                <PrimaryButton style={styles.button}>Confirm</PrimaryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 100,
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
        backgroundColor: "#72063c",
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
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
    },
    button: {
        flex: 1,
    },
});

export default StartGameScreen;