import { StyleSheet, View, Text, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Button({ children, small, onPress }) {
    return (
        <View style={[styles.container, { width: small === true ? '40%' : '100%'}]}>
            <Pressable 
                onPress={onPress}
                android_ripple={{color: '#ccc'}} 
                style={({pressed}) => pressed && styles.pressed}
            >
                <View style={styles.button}>
                    <Text style={styles.text}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    container: {
        marginVertical: 12
    },
    button: {
        backgroundColor: GlobalStyles.colors.button,
        borderRadius: 3,
        padding: 6,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        color: GlobalStyles.colors.buttonText,
        marginLeft: 5,
        fontSize: GlobalStyles.fontSize.medium
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.inputBackground,
        borderRadius: 4
    }
});