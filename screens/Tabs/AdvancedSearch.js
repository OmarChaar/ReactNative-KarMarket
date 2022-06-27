import { ScrollView, StyleSheet, View } from "react-native";
import LabelPlus from "../../components/Search/LabelPlus";
import Button from "../../components/UI/Button";
import FlatButton from "../../components/UI/FlatButton";
import { GlobalStyles } from "../../constants/styles";

function AdvancedSearch() {

    function KMHandler() {
        console.log("KMHandler");
    }

    function PriceHandler() {
        console.log("PriceHandler");
    }

    function BrandHandler() {
        console.log("BrandHandler");
    }

    function ModelHandler() {
        console.log("ModelHandler");
    }

    function VersionHandler() {
        console.log("VersionHandler");
    }

    function YearHandler() {
        console.log("YearHandler");
    }

    function ColorHandler() {
        console.log("ColorHandler");
    }

    function TransmissionHandler() {
        console.log("TransmissionHandler");
    }

    function CombustionHandler() {
        console.log("CombustionHandler");
    }

    function OptionsHandler() {
        console.log("OptionsHandler");
    }

    function ArmoredHandler() {
        console.log("ArmoredHandler");
    }

    function DoorsHandler() {
        console.log("DoorsHandler");
    }

    function EndLicenseHandler() {
        console.log("EndLicenseHandler");
    }

    return (
        <ScrollView style={styles.container}>
            <LabelPlus
                icon="speedometer-outline"
                iconType="Ionicons"
                label="KM"
                onPress={KMHandler}
            />

            <LabelPlus
                icon="logo-usd"
                iconType="Ionicons"
                label="Price"
                onPress={PriceHandler}
            />

            <LabelPlus
                icon="car-sport-outline"
                iconType="Ionicons"
                label="Brand"
                onPress={BrandHandler}
            />

            <LabelPlus
                icon="car-sport-outline"
                iconType="Ionicons"
                label="Model"
                onPress={ModelHandler}
            />

            <LabelPlus
                icon="car-sport-outline"
                iconType="Ionicons"
                label="Version"
                onPress={VersionHandler}
            />

            <LabelPlus
                icon="calendar-outline"
                iconType="Ionicons"
                label="Year"
                onPress={YearHandler}
            />

            <LabelPlus
                icon="color-palette-outline"
                iconType="Ionicons"
                label="Color"
                onPress={ColorHandler}
            />

            <LabelPlus
                icon="gears"
                iconType="FontAwesome"
                label="Transmission"
                onPress={TransmissionHandler}
            />

            <LabelPlus
                icon="local-gas-station"
                iconType="MaterialIcons"
                label="Combustion"
                onPress={CombustionHandler}
            />

            <LabelPlus
                icon="add-circle"
                iconType="Ionicons"
                label="Options"
                onPress={OptionsHandler}
            />

            <LabelPlus
                icon="shield-outline"
                iconType="Ionicons"
                label="Armored"
                onPress={ArmoredHandler}
            />

            <LabelPlus
                icon="car-door"
                iconType="MaterialCommunityIcons"
                label="Doors"
                onPress={DoorsHandler}
            />

            <LabelPlus
                icon="credit-card"
                iconType="Octicons"
                label="End of license"
                onPress={EndLicenseHandler}
            />

            <View style={styles.buttonContainer}>
                <Button>
                    Search
                </Button>

                <FlatButton style={{ textDecorationLine: "underline", color: GlobalStyles.colors.dangerText}}>
                    Clear Filter
                </FlatButton>
            </View>
        </ScrollView>
    )
}

export default AdvancedSearch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        padding: 12,
        backgroundColor: GlobalStyles.colors.header,
       
        
    }
})
