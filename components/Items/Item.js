import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles'

function Item({item, onSelect}) {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{uri: item.image}}/>
            <View>
                <Text>{item.title}</Text>
                <Text>{item.address}</Text>
            </View>
        </Pressable>
    )
}

export default Item;

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