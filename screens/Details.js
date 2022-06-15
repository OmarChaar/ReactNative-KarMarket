import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Image, View, Text } from "react-native";
import Button from "../components/UI/Button";
import ButtonIcon from "../components/UI/ButtonIcon";
import { GlobalStyles } from "../constants/styles";
import { fetchItem } from "../util/database";

function Details({route, navigation}) {

    const selectedItemID = route.params.itemID;

    const [selectedItem, setSelectedItem] = useState();
    
    useEffect(() => {
        async function fetchItemHandler() {
            const fetchedItem = await fetchItem(selectedItemID);
            setSelectedItem(fetchedItem);

            navigation.setOptions({
                title: fetchedItem.title
            })
        }

        fetchItemHandler();
    }, [selectedItemID]);

    function showOnMapHandler() {
        navigation.navigate('Map', {
            initialLat: selectedItem.location.lat,
            initialLng: selectedItem.location.lng,
        });
    }

    if(!selectedItem) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading Selected Item...</Text>
            </View>
        )
    }

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedItem.image}}/>
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>{selectedItem.address}</Text>
                </View>
                    <ButtonIcon name="map" onPress={showOnMapHandler}>View on Map</ButtonIcon>
            </View>
        </ScrollView>
    )
}

export default Details;

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
        minHeight: 100
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