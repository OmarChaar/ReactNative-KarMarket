import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../../constants/styles";


function LabeledData({label, children}) {
    return (
        <View style={styles.labelsSection}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.labelValue}>{children}</Text>
        </View>
    )
}

export default LabeledData;


const styles = StyleSheet.create({
    labelsSection: {
        // flexDirection: 'row',
        // backgroundColor: 'red',
        width: '50%',
        marginVertical: 8
    },
    label: {
        fontSize: GlobalStyles.fontSize.medium,
        color: 'grey',
        fontWeight: '300'
    },
    labelValue: {
        fontSize: GlobalStyles.fontSize.medium,
        color: 'black'
    }
})