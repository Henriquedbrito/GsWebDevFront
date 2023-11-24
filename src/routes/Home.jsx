import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './css/Home/Home.css'
import fotoexemplo from '../img/medicoanalise.png'
import fotoHardware from '../img/hardware.png'
export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isUserLoggedIn = () => {
      return sessionStorage.getItem('user') !== null;
    };

    if (!isUserLoggedIn()) {
      // Redireciona para a página de erro ou login
      navigate('/'); // Ou para '/login', dependendo da sua preferência
    }
  }, [navigate]); // Adicione navigate como dependência do useEffect

  return (
    <div id="paginaHome">
      <div id="imgProd">
        <img id="fotoIdoso" src={fotoexemplo} alt="fotoDeUmIdoso" />
      </div>
      <div id="oqSolucao">
        <h1>Qual é a nossa solução?</h1>
        <p className="Textos">
        Illtracker: A mistura de um aplicativo e dispositivos inteligentes 
        que irão em conjunto armazenar sintomas e medidas como batimento cardiaco e temperatura.
        </p>
      </div>
      <div id="oqFara">
      <h2 className="Textos">Plano de Ação: "illTracker"</h2>
      <ul className="Textos">
        <li >
          <strong>Desenvolvimento Tecnológico:</strong> Investir na pesquisa e no desenvolvimento do aplicativo "illTracker", garantindo uma interface intuitiva e de fácil navegação para os pacientes. Além disso, é crucial assegurar a segurança dos dados pessoais e médicos, implementando protocolos robustos de proteção da privacidade.
        </li>
        <li>
          <strong>Testes Piloto:</strong> Realizar testes piloto do aplicativo em parceria com instituições médicas e grupos de pacientes. Essa fase permitirá ajustes com base no feedback real, identificando possíveis obstáculos e refinando a usabilidade do aplicativo.
        </li>
        <li>
          <strong>Treinamento Médico:</strong> Implementar programas de treinamento para profissionais de saúde, visando familiarizá-los com a integração eficiente do "illTracker" no processo de atendimento. Isso incluiria a orientação sobre como interpretar os dados fornecidos pelo aplicativo e integrá-los aos registros médicos tradicionais.
        </li>
        <li>
          <strong>Integração com Sistemas Hospitalares:</strong> Estabelecer uma integração eficaz entre o "illTracker" e os sistemas hospitalares existentes. Isso garantirá que as informações coletadas pelos pacientes estejam prontamente disponíveis para os médicos no ambiente hospitalar, evitando redundâncias e facilitando a tomada de decisões.
        </li>
        <li>
          <strong>Educação do Paciente:</strong> Desenvolver campanhas educativas para informar os pacientes sobre os benefícios do uso do aplicativo "illTracker". Esclarecer sobre como o registro regular de sintomas e medicamentos pode contribuir para um atendimento mais eficaz e personalizado.
        </li>
        <li>
          <strong>Parcerias Institucionais:</strong> Buscar parcerias estratégicas com instituições de saúde, laboratórios farmacêuticos e seguradoras para promover a adoção do "illTracker". Essas parcerias podem facilitar a disseminação da tecnologia e promover sua aceitação generalizada.
        </li>
        <li>
          <strong>Avaliação Contínua:</strong> Implementar mecanismos de avaliação contínua para monitorar a eficácia do "illTracker" ao longo do tempo. Isso incluiria análises de dados, pesquisas de satisfação do paciente e feedback dos profissionais de saúde, permitindo ajustes contínuos e melhorias conforme necessário.
        </li>
      </ul>
      </div>
      <div id="comoFuncionara">
        <h1>Como funcionara</h1>
        <p className="Textos">Com o nosso dispositivo o usuário ao apertar um botão pode registrar a sua temperatura e batimentos cardiacos atuais e por meio de nosso aplicativo o usuário pode registrar mais sintomas que ele está sentindo.</p>
        <img id="fotoHardware" src={fotoHardware} alt="foto do arduino" />
      </div>
      <div id="textoSobre">
      <p className="Textos">O MediAlert, um assistente inteligente 
        inovador, transforma o tratamento médico ao simplificar a 
        administração de medicamentos. Com lembretes precisos, ele 
        assegura a adesão correta ao regime de medicação, crucial 
        para a eficácia do tratamento.</p>
      </div>
      
      <div id="tituloSolucao">
        <h2>O assistente da sua saúde</h2>
      </div>
      <div id="solucao">
      <p className="Textos">O MediAlert, um assistente inteligente 
        inovador, transforma o tratamento médico ao simplificar a 
        administração de medicamentos. Com lembretes precisos, ele 
        assegura a adesão correta ao regime de medicação, crucial 
        para a eficácia do tratamento.</p>
      </div>
      <div id="vantagens">
          <h1>Nossas Vantagens:</h1>
          <p className="Textos">
          "O "illTracker" oferece aos pacientes a oportunidade de manter um registro diário e detalhado de seus sintomas, como náusea, diarreia, dor muscular, enxaqueca, entre outros, e da ingestão de medicamentos ao longo do dia. Essa funcionalidade proporciona um histórico preciso e atualizado das condições de saúde do paciente, facilitando a comunicação eficiente com os profissionais de saúde."
          </p>
        
        <p className="Textos">
        "Ao chegar ao hospital, o paciente precisa apenas fornecer o código do seu perfil no aplicativo, permitindo a recuperação instantânea de todas as informações pertinentes para a criação do registro hospitalar. Essa agilidade elimina a necessidade de preenchimento repetitivo de formulários e acelera o processo de atendimento, contribuindo para uma experiência mais eficiente e conveniente para o paciente."
        </p>
        
        <p className="Textos">
        " A abordagem do "illTracker" visa eliminar perguntas extensas durante as consultas médicas, como aquelas relacionadas a medicamentos recentemente tomados ou sintomas nas últimas semanas. O acesso ao histórico medicamentoso e aos registros de sintomas nos últimos meses permite ao médico realizar uma análise mais aprofundada da condição do paciente. Isso não apenas economiza tempo durante a consulta, mas também permite uma abordagem mais direta e personalizada, contribuindo para a eficiência do atendimento médico."
        </p>
      </div>
    </div>
  );
}
