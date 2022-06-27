import { StyleSheet, Text, View } from "react-native";
import LabelCheckbox from "./UX/LabelCheckbox";

import ModalSeach from "./UX/ModalSeach";
import RangePicker from "./UX/RangePicker";

function KM({modalVisible, onCancel, onOk}) {

    const KMMinimum = [
        0, 5000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000
    ]

    const KMMaximum = [
        5000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000
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