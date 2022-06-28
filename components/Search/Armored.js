import { StyleSheet, View } from "react-native";
import LabelCheckbox from "./UX/LabelCheckbox";

import ModalSeach from "./UX/ModalSeach";

function Armored({modalVisible, onCancel, onOk}) {
    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Armored"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                <LabelCheckbox label="Armored"/>
            </View>
        </ModalSeach>
    )
}

export default Armored;

const styles = StyleSheet.create({
    container: {
       
    },
})