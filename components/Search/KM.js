import { StyleSheet, Text, View } from "react-native";
import LabelCheckbox from "./UX/LabelCheckbox";

import ModalSeach from "./UX/ModalSeach";
import RangePicker from "./UX/RangePicker";

function KM({modalVisible, onCancel, onOk}) {

    const KMMinimum = [
        {label: '0 KM', value: 0}, 
        {label: '5,000 KM', value: 5000}, 
        {label: '10,000 KM', value: 10000}, 
        {label: '20,000 KM', value: 20000}, 
        {label: '30,000 KM', value: 30000}, 
        {label: '40,000 KM', value: 40000}, 
        {label: '50,000 KM', value: 50000}, 
        {label: '60,000 KM', value: 60000}, 
        {label: '70,000 KM', value: 70000}, 
        {label: '80,000 KM', value: 80000}, 
        {label: '90,000 KM', value: 90000}, 
        {label: '100,000 KM', value: 100000}
    ]

    const KMMaximum = [
        {label: '5,000 KM', value: 5000}, 
        {label: '10,000 KM', value: 10000}, 
        {label: '20,000 KM', value: 20000}, 
        {label: '30,000 KM', value: 30000}, 
        {label: '40,000 KM', value: 40000}, 
        {label: '50,000 KM', value: 50000}, 
        {label: '60,000 KM', value: 60000}, 
        {label: '70,000 KM', value: 70000}, 
        {label: '80,000 KM', value: 80000}, 
        {label: '90,000 KM', value: 90000}, 
        {label: '100,000 KM', value: 100000},
        {label: '500,000 KM', value: 500000},
        {label: '1,000,000 KM', value: 1000000}
    ]

    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="KM"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                <LabelCheckbox label="All"/>
                <LabelCheckbox label="New"/>
                <LabelCheckbox label="Used"/>

                <RangePicker
                    label="KM Minimum"
                    data={KMMinimum}
                    placeholder="Select Minimum"
                />

                <RangePicker
                    label="KM Maximum"
                    data={KMMaximum}
                    placeholder="Select Maximum"
                />
                
            </View>
        </ModalSeach>
    )
}

export default KM;

const styles = StyleSheet.create({
    container: {
    },
})