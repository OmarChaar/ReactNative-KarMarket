
import { StyleSheet, View, Text } from 'react-native';
import { useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons'; 

import { GlobalStyles } from '../constants/styles';

function Home({navigation, route}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Your Favorite Places',
            headerTitleAlign: 'left',
            headerRight: ({tintColor}) => <Ionicons name="add" size={24} color={tintColor} onPress={() =>  navigation.navigate("AddPlace")} />,
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>No places added yet - start adding some!</Text>
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
        backgroundColor: GlobalStyles.colors.background
    },
    text: {
        color: 'white'
    }
});