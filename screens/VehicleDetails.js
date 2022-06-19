import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Image, View, Text, Dimensions } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { fetchVehicle } from "../util/firebase";
import IconButton from '../components/UI/IconButton';
import { formatPrice } from "../util/format";

function VehicleDetails({route, navigation}) {

    const selectedVehicleID = route.params.vehicleID;

    const [selectedVehicle, setSelectedVehicle] = useState();
    
    useEffect(() => {
        async function fetchDealershipHandler() {
            const fetchedItem = await fetchVehicle(selectedVehicleID);

            setSelectedVehicle(fetchedItem);

            navigation.setOptions({
                title: `${fetchedItem.brand} ${fetchedItem.model}`,
                headerRight: ({tintColor}) => (
                    <IconButton name="heart-outline" size={24} color={tintColor} onPress={() =>  {}} />
                ),
            })
        }

        fetchDealershipHandler();
    }, [selectedVehicleID]);

    if(!selectedVehicle) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading Selected Vehicle...</Text>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri: selectedVehicle.images.back}}/>
            <View style={styles.detailsContainer}>
                <View style={styles.vehicleName}>
                    <Text style={styles.brand}>{selectedVehicle.brand}&nbsp;</Text>
                    <Text style={styles.model}>{selectedVehicle.model}</Text>
                </View>
                <Text style={styles.version}>{selectedVehicle.version}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>R$ {formatPrice(selectedVehicle.price)}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default VehicleDetails;

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 18,
        color: 'white'
    },
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height / 3,
    },
    detailsContainer: {
        padding: 12
    },
    vehicleName: {
        flexDirection: 'row',
    },
    brand: {
        fontSize: GlobalStyles.fontSize.large,
        fontWeight: 'bold'
    },
    model: {
        color: 'green',
        fontSize: GlobalStyles.fontSize.large,
        fontWeight: 'bold'
    },
    version: {
        fontSize: GlobalStyles.fontSize.medium
    },
    priceContainer: {
        marginVertical: 12
    },
    price: {
        fontSize: GlobalStyles.fontSize.xlarge,
        color: 'red',
        fontWeight: 'bold'
    }
})