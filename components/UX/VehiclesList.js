import { StyleSheet, FlatList, View, Text } from "react-native";
import { GlobalStyles } from '../../constants/styles';
import { useNavigation } from "@react-navigation/native";
import VehicleCard from "./VehicleCard";

function VehiclesList({vehicles}) {

    const navigation = useNavigation();

    function selectVehicleHandler(id) {
        navigation.navigate('VehicleDetails', {
            vehicleID: id
        })
    }

    if(!vehicles || vehicles.length == 0) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No vehicles available yet!</Text>
            </View>
        )
    }

   return (
       <FlatList style={styles.list} data={vehicles} keyExtractor={(item) => item.id} renderItem={({item}) => <VehicleCard vehicle={item} onSelect={selectVehicleHandler}/>}/>
   )
}

export default VehiclesList;

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