import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { GlobalStyles } from "../../../constants/styles";

function LabelCheckbox({label, onCheck, isChecked}) {
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
                onPress={onCheck}
                isChecked={isChecked}
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
       marginVertical: 12
    },
    label: {
        fontSize: GlobalStyles.fontSize.xsmall,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primaryText,
        textTransform: 'uppercase'
    },
    checkbox: {
        borderRadius: 0,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.primaryText,
        height: 20,
        width: 20
    }
})