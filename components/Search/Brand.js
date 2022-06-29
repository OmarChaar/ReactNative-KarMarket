import { FlatList, StyleSheet, View, Image, Text, ScrollView } from "react-native";

import ModalSeach from "./UX/ModalSeach";
import LabelCheckbox from "./UX/LabelCheckbox"
function Brand({modalVisible, onCancel, onOk}) {

    const brand = [
        {label: 'abarth', imageSource: require('../../assets/imgs/logos/abarth-logo.png')},
        {label: 'acura', imageSource: require('../../assets/imgs/logos/acura-logo.png')},
        {label: 'alfa romeo', imageSource: require('../../assets/imgs/logos/alfa-romeo-logo.png')},
        {label: 'alpine', imageSource: require('../../assets/imgs/logos/alpine-logo.png')},
        {label: 'aston martin', imageSource: require('../../assets/imgs/logos/aston-martin-logo.png')},
        {label: 'audi', imageSource: require('../../assets/imgs/logos/audi-logo.png')},
        {label: 'bentley', imageSource: require('../../assets/imgs/logos/bentley-logo.png')},
        {label: 'BMW', imageSource: require('../../assets/imgs/logos/bmw-logo.png')},
        {label: 'bugatti', imageSource: require('../../assets/imgs/logos/bugatti-logo.png')},
        {label: 'buick', imageSource: require('../../assets/imgs/logos/buick-logo.png')},
        {label: 'byd', imageSource: require('../../assets/imgs/logos/byd-logo.png')},
        {label: 'cadillac', imageSource: require('../../assets/imgs/logos/cadillac-logo.png')},
        {label: 'chevrolet', imageSource: require('../../assets/imgs/logos/chevrolet-logo.png')},
        {label: 'chrysler', imageSource: require('../../assets/imgs/logos/chrysler-logo.png')},
        {label: 'citroen', imageSource: require('../../assets/imgs/logos/citroen-logo.png')},
        {label: 'dacia', imageSource: require('../../assets/imgs/logos/dacia-logo.png')},
        {label: 'dodge', imageSource: require('../../assets/imgs/logos/dodge-logo.png')},
        {label: 'ferrari', imageSource: require('../../assets/imgs/logos/ferrari-logo.png')},
        {label: 'fiat', imageSource: require('../../assets/imgs/logos/fiat-logo.png')},
        {label: 'ford', imageSource: require('../../assets/imgs/logos/ford-logo.png')},
        {label: 'geely', imageSource: require('../../assets/imgs/logos/geely-logo.png')},
        {label: 'genesis', imageSource: require('../../assets/imgs/logos/genesis-logo.png')},
        {label: 'gmc', imageSource: require('../../assets/imgs/logos/gmc-logo.png')},
        {label: 'honda', imageSource: require('../../assets/imgs/logos/honda-logo.png')},
        {label: 'hyundai', imageSource: require('../../assets/imgs/logos/hyundai-logo.png')},
        {label: 'infiniti', imageSource: require('../../assets/imgs/logos/infiniti-logo.png')},
        {label: 'jaguar', imageSource: require('../../assets/imgs/logos/jaguar-logo.png')},
        {label: 'jeep', imageSource: require('../../assets/imgs/logos/jeep-logo.png')},
        {label: 'kia', imageSource: require('../../assets/imgs/logos/kia-logo.png')},
        {label: 'lamborghini', imageSource: require('../../assets/imgs/logos/lamborghini-logo.png')},
        {label: 'lancia', imageSource: require('../../assets/imgs/logos/lancia-logo.png')},
        {label: 'land rover', imageSource: require('../../assets/imgs/logos/land-rover-logo.png')},
        {label: 'lexus', imageSource: require('../../assets/imgs/logos/lexus-logo.png')},
        {label: 'lincoln', imageSource: require('../../assets/imgs/logos/lincoln-logo.png')},
        {label: 'maserati', imageSource: require('../../assets/imgs/logos/maserati-logo.png')},
        {label: 'maybach', imageSource: require('../../assets/imgs/logos/maybach-logo.png')},
        {label: 'mazda', imageSource: require('../../assets/imgs/logos/mazda-logo.png')},
        {label: 'mazzanti', imageSource: require('../../assets/imgs/logos/mazzanti-logo.png')},
        {label: 'mclaren', imageSource: require('../../assets/imgs/logos/mclaren-logo.png')},
        {label: 'mercedes benz', imageSource: require('../../assets/imgs/logos/mercedes-benz-logo.png')},
        {label: 'mini', imageSource: require('../../assets/imgs/logos/mini-logo.png')},
        {label: 'mitsubishi', imageSource: require('../../assets/imgs/logos/mitsubishi-logo.png')},
        {label: 'nissan', imageSource: require('../../assets/imgs/logos/nissan-logo.png')},
        {label: 'opel', imageSource: require('../../assets/imgs/logos/opel-logo.png')},
        {label: 'pagani', imageSource: require('../../assets/imgs/logos/pagani-logo.png')},
        {label: 'peugeot', imageSource: require('../../assets/imgs/logos/peugeot-logo.png')},
        {label: 'porsche', imageSource: require('../../assets/imgs/logos/porsche-logo.png')},
        {label: 'renault', imageSource: require('../../assets/imgs/logos/renault-logo.png')},
        {label: 'rolls royce', imageSource: require('../../assets/imgs/logos/rolls-royce-logo.png')},
        {label: 'saab', imageSource: require('../../assets/imgs/logos/saab-logo.png')},
        {label: 'seat', imageSource: require('../../assets/imgs/logos/seat-logo.png')},
        {label: 'skoda', imageSource: require('../../assets/imgs/logos/skoda-logo.png')},
        {label: 'smart', imageSource: require('../../assets/imgs/logos/smart-logo.png')},
        {label: 'subaru', imageSource: require('../../assets/imgs/logos/subaru-logo.png')},
        {label: 'suzuki', imageSource: require('../../assets/imgs/logos/suzuki-logo.png')},
        {label: 'tata', imageSource: require('../../assets/imgs/logos/tata-logo.png')},
        {label: 'tesla', imageSource: require('../../assets/imgs/logos/tesla-logo.png')},
        {label: 'toyota', imageSource: require('../../assets/imgs/logos/toyota-logo.png')},
        {label: 'volkswagen', imageSource: require('../../assets/imgs/logos/volkswagen-logo.png')},
        {label: 'volvo', imageSource: require('../../assets/imgs/logos/volvo-logo.png')},
    ]

    return (
        <ModalSeach 
            modalVisible={modalVisible} 
            title="Brand"
            onCancel={onCancel}
            onOk={onOk}
        >
            <View style={styles.container}>
                <FlatList
                    data={brand}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.label}
                    renderItem={({item}) =>
                        <LabelCheckbox
                            label={item.label}
                            imageSource={item.imageSource}
                        />
                    }
                />
            </View>
        </ModalSeach>
    )
}

export default Brand;

const styles = StyleSheet.create({
    container: {
   
    },
})