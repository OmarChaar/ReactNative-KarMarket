
import { useCallback, useLayoutEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput } from 'react-native';
import Button from '../UI/Button';
import ImagePicker from './ImagePicker';
import { GlobalStyles } from '../../constants/styles';
import LocationPicker from './LocationPicker';
// import Item from '../../models/item'

function AddPlaceForm({onCreate}) {
    const [enteredTitle, setEnteredTitle] = useState('');

    function changeTitleHander(enteredText) {
        setEnteredTitle(enteredText);
    }

    const [takenImage, setTakenImage] = useState();

    function takeImageHandler(image) {
        setTakenImage(image);
    }

    const [takenLocation, setTakenLocation] = useState();

    const takeLocationHandler = useCallback((location) => {
        setTakenLocation(location);
    }, [])

    function saveHandler() {
        // const itemData = new Item(enteredTitle, takenImage, takenLocation);
        onCreate(itemData);
    }

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

                <ImagePicker onTakeImage={takeImageHandler}/>

                <LocationPicker onTakeLocation={takeLocationHandler}/>

                <View style={styles.buttonContainer}>
                    <Button onPress={saveHandler}>Add Place</Button>
                </View>
            
            </View>
        </ScrollView>
    )
}

export default AddPlaceForm;

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
    buttonContainer: {
        marginBottom: 24
    }
});