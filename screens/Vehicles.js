
import { StyleSheet, View } from 'react-native';
import { useEffect, useLayoutEffect, useState } from 'react';

import DealershipsList from '../components/UX/DealershipsList';
import IconButton from '../components/UI/IconButton';
import { useIsFocused } from '@react-navigation/native';
import { fetchDealerships, fetchVehicles } from '../util/firebase';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';
import VehiclesList from '../components/UX/VehiclesList';

function Vehicles({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Vehicles',
            headerTitleAlign: 'left',
            headerRight: ({tintColor}) => (
                <IconButton name="search" size={24} color={tintColor} onPress={() =>  {}} />
            ),
        })
    }, [navigation]);

    const isFocused = useIsFocused();

    const [isFetching, setIsFetching] = useState(true);
    const [hasFetched, setHasFetched] = useState(false);
    const [error, setError] = useState();

    const [loadedVehicles, setLoadedVehicles] = useState([]);

    useEffect(() => {
        if(!hasFetched) {
            async function getVehciles() {
                setIsFetching(true);
                try {
                    const vehicles = await fetchVehicles();
                    setHasFetched(true);
                    setLoadedVehicles(vehicles);
                }
                catch(error) {
                    setError('Could not fetch data from database.');
                }
                setIsFetching(false);
            }
    
            if(isFocused) {
                getVehciles();
            }
        }
     
    }, [isFocused]);

    if(error && !isFetching) {
        return <ErrorOverlay message={error}/>
      }
    
      if(isFetching) {
        return <LoadingOverlay />
      }

    return (
        <View style={styles.container}>
            <VehiclesList vehicles={loadedVehicles} />
        </View>
    )
}

export default Vehicles;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    }
});