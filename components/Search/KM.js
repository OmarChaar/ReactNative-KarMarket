import { StyleSheet, View } from "react-native";

import ModalSeach from "./UX/ModalSeach";

function KM({modalVisible, onCancel, onOk}) {
    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="KM"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                
            </View>
        </ModalSeach>
    )
}

export default KM;

const styles = StyleSheet.create({
    container: {
       
    },
})