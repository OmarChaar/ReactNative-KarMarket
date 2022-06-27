import { StyleSheet, View } from "react-native";

import ModalSeach from "./UX/ModalSeach";

function Transmission({modalVisible, onCancel, onOk}) {
    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Transmission"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                
            </View>
        </ModalSeach>
    )
}

export default Transmission;

const styles = StyleSheet.create({
    container: {
       
    },
})