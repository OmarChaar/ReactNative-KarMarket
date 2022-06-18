import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Dealerships from './screens/Dealerships';
import AddPlace from './screens/AddPlace';
import { GlobalStyles } from './constants/styles';
import Map from './screens/Map';
import { deletedb, init } from './util/database';
import { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import DealershipDetails from './screens/DealershipDetails';


const Stack = createNativeStackNavigator();

export default function App() {

  const [dbInitializedState, setDBInitializedState] = useState(false);

  useEffect(() => {
    init().then(() => {
      setDBInitializedState(true);
    }).catch((err) => {
      console.log("err",err);
    });
  }, []); // an empty array '[]' determines that this will be done once only when it is loaded.

  if(!dbInitializedState) {
    return <AppLoading />
  }

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
              headerBackTitleVisible: false,
              contentStyle: {
                backgroundColor: GlobalStyles.colors.background
              }
            }}
          >
            <Stack.Screen 
              name='Dealerships'
              component={Dealerships}
            />
            <Stack.Screen 
              name='AddPlace'
              component={AddPlace}
            />
             <Stack.Screen 
              name='Map'
              component={Map}
              options={{
                title: 'Locate Place',
                headerTitleAlign: 'center',
              }}
            />
              <Stack.Screen 
              name='DealershipDetails'
              component={DealershipDetails}
              options={{
                title: 'Loading Item...'
              }}
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
