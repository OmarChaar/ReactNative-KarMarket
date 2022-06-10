import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Alert } from 'react-native';
import { useState, useLayoutEffect, useCallback } from "react";
import IconButton from '../components/UI/IconButton';

function Map({navigation}) {

    const [selectedLocation, setSelectedLocation] = useState();

    const region = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    function selectLocationHandler(event) {
        
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;

        setSelectedLocation({ lat: lat, lng: lng });
    }

    /*
        'useCallBack' is a react hook used to avoid infinite loops.
        We use this since it is used as a dependency in 'useLayoutEffect'.
    */
    const savePickedLocationHandler = useCallback(() => {

        if(!selectedLocation) {
            Alert.alert(
                "Pick a location", 
                'Tap on the map first.'
            );
            return;
        }

        navigation.navigate("AddPlace", { 
            pickedLocation: selectedLocation 
        });
    }, [navigation, selectedLocation]);


    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Locate Place',
            headerTitleAlign: 'center',
            headerRight: ({tintColor}) => (
                <IconButton name="save" size={24} color={tintColor} onPress={savePickedLocationHandler} />
            ),
        })
    }, [navigation, savePickedLocationHandler])

    return (
        <MapView 
            style={styles.map} 
            initialRegion={region} 
            onPress={selectLocationHandler}
        >
            {selectedLocation && (
                <Marker 
                    title="Picked Location"
                    coordinate={{
                        latitude: selectedLocation.lat, 
                        longitude: selectedLocation.lng
                    }}
                />
            )}
        </MapView>
    )
}

export default Map;

const styles = StyleSheet.create({
    map: {
      flex: 1,
    },
  });