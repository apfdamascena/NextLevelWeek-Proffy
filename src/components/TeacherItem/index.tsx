import React from 'react';
import './teacherItem.css';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import API from '../../services/api';


export interface Teacher {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: number;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> =({teacher}) => {

    function createNewConnection(){
        API.post('connections', {
            user_id: teacher.id,
        });
    }
    return(
        <article className= "teacher-item">
        <header>
        <img src = {teacher.avatar} alt = {teacher.name} />
        <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
        </div>
        </header>

        <p>
            {teacher.bio}
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>{`R$ ${teacher.cost},00`}</strong>
            </p>
            <a target= "_blank" onClick = {createNewConnection}href = {`https://wa.me/${teacher.whatsapp}`}>
                <img src = {whatsAppIcon} alt= "Whatsapp: Entrar em contato" />
                Entrar em contato
            </a>
        </footer>
    </article>
    );
}

export default TeacherItem;