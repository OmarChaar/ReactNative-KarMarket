import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Settings from './screens/Tabs/Settings';
import Dealerships from './screens/Stacks/Dealerships';
import AddPlace from './screens/Stacks/AddPlace';
import { GlobalStyles } from './constants/styles';
import Map from './screens/Stacks/Map';
import { useEffect, useState, useContext, useCallback } from 'react';
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
import { getUser, getUserAccount, setUserAccount } from './util/auth';
import * as SplashScreen from 'expo-splash-screen';
import Entypo from '@expo/vector-icons/Entypo';
import LoadingOverlay from './components/UI/LoadingOverlay';
import AdvancedSearch from './screens/Tabs/AdvancedSearch';
import SearchContextProvider, { SearchContext } from './store/search-context';


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
      {/* <Stack.Screen 
        name='Search'
        component={AdvancedSearch}
        options={{
          title: 'Advanced Search'
        }}
      /> */}
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
        name="Search"
        component={AdvancedSearch}
        options={{
          tabBarIcon: ({size, color}) => <Ionicons name="triangle" size={size} color={color} />,
          headerStyle: {
            backgroundColor: GlobalStyles.colors.header,
          },
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
          headerRight: ({tintColor}) => ( authCtx.isAuthenticated &&
            <IconButton 
              name="exit" 
              color={tintColor} 
              size={24} 
              onPress={authCtx.logout} 
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

function Navigation() {

  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {(!authCtx.isAuthenticated && !authCtx.isGuest) && <AuthStack />}
      {(authCtx.isAuthenticated || authCtx.isGuest) && <BottomTabNavigation />}
    </NavigationContainer>
  );
}

function Root() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  // Here we check if the user is already logged in.
  useEffect(() => {
    async function prepare() {
      try {
        async function fetchToken() {
    
          const storedToken = await AsyncStorage.getItem('token');

          if(storedToken) {
            authCtx.authenticate(storedToken);
            // const user = await getUser(storedToken);
            // authCtx.setUser(user);
          }

          setIsTryingLogin(false);
        }

        async function fetchGuest() {
          const storedIsGuest = await AsyncStorage.getItem('isGuest');
          if(storedIsGuest == 'true') {
            authCtx.setGuest(true);
            setIsTryingLogin(false);
          }
        }

        fetchGuest();

        fetchToken();

        await new Promise(resolve => setTimeout(resolve, 2000));


      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onLayout={onLayoutRootView}>
          <LoadingOverlay message="Loading Content..."/>
      </View>
    );
  }

  return <Navigation />
}

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <AuthContextProvider>
        <SearchContextProvider>
          <Root />
        </SearchContextProvider>
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
