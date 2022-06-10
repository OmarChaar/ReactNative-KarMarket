import { StyleSheet, View, Alert, Image, Text } from 'react-native';
import { useState } from 'react';

import ButtonIcon from './ButtonIcon';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { GlobalStyles } from '../../constants/styles';

function ImagePicker() {
    /*
        Here we set/check Camera permission for IOS
    */
    const [cameraPermissions, requestPermission] = useCameraPermissions();

    async function verifyPermissions() {
        if(cameraPermissions.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if(cameraPermissions.status === PermissionStatus.DENIED) {
            Alert.alert('No Camera Permissions', 'Please grant permissions for the camera.');
            return false;
        }

        return true;
    }

    const [pickedImage, setPickedImage] = useState('');

    async function takeImageHandler() {
        const hasPermission = await verifyPermissions();

        // If no permission granted, return; to leave the function.
        if(!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
        setPickedImage(image.uri);
        // console.log(image);
    }

    let imagePreview = <Text>No image taken yet.</Text>

    if(pickedImage) {
        imagePreview = <Image style={styles.image} source={{uri: pickedImage}}/>
    }

    return (
        <View>
            <View style={styles.imageContainer}>
                {imagePreview}
            </View>

            <ButtonIcon icon="camera" onPress={takeImageHandler}>Take Image</ButtonIcon>

        </View>
    )
}

export default ImagePicker;

const styles = StyleSheet.create({
   imageContainer: {
       aspectRatio: 16 / 9,
       width: '100%',
       marginVertical: 12,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: GlobalStyles.colors.header
   },
   image: {
       width: '100%',
       height: '100%'
   }
});