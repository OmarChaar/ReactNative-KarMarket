import { StyleSheet, View, FlatList } from "react-native";

import ModalSeach from "./UX/ModalSeach";
import LabelCheckbox from "./UX/LabelCheckbox";
import { useContext } from "react";
import { SearchContext } from "../../store/search-context";

function Combustion({modalVisible, onCancel, onOk}) {

    const searchCtx = useContext(SearchContext);

    const CombustionOptions = [
        {id: 0, label: 'Diesel', selected: false},
        {id: 1, label: 'Gasoline', selected: false},
        {id: 2, label: 'Gasoline & Electric', selected: false},
        {id: 3, label: 'Gasoline & Natural Gas', selected: false},
        {id: 4, label: 'Gasoline & Alcohol', selected: false},
        {id: 5, label: 'Alcohol', selected: false},
        {id: 6, label: 'Electric', selected: false},
    ];

    function onOkHandler() {
        const selected = [];
        for(const combustion of CombustionOptions) {
            if(combustion.selected == true) {
                selected.push(combustion.label);
            }
        }

        searchCtx.setCombustion(selected);

        onOk();
    }

    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Combustion"
            onCancel={onCancel}
            onOk={onOkHandler}
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
                            onCheck={() => item.selected = !item.selected}
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