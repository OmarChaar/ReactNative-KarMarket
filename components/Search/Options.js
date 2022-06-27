import { StyleSheet, View } from "react-native";

import ModalSeach from "./UX/ModalSeach";

function Options({modalVisible, onCancel, onOk}) {
    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Options"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                
            </View>
        </ModalSeach>
    )
}

export default Options;

const styles = StyleSheet.create({
    container: {
       
    },
})