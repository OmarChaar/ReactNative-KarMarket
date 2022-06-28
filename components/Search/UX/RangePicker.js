import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import RNPickerSelect from 'react-native-picker-select';


function RangePicker({label, data, placeholder, onValueChange}) {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>

            <View style={styles.pickerContainer}>
                <RNPickerSelect
                    onValueChange={onValueChange}
                    items={data}
                    pickerProps={{
                        accessibilityLabel: 5000,
                    }}
                    placeholder={{label: placeholder}}
                    key={item => item.value}
                    style={pickerSelectStyles}
                />
            </View>
            
        </View>
    )
}

export default RangePicker;

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        borderBottomColor: GlobalStyles.colors.prompt,
        borderBottomWidth: 0.5
    },
    label: {
        fontSize: GlobalStyles.fontSize.xsmall,
        fontWeight: '400',
        color: GlobalStyles.colors.primaryText,
        textTransform: 'uppercase'
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: GlobalStyles.fontSize.xsmall,
      paddingVertical: 6,
      paddingHorizontal: 10,
      color: GlobalStyles.colors.secondaryText,
      textAlign: 'right',
      width: '100%',
      fontWeight: 'bold'
    },
    inputAndroid: {
        fontSize: GlobalStyles.fontSize.xsmall,
        paddingVertical: 6,
        paddingHorizontal: 10,
        color: GlobalStyles.colors.secondaryText,
        textAlign: 'right',
        width: '100%',
        fontWeight: 'bold'
    },
  });