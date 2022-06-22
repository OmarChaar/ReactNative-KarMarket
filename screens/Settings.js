import { StyleSheet, View, Text, Switch } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import Dropdown from '../components/UX/Settings/Dropdown';
import PickerSelect from '../components/UI/PickerSelect';
import { useState } from 'react';
import IconLabel from '../components/UI/IconLabel';

function Settings() {

    const [languageChosen, setLanguageChosen] = useState('');
    const [measurementChosen, setMeasurementChosen] = useState('');

    const localization = [
        { label: 'English', value: 'en' },
        { label: 'Portegues', value: 'pt' }
    ];

    const measurement = [
        { label: 'Kilometers', value: 'km' },
        { label: 'Miles', value: 'mi' }
    ];

    function onChangeMeasurement(value) {
        console.log("onChangeMeasurement", value);
        setMeasurementChosen(value);
    }

    function onChangeLocalization(value) {
        console.log("onChangeLocalization", value);
        setLanguageChosen(value);
    }

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modify your settings for optimal experience!</Text>
            <Dropdown 
                icon="speedometer-outline"
                label="measurement"
            >
                <PickerSelect 
                    placeholder="Select" 
                    items={measurement} 
                    onChange={onChangeMeasurement}
                />
            </Dropdown>

            <Dropdown 
                icon="language"
                label="language"
            >
                <PickerSelect 
                    placeholder="Select" 
                    items={localization} 
                    onChange={onChangeLocalization}
                />
            </Dropdown>

            <View style={GlobalStyles.settingsRow}>
                <IconLabel label="notifications" icon="notifications"/>
                <Switch
                   trackColor={{ true: GlobalStyles.colors.toggleActive }}
                   ios_backgroundColor={GlobalStyles.colors.toggleBackground}
                   onValueChange={toggleSwitch}
                   value={isEnabled}
                />
            </View>

        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: GlobalStyles.fontSize.xsmall,
        fontWeight: 'bold',
        marginBottom: 24,
        color: GlobalStyles.colors.prompt
    },
});
