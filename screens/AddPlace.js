
import { useCallback, useLayoutEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput } from 'react-native';
import Button from '../components/UI/Button';
import ImagePicker from '../components/Items/ImagePicker';
import { GlobalStyles } from '../constants/styles';
import LocationPicker from '../components/Items/LocationPicker';


function AddPlace({navigation}) {
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
    }, [navigation]);

    const [takenImage, setTakenImage] = useState();

    function takeImageHandler(image) {
        setTakenImage(image);
    }

    const [takenLocation, setTakenLocation] = useState();

    const takeLocationHandler = useCallback((location) => {
        setTakenLocation(location);
    }, [])

    function saveHandler() {
        console.log(enteredTitle, takenImage, takenLocation);
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
    buttonContainer: {
        marginBottom: 24
    }
});