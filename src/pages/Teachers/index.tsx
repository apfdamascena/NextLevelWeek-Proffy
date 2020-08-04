import React from 'react';
import PageHeader from '../../components/PageHeader';
import './teachers.css';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

export default function Teachers() {
    return (
        <div id="page-teacher-list" className = "container">
            <PageHeader title = "Estes são os proffys disponíveis.">
                <form id = "search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type = "text" id = "subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type = "text" id = "week_day"/>
                    </div>
            
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type = "text" id = "time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
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
            </main>
        </div>
    );
}