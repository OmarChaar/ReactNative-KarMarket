import { StyleSheet, FlatList, View, Text } from "react-native";
import DealershipCard from "./DealershipCard";
import { GlobalStyles } from '../../constants/styles';
import { useNavigation } from "@react-navigation/native";

function DealershipsList({dealerships}) {

    const navigation = useNavigation();

    function selectDealershipHandler(id) {
        navigation.navigate('DealershipDetails', {
            dealershipID: id
        })
    }

    if(!dealerships || dealerships.length == 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No dealerships available yet!</Text>
            </View>
        )
    }

   return (
       <FlatList style={styles.list} data={dealerships} keyExtractor={(item) => item.id} renderItem={({item}) => <DealershipCard dealership={item} onSelect={selectDealershipHandler}/>}/>
   )
}

export default DealershipsList;

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