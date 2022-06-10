import { StyleSheet, View, Alert, Image, Text } from 'react-native';
import { useState } from 'react';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import { useNavigation } from '@react-navigation/native';

import { getMapPreview } from '../../util/location';
import ButtonIcon from '../UI/ButtonIcon';
import { GlobalStyles } from '../../constants/styles';

function LocationPicker() {

    const navigation = useNavigation();

    const [locationPermission, requestPermission] = useForegroundPermissions();

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

    function pickOnMapHandler() {
        navigation.navigate("Map");
    }

    const [pickedLocation, setPickedLocation] = useState();

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