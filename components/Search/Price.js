import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import ModalSeach from "./UX/ModalSeach";
import RangePicker from "./UX/RangePicker";

function Price({modalVisible, onCancel, onOk}) {

    const PriceMinimum = [];

    const PriceMaximum = [];

    for(let i=0; i<2000000; i+=5000) {
        PriceMinimum.push(
            {label: '$'+ i.toLocaleString() +'.00', value: i}
        )
        if(i != 0) {
            PriceMaximum.push(
                {label: '$'+ i.toLocaleString() +'.00', value: i}
            )
        }
    }

    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();

    useEffect(() => {
        console.log("MIN", minPrice);
        console.log("MAX", maxPrice);
    }, [minPrice, maxPrice]);

    function setMinHandler(value) {
        setMinPrice(value);
    }

    function setMaxHandler(value) {
        setMaxPrice(value);
    }

    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Price"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                <RangePicker
                    label="Price Minimum"
                    data={PriceMinimum}
                    placeholder="Select Minimum"
                    onValueChange={setMinHandler}
                />

                <RangePicker
                    label="Price Maximum"
                    data={PriceMaximum}
                    placeholder="Select Minimum"
                    onValueChange={setMaxHandler}
                />
                
            </View>
        </ModalSeach>
    )
}

export default Price;

const styles = StyleSheet.create({
    container: {
       
    },
})