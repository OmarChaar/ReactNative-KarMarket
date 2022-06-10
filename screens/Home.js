
import { StyleSheet, View, Text } from 'react-native';
import { useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons'; 

import ItemsList from '../components/Items/ItemsList';
import { GlobalStyles } from '../constants/styles';
import IconButton from '../components/UI/IconButton';


function Home({navigation, route}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Your Favorite Places',
            headerTitleAlign: 'left',
            headerRight: ({tintColor}) => (
                <IconButton name="add" size={24} color={tintColor} onPress={() =>  navigation.navigate("AddPlace")} />
            ),
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <ItemsList />
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