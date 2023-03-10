import React from 'react';

import { Container, ContactsData, TalkToMe } from './styled';

export default function Aside() {
    return (
        <Container>
            <ContactsData>
                <h1>Dados de Contato</h1>

                <div className="contents">
                    <p>
                        <strong>Telefone</strong> (11) 95405-0142
                    </p>
                    <p>
                        <strong>E-mail</strong> leogilberto2010@hotmail.com
                    </p>
                    <p>
                        <strong>Endereço</strong> Travessa Marcos Seguin, 64 São Paulo SP, 04324-150
                    </p>
                </div>
            </ContactsData>
            <TalkToMe id="talkToMe">
                <form className="form" action="https://formsubmit.co/leogilberto2010@hotmail.com" method="post">
                    <h1>Fale Comigo</h1>

                    <input
                        type="text"
                        name="name"
                        className="name"
                        maxLength={30}
                        placeholder="Nome Completo"
                        autoComplete="off"
                        required={true}
                    />

                    <input
                        type="email"
                        name="email"
                        className="email"
                        maxLength={30}
                        placeholder="E-mail"
                        autoComplete="off"
                        required={true}
                    />

                    <textarea name="msg" className="msg" placeholder="Digite sua mensagem" required={true}></textarea>

                    <button>Enviar</button>

                    <input type="hidden" name="_next" value="https://leosantosp2.github.io/Portifolio/"></input>
                </form>
            </TalkToMe>
        </Container>
    );
}
