import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";


function RangePicker({label, data}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
        </View>
    )
}

export default RangePicker;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       marginBottom: 24
    },
    label: {
        fontSize: GlobalStyles.fontSize.small,
        fontWeight: '400',
        color: GlobalStyles.colors.primaryText
    },
});