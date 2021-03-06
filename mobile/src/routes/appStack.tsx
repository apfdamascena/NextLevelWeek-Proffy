import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from '../Pages/Landing';
import GiveClasses from '../Pages/GiveClasses';
import StudyTabs from './studyTabs';


const {Navigator, Screen} = createStackNavigator();

export default function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions= {{ headerShown: false}}>
                <Screen name = "Landing" component = {Landing}/> 
                <Screen name = "GiveClasses" component = {GiveClasses}/> 
                <Screen name = "Study" component = {StudyTabs}/> 
            </Navigator>
        </NavigationContainer>

    );
} 