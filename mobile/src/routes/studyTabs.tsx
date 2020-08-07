import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherList from '../Pages/TeacherList';
import Favorite from '../Pages/Favorites';
import { Ionicons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator();

export default function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 100,
                },

                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },

                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },

                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: "#FAFAFC",
                activeBackgroundColor: "#EBEBF5",
                inactiveTintColor: "#C1BCCC",
                activeTintColor: "#32264D",
            }}
        >
            <Screen name="TeacherList" component={TeacherList} options={{
                tabBarLabel: "Proffys",
                tabBarIcon: ({ color, size, focused}) => {
                    return (
                        <Ionicons name="ios-easel" size={size} color={focused ? '#8257E5' : color} />
                    );
                }
            }}></Screen>
            <Screen name="Favorite" component={Favorite} options={{
                tabBarLabel: "Proffys",
                tabBarIcon: ({ color, size, focused}) => {
                    return (
                        <Ionicons name="ios-heart" size={size} color={focused ? '#8257E5' : color} />
                    );
                }
            }}></Screen>
        </Navigator>
    );
}