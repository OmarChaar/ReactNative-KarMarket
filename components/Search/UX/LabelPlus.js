import { StyleSheet, View, Text } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 

import { GlobalStyles } from "../../../constants/styles";
import IconButton from "../../UI/IconButton"

function LabelPlus({icon, iconType, label, onPress, onClear, data}) {
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
        
            {data && 
                <View style={styles.rightSide}>
                    <Text style={styles.rightSideText}>
                        {data}
                    </Text>
                    <IconButton
                        name="remove-circle-outline"
                        size={24} 
                        color={GlobalStyles.colors.primaryText}
                        onPress={onClear}
                        style={{opacity: 0.5}}
                    />
                </View>
            }
         
           {!data && 
                <IconButton
                    name="add-circle"
                    size={24} 
                    color={GlobalStyles.colors.primaryText}
                    onPress={onPress}
                />
           }
           

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
        paddingRight: 25,
    },
    icon: {
        marginRight: 10,
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        fontSize: GlobalStyles.fontSize.small
    },
    rightSide: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    rightSideText: {
        flex: 1,
        textAlign: 'right',
        paddingRight: 10,
        fontWeight: '200'
    }
})