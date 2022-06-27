import { StyleSheet, View } from "react-native";

import ModalSeach from "./UX/ModalSeach";

function Brand({modalVisible, onCancel, onOk}) {
    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Brand"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                
            </View>
        </ModalSeach>
    )
}

export default Brand;

const styles = StyleSheet.create({
    container: {
       
    },
})