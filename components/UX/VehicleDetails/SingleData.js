import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../../constants/styles";


function SingleData({children}) {
    return (
        <View style={styles.labelsSection}>
            <Text style={styles.labelValue}>{children}</Text>
        </View>
    )
}

export default SingleData;


const styles = StyleSheet.create({
    labelsSection: {
        // flexDirection: 'row',
        // backgroundColor: 'red',
        width: '50%',
        marginVertical: 8
    },
    labelValue: {
        fontSize: GlobalStyles.fontSize.medium,
        color: 'black'
    }
})