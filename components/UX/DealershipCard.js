import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles'

function DealershipCard({dealership, onSelect}) {

    return (
        <Pressable  
            android_ripple={{color: '#ccc'}} 
            style={({pressed}) => [styles.container, pressed && styles.pressed]} 
            onPress={onSelect.bind(this, dealership.id)}
        >
            <Image style={styles.image} source={{uri: dealership.images[0]}}/>
            <View style={styles.details}>
                <Text style={styles.title}>{dealership.name}</Text>
                <Text style={styles.address}>{dealership.address}</Text>
            </View>
        </Pressable>
    )
}

export default DealershipCard;

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        elevation: 2,
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.inputBackground,
        borderRadius: 4
    },
    image: {
        flex: 1,
        height: '100%',
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
    },
    details: {
        flex: 2,
        padding: 12,
        backgroundColor: GlobalStyles.colors.header,
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12
    },
    address: {
        color: GlobalStyles.colors.primaryText
    }
});