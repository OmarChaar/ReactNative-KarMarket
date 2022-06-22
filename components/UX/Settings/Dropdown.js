import { StyleSheet, View, Text, Image, Pressable, Dimensions } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import IconLabel from '../../UI/IconLabel';

function Dropdown({children, label, icon}) {
    return (
        <View style={GlobalStyles.settingsRow}>
            <IconLabel label={label} icon={icon}/>
                
            <View style={styles.dropdown}>
                {children}
            </View>
        </View>
    )
}

export default Dropdown;

const styles = StyleSheet.create({
    dropdown: {
        flex: 1
    }
});
