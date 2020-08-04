import React from 'react';
import './teacherItem.css';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

export default function TeacherItem(){
    return(
        <article className= "teacher-item">
        <header>
        <img src = "https://avatars1.githubusercontent.com/u/52205263?s=400&u=033c62df4cc4f73b3010473faf859919019679af&v=4" alt = "Alex Image" />
        <div>
            <strong>Alex Damascena</strong>
            <span>Matemática</span>
        </div>
        </header>

        <p>
            Estude até falar: eu nao aguento mais.
            <br/> <br/>
            Tentando aprender algo sempre que possível. Falar que "sabe" é apenas um bloqueio
            mental para melhorar ainda mais. Esteja sempre no topo e lá sempre terá uma plateia para você incentivar.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src = {whatsAppIcon} alt= "Whatsapp: Entrar em contato" />
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}