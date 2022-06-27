import { StyleSheet, View } from "react-native";

import ModalSeach from "./UX/ModalSeach";

function License({modalVisible, onCancel, onOk}) {
    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="End of License"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                
            </View>
        </ModalSeach>
    )
}

export default License;

const styles = StyleSheet.create({
    container: {
       
    },
})