import { StyleSheet, View } from "react-native";

import ModalSeach from "./UX/ModalSeach";

function Year({modalVisible, onCancel, onOk}) {
    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Year"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                
            </View>
        </ModalSeach>
    )
}

export default Year;

const styles = StyleSheet.create({
    container: {
       
    },
})