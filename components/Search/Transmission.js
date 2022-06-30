import { StyleSheet, View, FlatList } from "react-native";

import ModalSeach from "./UX/ModalSeach";
import LabelCheckbox from "./UX/LabelCheckbox";
import { useContext } from "react";
import { SearchContext } from "../../store/search-context";

function Transmission({modalVisible, onCancel, onOk}) {

    const searchCtx = useContext(SearchContext);

    const TransmissionOptions = [
        {id: 0, label: 'Automatic', selected: false},
        {id: 1, label: 'CVT', selected: false},
        {id: 2, label: 'Manual', selected: false},
        {id: 3, label: 'Semi-Automatic', selected: false},
    ];

    function onOkHandler() {
        const selected = [];
        for(const transmission of TransmissionOptions) {
            if(transmission.selected == true) {
                selected.push(transmission.label);
            }
        }

        searchCtx.setTransmission(selected);

        onOk();
    }

    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Transmission"
            onCancel={onCancel}
            onOk={onOkHandler}
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
                            onCheck={() => item.selected = !item.selected}
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