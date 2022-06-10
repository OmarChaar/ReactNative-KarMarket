import { StyleSheet, View, Alert, Image, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';

import { getMapPreview } from '../../util/location';
import ButtonIcon from '../UI/ButtonIcon';
import { GlobalStyles } from '../../constants/styles';

function LocationPicker({onTakeLocation}) {

    const [locationPermission, requestPermission] = useForegroundPermissions();

    const [pickedLocation, setPickedLocation] = useState();


    async function getLocationHandler() {
        const hasPermission = await verifyPermissions();

        if(!hasPermission) {
            return;
        }

        const currentLocation = await getCurrentPositionAsync();

        setPickedLocation({
            latitude: currentLocation.coords.latitude, 
            longitude: currentLocation.coords.longitude
        });

    }

    const navigation = useNavigation();
    const route = useRoute();

    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused && route.params) {
            const mapPickedLocation = {
                lat: route.params.pickedLocation.lat, 
                lng: route.params.pickedLocation.lng
            };
            setPickedLocation({
                latitude: mapPickedLocation.lat, 
                longitude: mapPickedLocation.lng
            });

           
        }
    }, [route, isFocused]);

    useEffect(() => {
        onTakeLocation(pickedLocation);
    }, [pickedLocation, onTakeLocation])

    async function verifyPermissions() {
       if(locationPermission.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();

        return permissionResponse.granted;
    }

    if(locationPermission.status === PermissionStatus.DENIED) {
        Alert.alert('No Location Permissions', 'Please grant permissions for the location.');
        return false;
    }

    return true;
    }



    function pickOnMapHandler() {
        navigation.navigate("Map");
    }


    let mapPreview = <Text>No locaation added yet.</Text>

    if(pickedLocation) {
        mapPreview = <Image style={styles.map} source={{uri: getMapPreview(pickedLocation.latitude, pickedLocation.longitude)}}/>
    }

    return (
        <View>
            <View style={styles.mapContainer}>
                {mapPreview}
            </View>

            <View style={styles.mapButtons}>
                <ButtonIcon icon="location" small={true} onPress={getLocationHandler}>Locate User</ButtonIcon>
                <ButtonIcon icon="map" small={true} onPress={pickOnMapHandler}>Pick on Map</ButtonIcon>
            </View>

        </View>
    )
}

export default LocationPicker;

const styles = StyleSheet.create({
   mapContainer: {
       aspectRatio: 16 / 9,
       width: '100%',
       marginVertical: 12,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: GlobalStyles.colors.header,
       borderRadius: 4
   },
   map: {
       width: '100%',
       height: '100%',
       borderRadius: 4
   },
   mapButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
}
});