import React from 'react';
import 'react-native-gesture-handler';
//import file
import Entrance from './halaman/Entrance';
import JadwalIbadah from './halaman/JadwalIbadah';
import {DetailKehadiran, MainProfile} from './halaman/Profile';
import SignIn from './halaman/SignIn';
import {PembinaSignUp, Pilih, RemajaSignUp} from './halaman/SignUp';
import Statistik from './halaman/StatistikKehadiran';

//import navigation stuff
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Entrance"
          component={Entrance}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Jadwal Ibadah"
          component={JadwalIbadah}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail Kehadiran"
          component={DetailKehadiran}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main Profile"
          component={MainProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pembina Sign Up"
          component={PembinaSignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pilih"
          component={Pilih}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Remaja Sign Up"
          component={RemajaSignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Statistik"
          component={Statistik}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
