import { StyleSheet, View } from "react-native";

import ModalSeach from "./UX/ModalSeach";

function Color({modalVisible, onCancel, onOk}) {
    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Color"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                
            </View>
        </ModalSeach>
    )
}

export default Color;

const styles = StyleSheet.create({
    container: {
       
    },
})