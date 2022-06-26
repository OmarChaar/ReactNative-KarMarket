import { StyleSheet, View, Text, Image, Pressable, Dimensions, TextInput } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';


function Input({label, value, placeholder, editable}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput
                style={{...styles.input, backgroundColor: (editable == undefined) ? 'white' : GlobalStyles.colors.inactiveInput}}
                placeholder={placeholder}
                editable={editable}
                value={value}
            />
        </View>
       
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12
    },
    label: {
        fontSize: GlobalStyles.fontSize.small,
        marginLeft: 8,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primaryText,
        textTransform: 'capitalize',
        flex: 1
    },
    input: {
        fontSize: GlobalStyles.fontSize.xsmall,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primaryText,
        borderRadius: 6,
        color: GlobalStyles.colors.secondaryText,
        fontWeight: 'bold',
        flex: 2
    }
});