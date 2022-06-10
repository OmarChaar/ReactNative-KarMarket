import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import AddPlace from './screens/AddPlace';
import { GlobalStyles } from './constants/styles';
import Map from './screens/Map';


const Stack = createNativeStackNavigator();


export default function App() {



  return (
    <>
    
    <StatusBar style="auto" />

    <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.header,
              },
              headerTintColor: GlobalStyles.colors.headerText,
              contentStyle: {
                backgroundColor: GlobalStyles.colors.background
              }
            }}
          >
            <Stack.Screen 
              name='Home'
              component={Home}
            />
            <Stack.Screen 
              name='AddPlace'
              component={AddPlace}
            />
             <Stack.Screen 
              name='Map'
              component={Map}
            />
          </Stack.Navigator>

        
        </NavigationContainer>
    </>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
