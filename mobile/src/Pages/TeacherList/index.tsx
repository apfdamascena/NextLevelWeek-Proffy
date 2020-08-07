import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem/TeacherItem';

export default function TeacherList(){
    return(
        <View style = {styles.container}>
            <PageHeader title =  "Proffys disponiveis"/>
            <TeacherItem/>
        </View>
    );
}