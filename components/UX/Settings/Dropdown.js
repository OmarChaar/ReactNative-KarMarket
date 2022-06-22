import { StyleSheet, View, Text, Image, Pressable, Dimensions } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import { Ionicons } from '@expo/vector-icons'; 

function Dropdown({children, label, icon}) {
    return (
        <View style={styles.dropdownContainer}>
            <View style={styles.downdownTextContainer}>
                <Ionicons 
                    name={icon} 
                    size={GlobalStyles.fontSize.medium} 
                    color={GlobalStyles.colors.primaryText} 
                />
                <Text style={styles.downdownLabel}>{label}</Text>
            </View>
            
            <View style={styles.dropdown}>
                {children}
            </View>
        </View>
    )
}

export default Dropdown;

const styles = StyleSheet.create({
    dropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12
    },
    downdownTextContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    downdownLabel: {
        fontSize: GlobalStyles.fontSize.small,
        marginLeft: 8,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primaryText,
        textTransform: 'capitalize'
    },  
    dropdown: {
        flex: 1
    }
});
