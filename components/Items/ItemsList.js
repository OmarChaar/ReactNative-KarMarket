import { StyleSheet, FlatList, View, Text } from "react-native";
import Item from "./Item";
import { GlobalStyles } from '../../constants/styles';

function ItemsList({items}) {

    if(!items || items.length == 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No places added yet - start adding some!</Text>
            </View>
        )
    }

   return (
       <FlatList data={items} keyExtractor={(item) => item.id} renderItem={({item}) => <Item item={item}/>}/>
   )
}

export default ItemsList;

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalStyles.colors.background
    },
    fallbackText: {
        color: 'white'
    }
});