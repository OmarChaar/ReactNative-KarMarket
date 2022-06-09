
import { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Button from '../components/UI/Button';
import ButtonIcon from '../components/UI/ButtonIcon';
import { GlobalStyles } from '../constants/styles';


function AddPlace({navigation, route}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new Place',
            headerTitleAlign: 'left',
            headerBackTitleVisible: false,
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Title</Text>
            <TextInput 
                placeholder='New place name...'
                style={styles.input}
            />

            <ButtonIcon icon="camera">Take Image</ButtonIcon>

            <View style={styles.mapButtons}>
                <ButtonIcon icon="location" small={true}>Locate User</ButtonIcon>
                <ButtonIcon icon="map" small={true}>Pick on Map</ButtonIcon>
            </View>

            <Button>Add Place</Button>
        </View>
    )
}

export default AddPlace;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.background
    },
    text: {
        color: GlobalStyles.colors.primaryText,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        backgroundColor: GlobalStyles.colors.inputBackground,
        color: 'black',
        borderRadius: 5,
        paddingHorizontal: 6,
        paddingVertical: 12
    },
    mapButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});