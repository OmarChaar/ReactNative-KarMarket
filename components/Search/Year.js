import { StyleSheet, View } from "react-native";
import { useState, useContext } from "react";

import ModalSeach from "./UX/ModalSeach";
import RangePicker from "./UX/RangePicker";
import { SearchContext } from "../../store/search-context";

function Year({modalVisible, onCancel, onOk}) {

    const searchCtx = useContext(SearchContext);

    const YearMinimum = [];

    const YearMaximum = [];

    for(let i=1950; i<2022; i+=1) {
        YearMinimum.push(
            {label: i.toString(), value: i}
        )
        if(i != 0) {
            YearMaximum.push(
                {label: i.toString(), value: i}
            )
        }
    }

    const [minYear, setMinYear] = useState();
    const [maxYear, setMaxYear] = useState();

    function setMinHandler(value) {
        setMinYear(value);
    }

    function setMaxHandler(value) {
        setMaxYear(value);
    }

    function onOkHandler() {
        searchCtx.setYear({
            min: minYear, 
            max: maxYear
        });
        onOk();
    }

    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Year"
            onCancel={onCancel}
            onOk={onOkHandler}
        >
            <View style={styles.container}>
                <RangePicker
                    label="Year Minimum"
                    data={YearMinimum}
                    value={minYear}
                    placeholder="Select Minimum"
                    onValueChange={setMinHandler}
                />

                <RangePicker
                    label="Year Maximum"
                    data={YearMaximum}
                    value={maxYear}
                    placeholder="Select Minimum"
                    onValueChange={setMaxHandler}
                />
            </View>
        </ModalSeach>
    )
}

export default Year;

const styles = StyleSheet.create({
    container: {
       padding: 12
    },
})