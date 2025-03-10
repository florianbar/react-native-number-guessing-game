import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, style }) {
    return (
        <View style={{...styles.button, ...style}}>
            <Pressable 
                android_ripple={{color: 'pink'}}
                style={styles.pressable}
                onPress={() => console.log("Hello there")}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white', 
        borderRadius: 100,
    },
    pressable: {
        width: '100%',
        padding: 16,
    },
    buttonText: {
        color: 'purple',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default PrimaryButton;