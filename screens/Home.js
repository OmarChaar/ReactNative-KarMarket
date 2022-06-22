import { StyleSheet, View } from "react-native";
import Button from "../components/UI/Button";
import HomeCard from "../components/UX/HomeCard";


function Home({navigation}) {
    return (
        <View style={styles.container}>
            <HomeCard type="dealership" label="Dealerships" onPress={() => navigation.navigate('Dealerships')}/>
            <HomeCard type="car" label="Cars" onPress={() => navigation.navigate('Vehicles')}/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    }
})