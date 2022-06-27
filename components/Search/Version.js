import { StyleSheet, View } from "react-native";

import ModalSeach from "./UX/ModalSeach";

function Version({modalVisible, onCancel, onOk}) {
    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Version"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                
            </View>
        </ModalSeach>
    )
}

export default Version;

const styles = StyleSheet.create({
    container: {
       
    },
})