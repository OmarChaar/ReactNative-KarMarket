
import { StyleSheet, View } from 'react-native';
import { useEffect, useLayoutEffect, useState } from 'react';

import ItemsList from '../components/Items/ItemsList';
import IconButton from '../components/UI/IconButton';
import { useIsFocused } from '@react-navigation/native';
import { fetch } from '../util/database';
import { fetchDealerships } from '../util/firebase';

function Home({navigation, route}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Your Favorite Places',
            headerTitleAlign: 'left',
            headerRight: ({tintColor}) => (
                <IconButton name="add" size={24} color={tintColor} onPress={() =>  navigation.navigate("AddPlace")} />
            ),
        })
    }, [navigation]);

    const isFocused = useIsFocused();

    const [loadedItems, setLoadedItems] = useState([]);

    useEffect(() => {

        async function getDealerships() {
            const dealerships = await fetchDealerships();
            console.log("dealerships", dealerships);
        }
        
        getDealerships();

        async function loadItems() {
            const items = await fetch();
            setLoadedItems(items);
        }
        if(isFocused) {
            loadItems();
        }
    }, [isFocused])

    return (
        <View style={styles.container}>
            <ItemsList items={loadedItems} />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    }
});