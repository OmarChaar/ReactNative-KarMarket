import { StyleSheet, View } from "react-native";
import HomeCard from "../../components/UX/HomeCard";


function Home({navigation}) {
    return (
        <View style={styles.container}>
            <HomeCard source={require('../../assets/imgs/homepage/homepage_dealership.png')} label="" onPress={() => navigation.navigate('Dealerships')}/>
            <HomeCard source={require('../../assets/imgs/homepage/homepage_allcars.png')} label="" onPress={() => navigation.navigate('Vehicles')}/>
            <HomeCard source={require('../../assets/imgs/homepage/homepage_advancedsearch.png')} label="" onPress={() => navigation.navigate('Search')}/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})