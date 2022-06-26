import { StyleSheet, View, Text, Switch, TextInput } from 'react-native';
import Dropdown from '../../components/UX/Settings/Dropdown';
import PickerSelect from '../../components/UI/PickerSelect';
import { useContext, useState } from 'react';
import IconLabel from '../../components/UI/IconLabel';
import { GlobalStyles } from '../../constants/styles';
import { AuthContext } from '../../store/auth-context';
import Button from '../../components/UI/Button';
import Input from '../../components/UX/Settings/Input';

function Settings() {

    function loginHandler() {
        authCtx.setGuest(false);
    }

    const [languageChosen, setLanguageChosen] = useState('');
    const [measurementChosen, setMeasurementChosen] = useState('');

    const authCtx = useContext(AuthContext);
    const user = authCtx.user

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
            {!authCtx.isGuest &&
                <View style={styles.profile}>
                    <Text style={styles.title}>Your profile</Text>

                    <Input
                        label="email"
                        editable={false}
                        value="omar@nvrl8.com"
                        
                    />

                    <Input
                        label="name"
                        placeholder="Enter a display name"
                    />
                </View>
            }
            <View>
                <Text style={styles.title}>Modify your settings for optimal experience!</Text>
                {/* <Text style={styles.title}>{user.email}</Text> */}
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
            

            {authCtx.isGuest &&
               <View style={styles.loginContaier}>
                    <Button onPress={loginHandler}>Login or Signup</Button>
                </View>
            }
          
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    profile: {
        marginBottom: 24,
    },
    title: {
        fontSize: GlobalStyles.fontSize.xsmall,
        fontWeight: 'bold',
        marginBottom: 12,
        color: GlobalStyles.colors.prompt
    },
    loginContaier: {
        flex: 1,
        justifyContent: 'flex-end',
        // backgroundColor: 'red'
    }
});
