import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import './teachers.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

export default function Teachers() {
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function searchTeachers(event: FormEvent){
        event.preventDefault();

    }
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit = {searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value = {subject}
                        onChange = { (event) => { setSubject(event.target.value)}}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Matematica', label: 'Matematica' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Fisica', label: 'Fisica' },
                            { value: 'Filosofia', label: 'Filosofia' },
                            { value: 'Sociologia', label: 'Sociologia' },
                            { value: 'Historia', label: 'Historia' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />

                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value = {week_day}
                        onChange = { (event) => { setWeekDay(event.target.value)}}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' }
                        ]}
                    />
                    <Input type="time" name="time" label="Hora" value = {time}
                        onChange = { (event) => { setTime(event.target.value)}}/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div>
    );
}