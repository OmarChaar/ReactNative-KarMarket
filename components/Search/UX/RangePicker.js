import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import RNPickerSelect from 'react-native-picker-select';


function RangePicker({label, data, placeholder}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>

            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={data}
                placeholder={{label: placeholder}}
                key={item => item.value}
            />
        </View>
    )
}

export default RangePicker;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12
    },
    label: {
        fontSize: GlobalStyles.fontSize.small,
        fontWeight: '400',
        color: GlobalStyles.colors.primaryText
    },
});