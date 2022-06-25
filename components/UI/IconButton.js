import { StyleSheet, Pressable } from 'react-native';
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
        justifyContent: 'center',
        marginRight: 5
    },
    pressed: {
        opacity: 0.75,
    }
});