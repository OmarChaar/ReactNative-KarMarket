import { useEffect, useState, useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import KM from "../../components/Search/KM";
import Price from "../../components/Search/Price";
import Brand from "../../components/Search/Brand";
import Model from "../../components/Search/Model";
import Version from "../../components/Search/Version";
import Year from "../../components/Search/Year";
import Color from "../../components/Search/Color";
import Transmission from "../../components/Search/Transmission";
import Combustion from "../../components/Search/Combustion";
import Options from "../../components/Search/Options";
import Armored from "../../components/Search/Armored";
import Doors from "../../components/Search/Doors";
import License from "../../components/Search/License";
import LabelPlus from "../../components/Search/UX/LabelPlus";
import Button from "../../components/UI/Button";
import FlatButton from "../../components/UI/FlatButton";
import { GlobalStyles } from "../../constants/styles";
import { SearchContext } from "../../store/search-context";

function AdvancedSearch() {

    const searchCtx = useContext(SearchContext);

    const [modalKM, setModalKM] = useState(false);
    const [KMFilter, setKMFilter] = useState();
    function KMFilterHandler() {
        const min = searchCtx.KM.min != undefined ? 'from ' + searchCtx.KM.min.toLocaleString() : '';
        const max = searchCtx.KM.max != undefined ? ' to ' + searchCtx.KM.max.toLocaleString() : '';
        setKMFilter(min +  max);
        setModalKM(!modalKM);
    }
    function KMHandler() {
        setModalKM(true);
    }

    const [modalPrice, setModalPrice] = useState(false);
    function PriceHandler() {
        setModalPrice(true);
    }

    const [modalBrand, setModalBrand] = useState(false);
    function BrandHandler() {
        setModalBrand(true);
    }

    const [modalModel, setModalModel] = useState(false);
    function ModelHandler() {
        setModalModel(true);
    }

    const [modalVersion, setModalVersion] = useState(false);
    function VersionHandler() {
        setModalVersion(true)
    }

    const [modalYear, setModalYear] = useState(false);
    function YearHandler() {
        setModalYear(true);
    }

    const [modalColor, setModalColor] = useState(false);
    function ColorHandler() {
        setModalColor(true);
    }

    const [modalTransmission, setModalTransmission] = useState(false);
    function TransmissionHandler() {
        setModalTransmission(true);
    }

    const [modalCombustion, setModalCombustion] = useState(false);
    function CombustionHandler() {
        setModalCombustion(true);
    }

    const [modalOptions, setModalOptions] = useState(false);
    function OptionsHandler() {
        setModalOptions(true);
    }

    const [modalArmored, setModalArmored] = useState(false);
    function ArmoredHandler() {
        setModalArmored(true);
    }

    const [modalDoors, setModalDoors] = useState(false);
    function DoorsHandler() {
        setModalDoors(true);
    }

    const [modalEndLicense, setModalEndLicense] = useState(false);
    function EndLicenseHandler() {
        setModalEndLicense(true);
    }

    useEffect(() => {
        console.log("KMFilter", KMFilter);
    }, [KMFilter]);

    return (
        <ScrollView style={styles.container}>

            <KM modalVisible={modalKM} onOk={KMFilterHandler} onCancel={() => setModalKM(!modalKM)}/>
            <LabelPlus
                icon="speedometer-outline"
                iconType="Ionicons"
                label="KM"
                onPress={KMHandler}
                onPressText={() => setModalKM(!modalKM)}
                onClear={() => setKMFilter(null)}
                data={KMFilter}
            />

            <Price modalVisible={modalPrice} onCancel={() => setModalPrice(!modalPrice)}/>
            <LabelPlus
                icon="logo-usd"
                iconType="Ionicons"
                label="Price"
                onPress={PriceHandler}
            />

            <Brand modalVisible={modalBrand} onCancel={() => setModalBrand(!modalBrand)}/>
            <LabelPlus
                icon="car-sport-outline"
                iconType="Ionicons"
                label="Brand"
                onPress={BrandHandler}
            />

            <Model modalVisible={modalModel} onCancel={() => setModalModel(!modalModel)}/>
            <LabelPlus
                icon="car-sport-outline"
                iconType="Ionicons"
                label="Model"
                onPress={ModelHandler}
            />

            <Version modalVisible={modalVersion} onCancel={() => setModalVersion(!modalVersion)}/>
            <LabelPlus
                icon="car-sport-outline"
                iconType="Ionicons"
                label="Version"
                onPress={VersionHandler}
            />

            <Year modalVisible={modalYear} onCancel={() => setModalYear(!modalYear)}/>
            <LabelPlus
                icon="calendar-outline"
                iconType="Ionicons"
                label="Year"
                onPress={YearHandler}
            />

            <Color modalVisible={modalColor} onCancel={() => setModalColor(!modalColor)}/>
            <LabelPlus
                icon="color-palette-outline"
                iconType="Ionicons"
                label="Color"
                onPress={ColorHandler}
            />

            <Transmission modalVisible={modalTransmission} onCancel={() => setModalTransmission(!modalTransmission)}/>
            <LabelPlus
                icon="gears"
                iconType="FontAwesome"
                label="Transmission"
                onPress={TransmissionHandler}
            />

            <Combustion modalVisible={modalCombustion} onCancel={() => setModalCombustion(!modalCombustion)}/>
            <LabelPlus
                icon="local-gas-station"
                iconType="MaterialIcons"
                label="Combustion"
                onPress={CombustionHandler}
            />

            <Options modalVisible={modalOptions} onCancel={() => setModalOptions(!modalOptions)}/>
            <LabelPlus
                icon="add-circle"
                iconType="Ionicons"
                label="Options"
                onPress={OptionsHandler}
            />

            <Armored modalVisible={modalArmored} onCancel={() => setModalArmored(!modalArmored)}/>
            <LabelPlus
                icon="shield-outline"
                iconType="Ionicons"
                label="Armored"
                onPress={ArmoredHandler}
            />

            <Doors modalVisible={modalDoors} onCancel={() => setModalDoors(!modalDoors)}/>
            <LabelPlus
                icon="car-door"
                iconType="MaterialCommunityIcons"
                label="Doors"
                onPress={DoorsHandler}
            />

            <License modalVisible={modalEndLicense} onCancel={() => setModalEndLicense(!modalEndLicense)}/>
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
    },
    floatingButton: {
        position: "absolute",
        bottom: 50,
        left: 5,
        width: '100%',
        backgroundColor: 'red'
    }
})
