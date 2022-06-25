import { useState } from 'react';
import { StyleSheet, View, Text, Image, Pressable, Dimensions } from 'react-native';
import { GlobalStyles } from '../../constants/styles'
import { formatPrice } from '../../util/format';

function VehicleCard({vehicle, onSelect}) {

    const [onLoadImage, setLoadImage] = useState(false);

    const imageLoading = () => {
        setLoadImage(true);
    }

    return (
        <Pressable  
            android_ripple={{color: '#ccc'}} 
            style={({pressed}) => [styles.container, pressed && styles.pressed]} 
            onPress={onSelect.bind(this, vehicle.id)}
        >
            <Image 
                style={styles.image} 
                source={onLoadImage ? {uri: vehicle.images.front} : require('../../assets/imgs/default-loading-image.png')}
                onLoad={() => imageLoading()}
            />
            <View style={styles.details}>
                <View style={styles.topDetails}>
                    <View style={styles.vehicleName}>
                        <Text style={styles.brand}>{vehicle.brand}&nbsp;</Text>
                        <Text style={styles.model}>{vehicle.model}</Text>
                    </View>
                    <Text style={styles.price}>R$ {formatPrice(vehicle.price)}</Text>
                </View>
                <View style={styles.bottomDetails}>
                    <Text style={styles.detailsText}>{vehicle.year}</Text>
                    <Text style={styles.detailsText}>{vehicle.kilometerage.toLocaleString()} KM</Text>
                    <Text style={styles.detailsText}>{vehicle.color}</Text>
                </View>
             
            </View>
        </Pressable>
    )
}

export default VehicleCard;

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
        // flexDirection: 'row',
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
        height: Dimensions.get('window').height / 4,
        width: '100%',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    details: {
        width: '100%',
        padding: 12,
        backgroundColor: GlobalStyles.colors.header,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
    },
    topDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    price: {
        fontSize: GlobalStyles.fontSize.medium,
        color: GlobalStyles.colors.price,
        fontWeight: 'bold'
    },
    vehicleName: {
        flexDirection: 'row',
        marginBottom: 12
    },
    brand: {
        fontSize: GlobalStyles.fontSize.medium,
        fontWeight: 'bold'
    },
    model: {
        color: GlobalStyles.colors.primaryText,
        fontSize: GlobalStyles.fontSize.medium,
        fontWeight: 'bold'
    },
    bottomDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailsText: {
        color: GlobalStyles.colors.primaryText,
        fontSize: GlobalStyles.fontSize.small,
        fontWeight: '500'
    }
});