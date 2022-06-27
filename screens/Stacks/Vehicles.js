
import { StyleSheet, View } from 'react-native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 

import Search from '../../components/UI/Search';
import { fetchDealershipVehicles, fetchVehicles } from '../../util/firebase';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import ErrorOverlay from '../../components/UI/ErrorOverlay';
import VehiclesList from '../../components/UX/VehiclesList';
import { GlobalStyles } from '../../constants/styles';
import IconButton from '../../components/UI/IconButton';


function Vehicles({navigation, route}) {

    const dealshipID = route.params ? route.params.id : null;

    const [isSearching, setIsSearching] = useState(false);

    useLayoutEffect(() => {
        function isSearchingHandler() {
            setIsSearching(!isSearching);
            // CLEAR SEARCH WHEN CLOSED
        }

        navigation.setOptions({
            title: route.params ? route.params.dealership : 'Vehicles',
            headerTitleAlign: 'left',
            headerRight: ({tintColor}) => (
                <MaterialIcons 
                    name={!isSearching ? "search" : "search-off"} 
                    size={24} 
                    color={!isSearching ? tintColor : GlobalStyles.colors.dangerText} 
                    onPress={isSearchingHandler} 
                    style={{  padding: 8, marginRight: 5}}
                />
            ),
        })
    }, [navigation, isSearching]);

    const isFocused = useIsFocused();

    const [isFetching, setIsFetching] = useState(true);
    const [hasFetched, setHasFetched] = useState(false);
    const [error, setError] = useState();

    const [loadedVehicles, setLoadedVehicles] = useState([]);
    const [loadedVehiclesBackup, setLoadedVehiclesBackup] = useState([]);

    useEffect(() => {
        if(!hasFetched || dealshipID) {
            async function getVehciles() {
                setIsFetching(true);
                try {
                    const vehicles = dealshipID ? await fetchDealershipVehicles(dealshipID) : await fetchVehicles();

                    setHasFetched(true);
                    setLoadedVehicles(vehicles);
                    setLoadedVehiclesBackup(vehicles);
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
     
    }, [isFocused, dealshipID]);

    function onSearchVehicles(text) {

        if(text.length == 0) {
            setLoadedVehicles(loadedVehiclesBackup);
        }
        else {
            const temp = loadedVehiclesBackup;
            const searched = temp.filter(function (vehicle) {
                return (
                    vehicle.brand.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
                    vehicle.model.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
                    vehicle.version.toLowerCase().indexOf(text.toLowerCase()) > -1
                )
            });
            setLoadedVehicles(searched);
        }
    }

    function onClearVehicles() {
        setLoadedVehicles(loadedVehiclesBackup);
    }

    if(error && !isFetching) {
        return <ErrorOverlay message={error}/>
    }
    
    if(isFetching) {
        return <LoadingOverlay />
    }

    function filterHandler() {

    }

    function sortHandler() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <IconButton 
                    name="options-outline" 
                    size={28} 
                    style={[styles.icons, styles.filter]}
                    onPress={filterHandler}
                />

                <IconButton 
                    name="filter" 
                    size={28} 
                    style={styles.icons}
                    onPress={sortHandler}
                />
            </View>

            {isSearching && 
                <Search placeholder="Search Vehicles" onChangeText={onSearchVehicles} onClearPress={onClearVehicles}/>
            }

            <VehiclesList vehicles={loadedVehicles} />
        </View>
    )
}

export default Vehicles;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterContainer: {
        flexDirection: 'row',
        marginBottom: 12,
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    icons: {
        padding: 0,
    },
    filter: {
        marginRight: 15
    }
});