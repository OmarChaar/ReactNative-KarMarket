import { StyleSheet, FlatList, View, Text } from "react-native";
import Item from "./Item";
import { GlobalStyles } from '../../constants/styles';
import { useNavigation } from "@react-navigation/native";

function ItemsList({items}) {

    const navigation = useNavigation();

    function selectItemHandler(id) {
        navigation.navigate('Details', {
            itemID: id
        })
    }

    if(!items || items.length == 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No places added yet - start adding some!</Text>
            </View>
        )
    }

   return (
       <FlatList style={styles.list} data={items} keyExtractor={(item) => item.id} renderItem={({item}) => <Item item={item} onSelect={selectItemHandler}/>}/>
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
        color: 'white',
    },
    list: {
        width: '100%',
    }
});