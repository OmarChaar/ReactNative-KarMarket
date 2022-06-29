import { StyleSheet, View } from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";
import { GlobalStyles } from '../../../constants/styles';

function SearchModal({placeholder, onChangeText, onClearPress}) {
    return (
        <View style={styles.container}>
            <SearchBar
                placeholder={placeholder}
                onChangeText={(text) => onChangeText(text)}
                onClearPress={onClearPress}
                placeholderTextColor={GlobalStyles.colors.header}
                textInputStyle={{
                    color: GlobalStyles.colors.primaryText
                }}
                clearIconImageStyle={{
                    tintColor: GlobalStyles.colors.primaryText,
                }}
                searchIconImageStyle={{
                    tintColor: GlobalStyles.colors.primaryText
                }}
                style={{
                    width: '100%',
                    borderRadius: 4,
                    elevation: 1,
                }}
            />  
        </View>
    )
}

export default SearchModal;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});