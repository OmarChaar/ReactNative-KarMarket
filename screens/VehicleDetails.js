import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Image, View, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { fetchVehicle } from "../util/firebase";
import IconButton from '../components/UI/IconButton';

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
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedVehicle.images.back}}/>
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>{selectedVehicle.model}</Text>
                    <Text style={styles.address}>{selectedVehicle.year}</Text>
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
    image: {
        width: '100%',
        height: 200,
    },
    locationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
    },
    addressContainer: {
        padding: 20
    },
    address: {
        color: GlobalStyles.colors.primaryText,
        textAlign: 'center'
    }
})