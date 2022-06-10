
import { useLayoutEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput } from 'react-native';
import Button from '../components/UI/Button';
import ButtonIcon from '../components/UI/ButtonIcon';
import ImagePicker from '../components/Items/ImagePicker';
import { GlobalStyles } from '../constants/styles';
import LocationPicker from '../components/Items/LocationPicker';


function AddPlace({navigation, route}) {

    const [enteredTitle, setEnteredTitle] = useState('');

    function changeTitleHander(enteredText) {
        setEnteredTitle(enteredText);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new Place',
            headerTitleAlign: 'left',
            headerBackTitleVisible: false,
        })
    }, [navigation])

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>Title</Text>
                <TextInput 
                    placeholder='New place name...'
                    style={styles.input}
                    onChangeText={changeTitleHander} 
                    value={enteredTitle}
                />

                <ImagePicker/>

                <LocationPicker/>

                <Button>Add Place</Button>
            </View>
        </ScrollView>
    )
}

export default AddPlace;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
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

});