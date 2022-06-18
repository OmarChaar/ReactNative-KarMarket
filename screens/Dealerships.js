
import { StyleSheet, View } from 'react-native';
import { useEffect, useLayoutEffect, useState } from 'react';

import DealershipsList from '../components/UX/DealershipsList';
import IconButton from '../components/UI/IconButton';
import { useIsFocused } from '@react-navigation/native';
import { fetchDealerships } from '../util/firebase';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function Dealerships({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Dealerships',
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

    const [loadedDealerships, setLoadedDealerships] = useState([]);

    useEffect(() => {
        if(!hasFetched) {
            async function getDealerships() {
                setIsFetching(true);
                try {
                    const dealerships = await fetchDealerships();
                    setHasFetched(true);
                    setLoadedDealerships(dealerships);
                    console.log("dealerships", dealerships);
                }
                catch(error) {
                    setError('Could not fetch data from database.');
                }
                setIsFetching(false);
            }
    
            if(isFocused) {
                getDealerships();
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
            <DealershipsList dealerships={loadedDealerships} />
        </View>
    )
}

export default Dealerships;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    }
});