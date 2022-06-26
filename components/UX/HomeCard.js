import { StyleSheet, View, Text, Pressable, Dimensions, ImageBackground } from 'react-native';
import { GlobalStyles } from '../../constants/styles';


function HomeCard({label, source, onPress}) {
    return (
        <View style={styles.container}>
            <Pressable 
                onPress={onPress}
                android_ripple={{color: '#ccc'}} 
                style={({pressed}) => [styles.button, pressed && styles.pressed]}
            >
                <ImageBackground
                    source={source}//{type == 'dealership' ? require('../../assets/imgs/dealerships.jpeg') : require('../../assets/imgs/cars.jpeg')}
                    style={styles.imageBackground}
                > 
                </ImageBackground>
                
                  
                <View style={styles.labelContainer}>
                        <Text style={styles.label}>
                            {label}
                        </Text>
                    </View>
            </Pressable>
            
        </View>
    )
}

export default HomeCard;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height / 5,
        width: '50%',
        padding: 12,
        borderRadius: 40
    },
    button: {
        flex: 1,
        borderRadius: 40
    },
    imageBackground: {
        // flex: 1,
        borderRadius: 40,
        width: '100%',
        height: '100%',
        resizeMode: 'center'
        // opacity: 0.5
    },  
    labelContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    label: {
        fontSize: GlobalStyles.fontSize.xxlarge,
        fontWeight: 'bold',
        marginBottom: 24,
        color: GlobalStyles.colors.headerText,
        textTransform: 'uppercase'
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.inputBackground,
        borderRadius: 4,
    }
});
