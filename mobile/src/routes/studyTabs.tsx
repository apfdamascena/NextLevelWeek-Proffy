import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TeacherList from '../Pages/TeacherList';
import Favorite from '../Pages/Favorites';

const {Navigator, Screen} = createBottomTabNavigator();

export default function StudyTabs(){
    return(
        <Navigator>
            <Screen name = "TeacherList" component={TeacherList}></Screen>
            <Screen name = "Favorite" component= {Favorite}></Screen>
        </Navigator>
    );
}