import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, View, Text, Image, Pressable, Dimensions } from 'react-native';
import { GlobalStyles } from '../../constants/styles';


function PickerSelect({items, placeholder, onChange}) {
    return (
        <RNPickerSelect
            onValueChange={(value) => onChange(value)}
            placeholder={{label: placeholder}}
            style={pickerSelectStyles}
            items={items}
        />
    )
}

export default PickerSelect;

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: GlobalStyles.fontSize.xsmall,
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: GlobalStyles.colors.primaryText,
      backgroundColor: 'white',
      borderRadius: 4,
      color: GlobalStyles.colors.secondaryText,
      textAlign: 'center',
      width: '100%',
      fontWeight: 'bold'
    },
    inputAndroid: {
      fontSize: GlobalStyles.fontSize.xsmall,
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderWidth: 2,
      borderColor: 'gray',
      backgroundColor: 'white',
      borderRadius: 4,
      color: 'black',
      textAlign: 'center',
      width: '100%',
      fontWeight: 'bold'
    },
});