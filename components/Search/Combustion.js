import { StyleSheet, View, FlatList } from "react-native";

import ModalSeach from "./UX/ModalSeach";
import LabelCheckbox from "./UX/LabelCheckbox";

function Combustion({modalVisible, onCancel, onOk}) {

    const CombustionOptions = [
        {id: 0, label: 'Diesel', selected: false},
        {id: 1, label: 'Gasoline', selected: false},
        {id: 2, label: 'Gasoline & Electric', selected: false},
        {id: 3, label: 'Gasoline & Natural Gas', selected: false},
        {id: 4, label: 'Gasoline & Alcohol', selected: false},
        {id: 5, label: 'Alcohol', selected: false},
        {id: 6, label: 'Electric', selected: false},
    ]

    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Combustion"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                <FlatList
                    data={CombustionOptions}
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

export default Combustion;

const styles = StyleSheet.create({
    container: {
       padding: 12
    },
})