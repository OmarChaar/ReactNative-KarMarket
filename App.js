import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Settings from './screens/Tabs/Settings';
import Dealerships from './screens/Stacks/Dealerships';
import AddPlace from './screens/Stacks/AddPlace';
import { GlobalStyles } from './constants/styles';
import Map from './screens/Stacks/Map';
import { useEffect, useState, useContext } from 'react';
import DealershipDetails from './screens/Stacks/DealershipDetails';
import Home from './screens/Tabs/Home';
import Vehicles from './screens/Stacks/Vehicles';
import VehicleDetails from './screens/Stacks/VehicleDetails';
import { Ionicons } from '@expo/vector-icons'; 
import LoginScreen from './screens/Auth/LoginScreen';
import SignupScreen from './screens/Auth/SignupScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconButton from './components/UI/IconButton';


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.header },
        headerTintColor: GlobalStyles.colors.headerText,
        contentStyle: { backgroundColor: GlobalStyles.colors.background },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
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
        name='Home'
        component={Home}
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
  )

}

function BottomTabNavigation() {
  const authCtx = useContext(AuthContext);

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: GlobalStyles.colors.prompt,
        tabBarLabelStyle: { fontSize: GlobalStyles.fontSize.xsmall },
      }}
    >
      <BottomTab.Screen 
        name="Overview" 
        component={AuthenticatedStack} 
        options={{
          tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color} />,
          headerShown: false,
        }}
      />
      <BottomTab.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          headerTitleAlign: 'center',
          title: 'Settings',
          headerStyle: {
            backgroundColor: GlobalStyles.colors.header,
          },
          tabBarIcon: ({size, color}) => <Ionicons name="settings" size={size} color={color} />,
          headerRight: ({tintColor}) => (
            <IconButton 
              name="exit" 
              color={tintColor} 
              size={24} 
              onPress={authCtx.logout} 
            />
          )
               
        }}
      />
    </BottomTab.Navigator>
  )
}

function Navigation() {

  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <BottomTabNavigation />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  // Here we check if the user is already logged in.
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if(storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  if(isTryingLogin) {
    return <AppLoading />
  }

  return <Navigation />
}

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
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
