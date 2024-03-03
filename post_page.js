const elements_html = {
    data_date_time: document.querySelector('[data_date_time]'),
    data_category: document.querySelector('[data_category]'),
    data_views: document.querySelector('[data_views]'),
    data_img: document.querySelector('[data_img]'),
    data_title: document.querySelector('[data_title]'),
    data_text: document.querySelector('[data_text]'),
};

const views_local_storage = {
    views_card_1: localStorage.getItem('views_card_1') || '0',
    views_card_2: localStorage.getItem('views_card_2') || '0',
    views_card_3: localStorage.getItem('views_card_3') || '0',
    views_card_4: localStorage.getItem('views_card_4') || '0',
};

const date_time_now = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
};

const indice_local_storage = {
    indice_post: localStorage.getItem('indice') || '0',
};

switch (indice_local_storage.indice_post) {
    case '1':
        elements_html.data_title.innerHTML = 'Inteligência artificial na medicina';
        elements_html.data_date_time.innerHTML = `${date_time_now.date} ${date_time_now.time}`;
        elements_html.data_category.innerHTML = 'Inteligência artificial';
        elements_html.data_views.innerHTML = views_local_storage.views_card_1;
        elements_html.data_img.setAttribute('src', './image/medicina-ia.png');
        elements_html.data_text.innerHTML = `<p>A inteligência artificial (IA) na medicina é um campo fascinante que está transformando a maneira como os profissionais de saúde diagnosticam e tratam doenças. Aqui estão algumas maneiras pelas quais a IA está sendo aplicada na medicina:</p>

        <p>Diagnóstico Assistido por IA: Os algoritmos de IA podem analisar grandes quantidades de dados, incluindo imagens médicas, como tomografias computadorizadas (TCs) e ressonâncias magnéticas (RMs), para ajudar os médicos a identificar doenças e condições médicas com maior precisão e rapidez.
        
        <p>Medicina Personalizada: Com base nas informações genéticas e médicas de um paciente, os sistemas de IA podem recomendar tratamentos personalizados e prever a eficácia de determinados medicamentos ou terapias, levando a resultados melhores e mais individualizados.</p>
        
        <p> Monitoramento de Pacientes: Dispositivos médicos inteligentes e aplicativos de monitoramento de saúde alimentados por IA podem coletar e analisar continuamente os dados dos pacientes, fornecendo alertas precoce sobre mudanças no estado de saúde e ajudando os médicos a tomar decisões mais informadas sobre o tratamento. </p>
        
        <p> Assistência à Cirurgia: A IA está sendo usada em cirurgias assistidas por robôs para aumentar a precisão dos procedimentos cirúrgicos e reduzir o tempo de recuperação. Os sistemas de IA podem ajudar os cirurgiões a navegar em áreas delicadas do corpo com mais segurança e eficiência. </p>
        
        <p> Pesquisa Médica: Os algoritmos de IA estão sendo utilizados para analisar grandes conjuntos de dados médicos e identificar padrões e tendências que podem levar a novas descobertas e avanços na medicina, desde o desenvolvimento de novos medicamentos até a compreensão de doenças complexas.
        
        <p> No entanto, é importante notar que a implementação da IA na medicina também apresenta desafios, incluindo questões éticas, como privacidade e equidade no acesso aos cuidados de saúde, bem como preocupações sobre a confiabilidade e interpretabilidade dos algoritmos de IA. </p>`;
        break;

    case '2':
        elements_html.data_title.innerHTML = 'Segurança Cibernética';
        elements_html.data_date_time.innerHTML = `${date_time_now.date} ${date_time_now.time}`;
        elements_html.data_category.innerHTML = 'Internet das Coisas';
        elements_html.data_views.innerHTML = views_local_storage.views_card_2;
        elements_html.data_img.setAttribute('src', './image/cyber.png');
        elements_html.data_text.innerHTML = `
        <p> segurança cibernética, ou cibersegurança, é um campo crucial na era digital, especialmente com o aumento da conectividade e da dependência de sistemas e dados online. Aqui estão algumas áreas-chave da cibersegurança e suas medidas correspondentes: </p>
        
        
        <p>A segurança cibernética, ou cibersegurança, é um campo crucial na era digital, especialmente com o aumento da conectividade e da dependência de sistemas e dados online. Aqui estão algumas áreas-chave da cibersegurança e suas medidas correspondentes:</p>

        <p>Proteção de Dados: Isso envolve garantir a confidencialidade, integridade e disponibilidade dos dados. Medidas incluem criptografia de dados, controle de acesso, backups regulares e políticas de gerenciamento de dados.</p>

        <p>Segurança de Rede: Isso se concentra em proteger a infraestrutura de rede contra ataques, incluindo firewalls, detecção de intrusão, prevenção de intrusão e monitoramento de tráfego de rede.</p>

        <p>Gestão de Identidade e Acesso: Isso envolve a autenticação e autorização de usuários, garantindo que apenas pessoas autorizadas tenham acesso a sistemas e dados confidenciais. Isso pode ser feito através de senhas fortes, autenticação de dois fatores, políticas de senha e gerenciamento de identidade.</p>

        <p>Segurança de Aplicações: Isso aborda vulnerabilidades em software e aplicativos, garantindo que eles sejam desenvolvidos e implantados com segurança. Isso pode incluir testes de segurança, patches regulares e práticas de desenvolvimento seguro.</p>

        <p>Conscientização e Treinamento: Isso envolve educar funcionários e usuários sobre as ameaças cibernéticas e boas práticas de segurança, como evitar phishing, manter software atualizado e relatar atividades suspeitas.</p>

        <p>Resposta a Incidentes: Isso envolve ter planos e procedimentos em vigor para responder a incidentes de segurança cibernética de forma eficaz, incluindo a detecção, investigação e mitigação de ataques.</p>

        <p>Conformidade e Regulamentação: Isso envolve garantir que as organizações estejam em conformidade com as leis e regulamentos de segurança cibernética relevantes, como o GDPR na União Europeia ou o HIPAA nos Estados Unidos.</p>

        <p>Essas são apenas algumas das áreas-chave da cibersegurança, e a abordagem específica pode variar dependendo do tipo de organização, setor e ameaças enfrentadas. No entanto, a cibersegurança é uma preocupação compartilhada por todas as organizações que operam na era digital, independentemente do tamanho ou da indústria.</p>`;          
    
        break;

    case '3':
        elements_html.data_title.innerHTML = 'Realidade Virtual e Aumentada';
        elements_html.data_date_time.innerHTML = `${date_time_now.date} ${date_time_now.time}`;
        elements_html.data_category.innerHTML = 'Realidade Virtual ';
        elements_html.data_views.innerHTML = views_local_storage.views_card_3;
        elements_html.data_img.setAttribute('src', './image/meta-verso.png');
        elements_html.data_text.innerHTML = `<p> A realidade aumentada (RA) é uma tecnologia que combina elementos virtuais com o mundo real, permitindo que os usuários interajam com informações digitais sobrepostas ao ambiente físico. Aqui estão algumas maneiras pelas quais a realidade aumentada está sendo utilizada e suas aplicações:

        <p> Entretenimento: A RA é amplamente utilizada em aplicativos de entretenimento, como jogos, onde os jogadores podem interagir com personagens virtuais e objetos em seu ambiente físico. Exemplos populares incluem Pokémon GO e jogos de AR em dispositivos móveis.
 
        <p> Publicidade e Marketing: A RA é uma ferramenta poderosa para criar experiências de marketing imersivas. As empresas podem criar campanhas interativas que permitem aos consumidores experimentar produtos virtualmente antes de comprar, como experimentar roupas ou visualizar móveis em sua casa.
 
        <p> Educação: A RA está sendo cada vez mais utilizada na educação para criar experiências de aprendizagem envolventes e interativas. Por exemplo, os alunos podem explorar modelos tridimensionais de órgãos humanos ou observar animais em seu habitat natural através de dispositivos compatíveis com AR.
 
        <p> Treinamento e Simulação: A RA é usada em ambientes de treinamento e simulação para fornecer experiências práticas e realistas em diversas áreas, como medicina, aviação e manufatura. Os profissionais podem praticar procedimentos complexos ou simular situações de emergência em um ambiente seguro e controlado.
 
        <p> Arquitetura e Design: Arquitetos e designers utilizam a RA para visualizar projetos em escala real e em contexto. Isso permite que eles vejam como um edifício ou produto se integraria ao ambiente físico antes mesmo de ser construído, facilitando o processo de design e comunicação com os clientes.
 
        <p> Assistência ao Trabalho: Em ambientes industriais, a RA pode ser usada para fornecer informações em tempo real aos trabalhadores, como instruções de montagem, dados de manutenção ou dados de diagnóstico em equipamentos.
 
        <p> Saúde: Na área da saúde, a RA é utilizada em aplicações como visualização de imagens médicas em tempo real durante cirurgias, treinamento de cirurgiões e terapia de reabilitação.
 
        <p> Essas são apenas algumas das muitas maneiras pelas quais a realidade aumentada está sendo aplicada em diversos setores. À medida que a tecnologia continua a evoluir, é provável que vejamos ainda mais inovações e aplicações emocionantes da RA no futuro.      
         `;
        break;

    case '4':
        elements_html.data_title.innerHTML = 'Tecnologia Blockchain';
        elements_html.data_date_time.innerHTML = `${date_time_now.date} ${date_time_now.time}`;
        elements_html.data_category.innerHTML = 'Blockchain';
        elements_html.data_views.innerHTML = views_local_storage.views_card_4;
        elements_html.data_img.setAttribute('src', './image/Afinal-o-que-é-Blockchain.jpg');
        elements_html.data_text.innerHTML = `
       <p> Blockchain é uma tecnologia de registro distribuído que mantém um registro de transações digitais em uma rede descentralizada e segura. Aqui estão alguns pontos-chave sobre o blockchain:

       <p>  Descentralização: Ao contrário dos sistemas tradicionais que dependem de uma autoridade centralizada (como um banco), o blockchain opera em uma rede descentralizada de computadores (nós). Cada nó na rede mantém uma cópia idêntica do registro, garantindo transparência e resistência à censura.
        
       <p>  Segurança: O blockchain utiliza criptografia avançada para garantir a segurança das transações. Cada bloco de transação é vinculado ao bloco anterior através de uma função hash criptográfica, criando uma cadeia imutável de registros.
        
       <p>   Transparência e Integridade: Como todas as transações são registradas de forma permanente e transparente no blockchain, os usuários podem rastrear o histórico completo de qualquer ativo digital. Isso aumenta a confiança e reduz a possibilidade de fraudes ou manipulações.
        
       <p>  Contratos Inteligentes: Contratos inteligentes são programas autoexecutáveis ​​que são armazenados e executados no blockchain. Eles automatizam a execução de acordos e contratos, eliminando a necessidade de intermediários e reduzindo custos e tempo de transação.
        
       <p>   Aplicações Além das Criptomoedas: Embora seja mais conhecido pelo seu papel na criação de criptomoedas como o Bitcoin, o blockchain tem aplicações em uma variedade de setores, incluindo finanças, cadeia de suprimentos, saúde, imobiliário, votação eletrônica e muito mais.
        
       <p>   Escala e Eficiência: Apesar das vantagens, o blockchain enfrenta desafios de escalabilidade e eficiência, especialmente em redes públicas com alto volume de transações. Várias soluções estão sendo desenvolvidas para abordar essas questões, como redes de segunda camada (por exemplo, Lightning Network) e algoritmos de consenso aprimorados.
        
       <p>  Regulação e Desafios Legais: A tecnologia blockchain levanta questões legais e regulatórias, especialmente em relação à privacidade de dados, identidade digital e conformidade regulatória. Os governos e órgãos reguladores estão trabalhando para desenvolver políticas e regulamentações que promovam a inovação enquanto protegem os consumidores e a estabilidade financeira.
        
        `;
        break;

    default:
        break;
};