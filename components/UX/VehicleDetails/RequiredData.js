import { StyleSheet, View, } from "react-native";
import LabeledData from "./LabeledData";

function RequiredData({vehicle}) {
    return (
        <View style={styles.container}>
            <LabeledData label="Year">{vehicle.year}</LabeledData>
            <LabeledData label="KM">{vehicle.kilometerage.toLocaleString()}</LabeledData>
            <LabeledData label="Color">{vehicle.color}</LabeledData>
            <LabeledData label="Transmission">{vehicle.transmission}</LabeledData>
            <LabeledData label="Combustion">{vehicle.combustion}</LabeledData>
            <LabeledData label="Armored">{vehicle.armored ? 'Yes' : 'No'}</LabeledData>
            <LabeledData label="Doors">{vehicle.doors}</LabeledData>
            <LabeledData label="Final Licence Plate">{vehicle.finalLicensePlate}</LabeledData>
        </View>
    )
}

export default RequiredData;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    }
})