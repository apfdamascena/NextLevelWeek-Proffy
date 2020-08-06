import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import './teachersForm.css';
import Input from '../../components/Input';
import warningIcom from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

export default function TeachersForm() {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    const [scheduleItems, setScheduleItems] = useState([
        {
            week_day: 0,
            from: '',
            to: ''
        }
    ]);

    function setScheduleValue(position: number, field: string, value: string){
        const newSchedule = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return {...scheduleItem, [field]: value};
            }
            return scheduleItem;
        })

        setScheduleItems(newSchedule);
    }

    function addNewSchedule() {

        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]);
    }

    function handleCreateClass(event: FormEvent){
        event.preventDefault();

    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que voce quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit = {handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input name="name" label="Nome completo" value={name} onChange={(event) => { setName(event.target.value) }} />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(event) => { setAvatar(event.target.value) }} />
                        <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(event) => { setWhatsapp(event.target.value) }} />
                        <Textarea name="bio" label="Biografia" value={bio} onChange={(event) => { setBio(event.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(event) => { setSubject(event.target.value) }}
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
                        <Input name="cost" label="Custo da sua hora por aula" value={cost} onChange={(event) => { setCost(event.target.value) }} />

                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis
                    <button type="button" onClick={addNewSchedule}>
                                Novo horário
                    </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        onChange = {(event) => {setScheduleValue(index,'week_day', event.target.value)}}
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
                                    <Input name="from" label="Das" type="time" 
                                            onChange = { (event) => {setScheduleValue(index, 'from', event.target.value)}}
                                    />
                                    <Input name="to" label="Até" type="time" onChange = { (event) => { setScheduleValue(index, 'to', event.target.value)}}/>
                                </div>
                            );
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcom} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>


    );
}