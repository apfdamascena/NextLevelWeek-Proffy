import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

export default function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFilterVisible(){
        setIsFiltersVisible(!isFiltersVisible);
    }
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponiveis"
                headerRight = {(
                    <BorderlessButton onPress = {handleToggleFilterVisible}>
                        <Feather name = "filter" size = {20} color= "#FFF"/>
                    </BorderlessButton>
                )}
            >

                {isFiltersVisible && (<View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput style={styles.input} 
                        placeholderTextColor = "#C1BCCC"
                        placeholder="Matéria" />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput style={styles.input} 
                                placeholderTextColor = "#C1BCCC"
                                placeholder="Dias" />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput style={styles.input} 
                                placeholderTextColor = "#C1BCCC"
                                placeholder="Horas" />
                            </View>
                        </View>

                        <RectButton style = {styles.submitButton}>
                            <Text style = {styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}