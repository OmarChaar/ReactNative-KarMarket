import { StyleSheet, ScrollView, Image, View, Text } from "react-native";
import Button from "../components/UI/Button";


function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate('Dealerships')}>Dealerships</Button>
            <Button onPress={() => navigation.navigate('Vehicles')}>Vehicles</Button>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})