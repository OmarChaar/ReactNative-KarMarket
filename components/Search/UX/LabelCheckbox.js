import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { GlobalStyles } from "../../../constants/styles";

function LabelCheckbox({label}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>

            <BouncyCheckbox 
                iconStyle={styles.checkbox} 
                fillColor={GlobalStyles.colors.primaryText}
                bounceEffect={1}
                bounceFriction={5}
            />

        </View>
    )
}

export default LabelCheckbox;

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       marginBottom: 24
    },
    label: {
        fontSize: GlobalStyles.fontSize.small,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primaryText
    },
    checkbox: {
        borderRadius: 0,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.primaryText,
        height: 20,
        width: 20
    }
})