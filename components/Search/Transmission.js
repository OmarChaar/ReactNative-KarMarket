import { StyleSheet, View, FlatList } from "react-native";

import ModalSeach from "./UX/ModalSeach";
import LabelCheckbox from "./UX/LabelCheckbox";

function Transmission({modalVisible, onCancel, onOk}) {

    const TransmissionOptions = [
        {id: 0, label: 'Automatic', selected: false},
        {id: 1, label: 'CVT', selected: false},
        {id: 2, label: 'Manual', selected: false},
        {id: 3, label: 'Semi-Automatic', selected: false},
    ]
    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Transmission"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                <FlatList
                    data={TransmissionOptions}
                    scrollEnabled={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => 
                        <LabelCheckbox 
                            isChecked={item.selected} 
                            label={item.label}
                        />
                    }
                />
            </View>
        </ModalSeach>
    )
}

export default Transmission;

const styles = StyleSheet.create({
    container: {
       padding: 12
    },
})