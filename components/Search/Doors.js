import { StyleSheet, View } from "react-native";
import LabelCheckbox from "./UX/LabelCheckbox";

import ModalSeach from "./UX/ModalSeach";

function Doors({modalVisible, onCancel, onOk}) {
    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Doors"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                <LabelCheckbox label="2"/>
                <LabelCheckbox label="4"/>
            </View>
        </ModalSeach>
    )
}

export default Doors;

const styles = StyleSheet.create({
    container: {
       
    },
})