import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Image, View, Text } from "react-native";
import Button from "../components/UI/Button";
import ButtonIcon from "../components/UI/ButtonIcon";
import { GlobalStyles } from "../constants/styles";
import { fetchItem } from "../util/database";
import { fetchDealership } from "../util/firebase";

function DealershipDetails({route, navigation}) {

    const selectedDealershipID = route.params.dealershipID;

    const [selectedDealership, setSelectedDealership] = useState();
    
    useEffect(() => {
        async function fetchDealershipHandler() {
            const fetchedItem = await fetchDealership(selectedDealershipID);

            setSelectedDealership(fetchedItem);

            navigation.setOptions({
                title: fetchedItem.name
            })
        }

        fetchDealershipHandler();
    }, [selectedDealershipID]);

    function showOnMapHandler() {
        navigation.navigate('Map', {
            initialLat: selectedDealership.location.lat,
            initialLng: selectedDealership.location.lng,
        });
    }

    if(!selectedDealership) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading Selected Dealership...</Text>
            </View>
        )
    }

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedDealership.images[0]}}/>
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>{selectedDealership.address}</Text>
                </View>
                    <ButtonIcon name="map" onPress={showOnMapHandler}>View on Map</ButtonIcon>
            </View>
        </ScrollView>
    )
}

export default DealershipDetails;

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
        height: '35%',
        minHeight: 200
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