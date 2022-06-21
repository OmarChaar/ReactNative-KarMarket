import { StyleSheet, View, Text, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { Ionicons } from '@expo/vector-icons'; 

function ButtonIcon({ children, small, icon, onPress }) {
    return (
        <View style={[styles.container, { width: small === true ? '40%' : '100%'}]}>
            <Pressable 
                onPress={onPress}
                android_ripple={{color: '#ccc'}} 
                style={({pressed}) => pressed && styles.pressed}
            >
                <View style={styles.button}>
                    <Ionicons name={icon} size={24} color={GlobalStyles.colors.primaryText } />
                    <Text style={styles.text}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default ButtonIcon;

const styles = StyleSheet.create({
    container: {
        marginVertical: 12
    },
    button: {
        borderColor: GlobalStyles.colors.primaryText,
        borderWidth: 1,
        borderRadius: 3,
        padding: 6,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        color: GlobalStyles.colors.primaryText,
        marginLeft: 5,
        fontSize: 14
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.inputBackground,
        borderRadius: 4
    }
});