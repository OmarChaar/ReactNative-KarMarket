import { FlatList, StyleSheet, View } from "react-native";

import SearchModal from "./UX/SearchModal";
import ModalSeach from "./UX/ModalSeach";
import LabelCheckbox from "./UX/LabelCheckbox";
import { useState, useContext, useEffect } from "react";
import { SearchContext } from "../../store/search-context";

function Brand({modalVisible, onCancel, onOk}) {

    const searchCtx = useContext(SearchContext);

    const [brandsBackup, setBrandsBackup] = useState([
        {label: 'abarth', imageSource: require('../../assets/imgs/logos/abarth-logo.png'), selected: false},
        {label: 'acura', imageSource: require('../../assets/imgs/logos/acura-logo.png'), selected: false},
        {label: 'alfa romeo', imageSource: require('../../assets/imgs/logos/alfa-romeo-logo.png'), selected: false},
        {label: 'alpine', imageSource: require('../../assets/imgs/logos/alpine-logo.png'), selected: false},
        {label: 'aston martin', imageSource: require('../../assets/imgs/logos/aston-martin-logo.png'), selected: false},
        {label: 'audi', imageSource: require('../../assets/imgs/logos/audi-logo.png'), selected: false},
        {label: 'bentley', imageSource: require('../../assets/imgs/logos/bentley-logo.png'), selected: false},
        {label: 'BMW', imageSource: require('../../assets/imgs/logos/bmw-logo.png'), selected: false},
        {label: 'bugatti', imageSource: require('../../assets/imgs/logos/bugatti-logo.png'), selected: false},
        {label: 'buick', imageSource: require('../../assets/imgs/logos/buick-logo.png'), selected: false},
        {label: 'byd', imageSource: require('../../assets/imgs/logos/byd-logo.png'), selected: false},
        {label: 'cadillac', imageSource: require('../../assets/imgs/logos/cadillac-logo.png'), selected: false},
        {label: 'chevrolet', imageSource: require('../../assets/imgs/logos/chevrolet-logo.png'), selected: false},
        {label: 'chrysler', imageSource: require('../../assets/imgs/logos/chrysler-logo.png'), selected: false},
        {label: 'citroen', imageSource: require('../../assets/imgs/logos/citroen-logo.png'), selected: false},
        {label: 'dacia', imageSource: require('../../assets/imgs/logos/dacia-logo.png'), selected: false},
        {label: 'dodge', imageSource: require('../../assets/imgs/logos/dodge-logo.png'), selected: false},
        {label: 'ferrari', imageSource: require('../../assets/imgs/logos/ferrari-logo.png'), selected: false},
        {label: 'fiat', imageSource: require('../../assets/imgs/logos/fiat-logo.png'), selected: false},
        {label: 'ford', imageSource: require('../../assets/imgs/logos/ford-logo.png'), selected: false},
        {label: 'geely', imageSource: require('../../assets/imgs/logos/geely-logo.png'), selected: false},
        {label: 'genesis', imageSource: require('../../assets/imgs/logos/genesis-logo.png'), selected: false},
        {label: 'gmc', imageSource: require('../../assets/imgs/logos/gmc-logo.png'), selected: false},
        {label: 'honda', imageSource: require('../../assets/imgs/logos/honda-logo.png'), selected: false},
        {label: 'hyundai', imageSource: require('../../assets/imgs/logos/hyundai-logo.png'), selected: false},
        {label: 'infiniti', imageSource: require('../../assets/imgs/logos/infiniti-logo.png'), selected: false},
        {label: 'jaguar', imageSource: require('../../assets/imgs/logos/jaguar-logo.png'), selected: false},
        {label: 'jeep', imageSource: require('../../assets/imgs/logos/jeep-logo.png'), selected: false},
        {label: 'kia', imageSource: require('../../assets/imgs/logos/kia-logo.png'), selected: false},
        {label: 'lamborghini', imageSource: require('../../assets/imgs/logos/lamborghini-logo.png'), selected: false},
        {label: 'lancia', imageSource: require('../../assets/imgs/logos/lancia-logo.png'), selected: false},
        {label: 'land rover', imageSource: require('../../assets/imgs/logos/land-rover-logo.png'), selected: false},
        {label: 'lexus', imageSource: require('../../assets/imgs/logos/lexus-logo.png'), selected: false},
        {label: 'lincoln', imageSource: require('../../assets/imgs/logos/lincoln-logo.png'), selected: false},
        {label: 'maserati', imageSource: require('../../assets/imgs/logos/maserati-logo.png'), selected: false},
        {label: 'maybach', imageSource: require('../../assets/imgs/logos/maybach-logo.png'), selected: false},
        {label: 'mazda', imageSource: require('../../assets/imgs/logos/mazda-logo.png'), selected: false},
        {label: 'mazzanti', imageSource: require('../../assets/imgs/logos/mazzanti-logo.png'), selected: false},
        {label: 'mclaren', imageSource: require('../../assets/imgs/logos/mclaren-logo.png'), selected: false},
        {label: 'mercedes benz', imageSource: require('../../assets/imgs/logos/mercedes-benz-logo.png'), selected: false},
        {label: 'mini', imageSource: require('../../assets/imgs/logos/mini-logo.png'), selected: false},
        {label: 'mitsubishi', imageSource: require('../../assets/imgs/logos/mitsubishi-logo.png'), selected: false},
        {label: 'nissan', imageSource: require('../../assets/imgs/logos/nissan-logo.png'), selected: false},
        {label: 'opel', imageSource: require('../../assets/imgs/logos/opel-logo.png'), selected: false},
        {label: 'pagani', imageSource: require('../../assets/imgs/logos/pagani-logo.png'), selected: false},
        {label: 'peugeot', imageSource: require('../../assets/imgs/logos/peugeot-logo.png'), selected: false},
        {label: 'porsche', imageSource: require('../../assets/imgs/logos/porsche-logo.png'), selected: false},
        {label: 'renault', imageSource: require('../../assets/imgs/logos/renault-logo.png'), selected: false},
        {label: 'rolls royce', imageSource: require('../../assets/imgs/logos/rolls-royce-logo.png'), selected: false},
        {label: 'saab', imageSource: require('../../assets/imgs/logos/saab-logo.png'), selected: false},
        {label: 'seat', imageSource: require('../../assets/imgs/logos/seat-logo.png'), selected: false},
        {label: 'skoda', imageSource: require('../../assets/imgs/logos/skoda-logo.png'), selected: false},
        {label: 'smart', imageSource: require('../../assets/imgs/logos/smart-logo.png'), selected: false},
        {label: 'subaru', imageSource: require('../../assets/imgs/logos/subaru-logo.png'), selected: false},
        {label: 'suzuki', imageSource: require('../../assets/imgs/logos/suzuki-logo.png'), selected: false},
        {label: 'tata', imageSource: require('../../assets/imgs/logos/tata-logo.png'), selected: false},
        {label: 'tesla', imageSource: require('../../assets/imgs/logos/tesla-logo.png'), selected: false},
        {label: 'toyota', imageSource: require('../../assets/imgs/logos/toyota-logo.png'), selected: false},
        {label: 'volkswagen', imageSource: require('../../assets/imgs/logos/volkswagen-logo.png'), selected: false},
        {label: 'volvo', imageSource: require('../../assets/imgs/logos/volvo-logo.png'), selected: false},
    ]);

    const [brands, setBrands] = useState();

    useEffect(() => {
        setBrands(brandsBackup);
    }, [])

    function searchBrands(text) {
        if(text == 0) {
            setBrands(brandsBackup);
        }
        else {
            const temp = brandsBackup;
            const filtered = temp.filter(function (brand) {
                return brand.label.toLowerCase().indexOf(text.toLowerCase()) > -1;
            });

            setBrands(filtered);
        }
    }


    function onOkHandler() {
        const selected = [];
        for(const brand of brands) {
            if(brand.selected == true) {
                selected.push(brand.label);
            }
        }

        searchCtx.setBrand(selected);

        onOk();
    }

    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Brand"
            onCancel={onCancel}
            onOk={onOkHandler}
            full={true}
        >
            <View style={{flexShrink: 1, overflow: 'hidden'}}>
                <SearchModal onChangeText={searchBrands}/>
                <View style={styles.container}>
                    <FlatList
                        data={brands}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.label}
                        renderItem={({item}) =>
                            <LabelCheckbox
                                label={item.label}
                                imageSource={item.imageSource}
                                isChecked={item.selected}
                                onCheck={() => item.selected = !item.selected}
                            />
                        }
                    />
                </View>
            </View>
           
        </ModalSeach>
    )
}

export default Brand;

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
})