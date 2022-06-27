import { StyleSheet, View, Text } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 

import { GlobalStyles } from "../../../constants/styles";
import IconButton from "../../UI/IconButton"

function LabelPlus({icon, iconType, label, onPress}) {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                {iconType == 'Ionicons' && 
                   <Ionicons style={styles.icon} name={icon} size={24} color={GlobalStyles.colors.primaryText} />
                }
                {iconType == 'MaterialIcons' && 
                   <MaterialIcons style={styles.icon} name={icon} size={24} color={GlobalStyles.colors.primaryText} />
                }
                {iconType == 'FontAwesome' && 
                   <FontAwesome style={styles.icon} name={icon} size={24} color={GlobalStyles.colors.primaryText} />
                }
                {iconType == 'MaterialCommunityIcons' && 
                   <MaterialCommunityIcons style={styles.icon} name={icon} size={24} color={GlobalStyles.colors.primaryText} />
                }
                {iconType == 'Octicons' && 
                   <MaterialCommunityIcons style={styles.icon} name={icon} size={24} color={GlobalStyles.colors.primaryText} />
                }

                <Text style={styles.label}>{label}</Text>
            </View>
        
            <IconButton
                name="add-circle"
                size={24} 
                color={GlobalStyles.colors.primaryText}
                onPress={onPress}
            />

        </View>
    )
}

export default LabelPlus;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 12,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: GlobalStyles.colors.primaryText,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        fontSize: GlobalStyles.fontSize.small
    }
})