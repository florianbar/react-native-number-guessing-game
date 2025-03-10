import { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    const [enteredText, setEnteredText] = useState("");

    return (
        <View style={styles.screen}>
            <TextInput
                placeholder="Enter your name"
                value={enteredText}
                onChangeText={setEnteredText}
            />
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
        // iOS shadow only
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        // end of iOS shadow
        backgroundColor: "#72063c",
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