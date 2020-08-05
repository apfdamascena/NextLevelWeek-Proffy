import React from 'react';
import PageHeader from '../../components/PageHeader';

import './teachersForm.css';
import Input from '../../components/Input';
import warningIcom from '../../assets/images/icons/warning.svg';

export default function TeachersForm(){
    return(
        <div id="page-teacher-form" className = "container">
            <PageHeader 
                title = "Que incrivel que voce quer dar aulas."
                description = "O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label = "Nome completo"/>
                    <Input name="avatar" label = "Avatar"/>
                    <Input name="whatsapp" label = "Whatsapp"/>

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Input name="subject" label = "Nome completo"/>
                    <Input name="cost" label = "Custo da sua hora por aula"/>
                    <Input name="whatsapp" label = "Whatsapp"/>

                </fieldset>

                <footer>
                    <p>
                        <img src = {warningIcom} alt = "Aviso importante" />
                        Importante! <br/> 
                        Preencha todos os dados
                    </p>
                    <button type = "button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>


    );
}