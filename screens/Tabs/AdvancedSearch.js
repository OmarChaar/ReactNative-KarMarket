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
import { capitalizeText } from "../../util/format";

function AdvancedSearch() {

    const searchCtx = useContext(SearchContext);

    const [KMFilter, setKMFilter] = useState('');
    const [KMSet, setKMSet] = useState(false);
    function KMFilterHandler() {
        setKMSet(true);
    }
    function clearKMFilterHandler() {
        setKMFilter(null);
        searchCtx.setKM(null);
    }

    const [PriceFilter, setPriceFilter] = useState('');
    const [PriceSet, setPriceSet] = useState(false);
    function PriceFilterHandler() {
        setPriceSet(true);
    }
    function clearPriceFilterHandler() {
        setPriceFilter(null);
        searchCtx.setPrice(null);
    }

   
    const [YearFilter, setYearFilter] = useState('');
    const [YearSet, setYearSet] = useState(false);
    function YearFilterHandler() {
        setYearSet(true);
    }
    function clearYearFilterHandler() {
        setYearFilter(null);
        searchCtx.setYear(null);
    }

    const [BrandFilter, setBrandFilter] = useState('');
    const [BrandSet, setBrandSet] = useState(false);
    function BrandFilterHandler() {
        setBrandSet(true);
    }
    function clearBrandFilterHandler() {
        setBrandFilter(null);
        searchCtx.setBrand(null);
    }

    const [CombustionFilter, setCombustionFilter] = useState('');
    const [CombustionSet, setCombustionSet] = useState(false);
    function CombustionFilterHandler() {
        setCombustionSet(true);
    }
    function clearCombustionFilterHandler() {
        setCombustionFilter(null);
        searchCtx.setCombustion(null);
    }

    const [TransmissionFilter, setTransmissionFilter] = useState('');
    const [TransmissionSet, setTransmissionSet] = useState(false);
    function TransmissionFilterHandler() {
        setTransmissionSet(true);
    }
    function clearTransmissionFilterHandler() {
        setTransmissionFilter(null);
        searchCtx.setTransmission(null);
    }

    const [ColorFilter, setColorFilter] = useState('');
    const [ColorSet, setColorSet] = useState(false);
    function ColorFilterHandler() {
        setColorSet(true);
    }
    function clearColorFilterHandler() {
        setColorFilter(null);
        searchCtx.setColor(null);
    }

    const [OptionsFilter, setOptionsFilter] = useState('');
    const [OptionsSet, setOptionsSet] = useState(false);
    function OptionsFilterHandler() {
        setOptionsSet(true);
    }
    function clearOptionsFilterHandler() {
        setOptionsFilter(null);
        searchCtx.setOptions(null);
    }

    const [ArmoredFilter, setArmoredFilter] = useState('');
    const [ArmoredSet, setArmoredSet] = useState(false);
    function ArmoredFilterHandler() {
        setArmoredSet(true);
    }
    function clearArmoredFilterHandler() {
        setArmoredFilter(null);
        searchCtx.setArmored(null);
    }

    const [DoorsFilter, setDoorsFilter] = useState('');
    const [DoorsSet, setDoorsSet] = useState(false);
    function DoorsFilterHandler() {
        setDoorsSet(true);
    }
    function clearDoorsFilterHandler() {
        setDoorsFilter(null);
        searchCtx.setDoors(null);
    }

    const [EndLicenseFilter, setEndLicenseFilter] = useState('');
    const [EndLicenseSet, setEndLicenseSet] = useState(false);
    function EndLicenseFilterHandler() {
        setEndLicenseSet(true);
    }
    function clearEndLicenseFilterHandler() {
        setEndLicenseFilter(null);
        searchCtx.setEndLicense(null);
    }

    const [modalKM, setModalKM] = useState(false);
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

    const [applySearch, setApplySearch] = useState(false);

    function applySearchHandler() {
        setApplySearch(true);
    }

    useEffect(() => {
        if(KMSet) {
            let min = '';
            let max = '';
            if(searchCtx.KM.min) {
                min += 'from ' + searchCtx.KM.min.toLocaleString();;
            }
            if(searchCtx.KM.max) {
                max = ' to ' + searchCtx.KM.max.toLocaleString();
            }
            setKMFilter(min + max);
            setModalKM(!modalKM);
            setKMSet(false);
        }
        if(PriceSet) {
            let min = '';
            let max = '';
            if(searchCtx.Price.min) {
                min += 'from ' + searchCtx.Price.min.toLocaleString();;
            }
            if(searchCtx.Price.max) {
                max = ' to ' + searchCtx.Price.max.toLocaleString();
            }
            setPriceFilter(min + max);
            setModalPrice(!modalPrice);
            setPriceSet(false);
        }
        if(YearSet) {
            let min = '';
            let max = '';
            if(searchCtx.Year.min) {
                min += 'from ' + searchCtx.Year.min;
            }
            if(searchCtx.Year.max) {
                max = ' to ' + searchCtx.Year.max;
            }
            setYearFilter(min + max);
            setModalYear(!modalYear);
            setYearSet(false);
        }
        if(BrandSet) {
            console.log(searchCtx.Brand);

            let str = '';
            for(const brand of searchCtx.Brand) {
                str += capitalizeText(brand) + ' - '
            }

            setBrandFilter(str.slice(0, -2));
            setModalBrand(!modalBrand);
            setBrandSet(false);
        }
        if(TransmissionSet) {

            let str = '';
            for(const transmission of searchCtx.Transmission) {
                str += capitalizeText(transmission) + ' - '
            }

            setTransmissionFilter(str.slice(0, -2));
            setModalTransmission(!modalTransmission);
            setTransmissionSet(false);
        }
        if(CombustionSet) {

            let str = '';
            for(const combustion of searchCtx.Combustion) {
                str += capitalizeText(combustion) + ' - '
            }

            setCombustionFilter(str.slice(0, -2));
            setModalCombustion(!modalCombustion);
            setCombustionSet(false);
        }
    }, [KMSet, PriceSet, YearSet, BrandSet, TransmissionSet, CombustionSet]);

    useEffect(() => {
        if(applySearch) {
            if(searchCtx.KM != null) {
                console.log("KM", searchCtx.KM);
            }
            if(searchCtx.Price != null) {
                console.log("Price", searchCtx.Price);
            }
            if(searchCtx.Year != null) {
                console.log("Year", searchCtx.Year);
            }
            if(searchCtx.Brand != null) {
                console.log("Brand", searchCtx.Brand);
            }
            if(searchCtx.Transmission != null) {
                console.log("Transmission", searchCtx.Transmission);
            }
            if(searchCtx.Combustion != null) {
                console.log("Combustion", searchCtx.Combustion);
            }
            setApplySearch(false);
        }
    }, [applySearch]);

    function clearFilterHandler() {

    }

    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.container}>

                <KM modalVisible={modalKM} onOk={KMFilterHandler} onCancel={() => setModalKM(!modalKM)}/>
                <LabelPlus
                    icon="speedometer-outline"
                    iconType="Ionicons"
                    label="KM"
                    onPress={KMHandler}
                    onPressText={() => setModalKM(!modalKM)}
                    onClear={clearKMFilterHandler}
                    data={KMFilter ? KMFilter : null}
                />

                <Price modalVisible={modalPrice} onOk={PriceFilterHandler} onCancel={() => setModalPrice(!modalPrice)}/>
                <LabelPlus
                    icon="logo-usd"
                    iconType="Ionicons"
                    label="Price"
                    onPress={PriceHandler}
                    onPressText={() => setModalPrice(!modalPrice)}
                    onClear={clearPriceFilterHandler}
                    data={PriceFilter ? PriceFilter : null}
                />

                <Brand modalVisible={modalBrand} onOk={BrandFilterHandler} onCancel={() => setModalBrand(!modalBrand)}/>
                <LabelPlus
                    icon="car-sport-outline"
                    iconType="Ionicons"
                    label="Brand"
                    onPress={BrandHandler}
                    onPressText={() => setModalBrand(!modalBrand)}
                    onClear={clearBrandFilterHandler}
                    data={BrandFilter ? BrandFilter : null}
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

                <Year modalVisible={modalYear} onOk={YearFilterHandler} onCancel={() => setModalYear(!modalYear)}/>
                <LabelPlus
                    icon="calendar-outline"
                    iconType="Ionicons"
                    label="Year"
                    onPress={YearHandler}
                    onPressText={() => setModalYear(!modalYear)}
                    onClear={clearYearFilterHandler}
                    data={YearFilter ? YearFilter : null}
                />

                <Color modalVisible={modalColor} onCancel={() => setModalColor(!modalColor)}/>
                <LabelPlus
                    icon="color-palette-outline"
                    iconType="Ionicons"
                    label="Color"
                    onPress={ColorHandler}
                />

                <Transmission modalVisible={modalTransmission} onOk={TransmissionFilterHandler} onCancel={() => setModalTransmission(!modalTransmission)}/>
                <LabelPlus
                    icon="gears"
                    iconType="FontAwesome"
                    label="Transmission"
                    onPress={TransmissionHandler}
                    onPressText={() => setModalTransmission(!modalTransmission)}
                    onClear={clearTransmissionFilterHandler}
                    data={TransmissionFilter ? TransmissionFilter : null}
                />

                <Combustion modalVisible={modalCombustion} onOk={CombustionFilterHandler} onCancel={() => setModalCombustion(!modalCombustion)}/>
                <LabelPlus
                    icon="local-gas-station"
                    iconType="MaterialIcons"
                    label="Combustion"
                    onPress={CombustionHandler}
                    onPressText={() => setModalCombustion(!modalCombustion)}
                    onClear={clearCombustionFilterHandler}
                    data={CombustionFilter ? CombustionFilter : null}
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
                
                    <FlatButton onPress={clearFilterHandler} style={{ textDecorationLine: "underline", color: GlobalStyles.colors.dangerText}}>
                        Clear Filter
                    </FlatButton>
                </View>
            </ScrollView>

            <View style={styles.floatingButton}>
                <Button onPress={applySearchHandler}>
                    Search
                </Button>
            </View>
        </View>
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
        paddingBottom: 75
    },
    floatingButton: {
        position: "absolute",
        bottom:0,
        alignSelf:'flex-end',
        width: '100%',
        padding: 12
    }
})
