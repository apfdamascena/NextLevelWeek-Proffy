import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from '../Pages/Landing';


const {Navigator, Screen} = createStackNavigator();

export default function AppStack(){
    return(
        <NavigationContainer>
            <Navigator>
                <Screen name = "Landing" component = {Landing}/> 
            </Navigator>
        </NavigationContainer>

    );
} 