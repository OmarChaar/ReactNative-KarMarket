import { StyleSheet, View, Text, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { Ionicons } from '@expo/vector-icons'; 

function IconButton({ name, size, color, onPress }) {
    return (
        <Pressable 
            onPress={onPress}
            android_ripple={{color: '#ccc'}} 
            style={({pressed}) => [styles.button, pressed && styles.pressed]}
        >
           <Ionicons name={name} size={size} color={color} />
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    button: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pressed: {
        opacity: 0.75,
    }
});