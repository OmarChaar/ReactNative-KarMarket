import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Settings from './screens/Tabs/Settings';
import Dealerships from './screens/Dealerships';
import AddPlace from './screens/AddPlace';
import { GlobalStyles } from './constants/styles';
import Map from './screens/Map';
import { useEffect, useState } from 'react';
import DealershipDetails from './screens/DealershipDetails';
import Home from './screens/Tabs/Home';
import Vehicles from './screens/Vehicles';
import VehicleDetails from './screens/VehicleDetails';
import { Ionicons } from '@expo/vector-icons'; 


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {

  useEffect(() => {
  
  }, []); // an empty array '[]' determines that this will be done once only when it is loaded.

  function BottomTabNavigation() {
    return (
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: GlobalStyles.colors.prompt,
          tabBarLabelStyle: { fontSize: GlobalStyles.fontSize.xsmall },
        }}
      >
        <BottomTab.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerTitleAlign: 'center',
            title: 'Home',
            tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color} />,
                 
          }}
        />
        <BottomTab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            headerTitleAlign: 'center',
            title: 'Settings',
            tabBarIcon: ({size, color}) => <Ionicons name="settings" size={size} color={color} />,
                 
          }}
        />
      </BottomTab.Navigator>
    )
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
              name='Overview'
              component={BottomTabNavigation}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name='Dealerships'
              component={Dealerships}
            />
              <Stack.Screen 
              name='Vehicles'
              component={Vehicles}
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
                title: 'Loading Dealership...'
              }}
            />
             <Stack.Screen 
              name='VehicleDetails'
              component={VehicleDetails}
              options={{
                title: 'Loading Vehicle...'
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
