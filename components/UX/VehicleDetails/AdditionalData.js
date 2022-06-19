import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import SingleData from "./SingleData";

function AdditionalData({vehicle}) {

    const specs = vehicle.specs;

    return (
        <View style={styles.container}>
             <Text style={styles.title}>Additional Features</Text>
            <View style={styles.subcontainer}>

               {specs["navigation_system"] && <SingleData>Navigation System</SingleData>}
               {specs["airbag"] && <SingleData>Airbag</SingleData>}
               {specs["alarm"] && <SingleData>Alarm</SingleData>}
               {specs["dvd_player"] && <SingleData>DVD Player</SingleData>}
            </View>
        </View>
    )
}

export default AdditionalData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 12
    },
    title: {
        fontSize: GlobalStyles.fontSize.medium,
        fontWeight: '300'
    },
    subcontainer: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    }
})