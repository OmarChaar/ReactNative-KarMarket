import { StyleSheet, View } from "react-native";

import ModalSeach from "./UX/ModalSeach";

function Model({modalVisible, onCancel, onOk}) {
    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Model"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                
            </View>
        </ModalSeach>
    )
}

export default Model;

const styles = StyleSheet.create({
    container: {
       padding: 12
    },
})