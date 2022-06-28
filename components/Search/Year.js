import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";

import ModalSeach from "./UX/ModalSeach";
import RangePicker from "./UX/RangePicker";

function Year({modalVisible, onCancel, onOk}) {

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

    useEffect(() => {
        console.log("MIN", minYear);
        console.log("MAX", maxYear);
    }, [minYear, maxYear]);

    function setMinHandler(value) {
        setMinYear(value);
    }

    function setMaxHandler(value) {
        setMaxYear(value);
    }

    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Year"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                <RangePicker
                    label="Year Minimum"
                    data={YearMinimum}
                    placeholder="Select Minimum"
                    onValueChange={setMinHandler}
                />

                <RangePicker
                    label="Year Maximum"
                    data={YearMaximum}
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
       
    },
})