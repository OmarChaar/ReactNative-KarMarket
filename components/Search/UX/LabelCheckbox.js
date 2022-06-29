import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { GlobalStyles } from "../../../constants/styles";

function LabelCheckbox({label, onCheck, isChecked, imageSource}) {

    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                {imageSource &&
                    <Image
                        style={styles.icon}
                        source={imageSource}
                    />
                }
                <Text style={styles.label}>
                    {label}
                </Text>
            </View>
            

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
       borderBottomWidth: 0.5,
       borderBottomColor: GlobalStyles.colors.modalBackground,
       paddingVertical: 16,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center'
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
        height: 15,
        width: 15
    },
    icon: {
        width: Dimensions.get('screen').width / 10,
        marginRight: 10,
        aspectRatio: 1,
        resizeMode: 'contain'
    }
})