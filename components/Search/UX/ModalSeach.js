
import { Modal, StyleSheet, View, Text, Dimensions } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import FlatButton from "../../UI/FlatButton";

function ModalSeach({children, modalVisible, title, onCancel, onOk, full}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={!full ? styles.modalView : [styles.modalView, {height: '75%'}]}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {title}
            </Text>
          </View>
          
          <View style={styles.childrenView}>
            {children}     
          </View>
            
          <View style={styles.buttonContainer}>
            <FlatButton 
              style={{color: GlobalStyles.colors.dangerText}}
              onPress={onCancel}
            >
              Cancel
            </FlatButton>

            <FlatButton 
              style={{color: GlobalStyles.colors.prompt}}
              onPress={onOk}
            >
              Ok
            </FlatButton>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ModalSeach;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.modalBackground
  },
  modalView: {
    flexDirection: 'column',
    overflow: 'hidden',
    maxHeight: '75%',
    width: '90%',
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  childrenView: {
    flexShrink: 1,
    flexGrow: 1
  },
  titleContainer: {
    backgroundColor: GlobalStyles.colors.header,
    width: '100%',
    padding: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: GlobalStyles.fontSize.small,
    fontWeight: 'bold',
    color: GlobalStyles.colors.headerText,
    textTransform: 'uppercase'
  },  
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    padding: 12,
  }
})