import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './css/Home/Home.css'
import fotoPrincipal from '../img/idoso_logo.png'

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
        <img id="fotoIdoso" src={fotoPrincipal} alt="fotoDeUmIdoso" />
      </div>
      <div id="oqSolucao">
        <h1>Qual é a nossa solução?</h1>
        <p id="solucaoTxt">
        Illtracker: A mistura de um aplicativo e dispositivos inteligentes 
        que irão em conjunto armazenar sintomas e medidas como batimento cardiaco e temperatura.
        </p>
      </div>
      <div id="oqFara">
        <h1>O que faremos</h1>
        <p id="oqFaraTxt">MediAlert promete melhorar 
        significativamente a adesão ao tratamento médico, 
        reduzindo os riscos associados ao esquecimento de 
        medicamentos. Ao oferecer lembretes personalizados 
        para cada dose, o aplicativo assegura que os usuários 
        tomem seus medicamentos no horário correto. Em 
        situações de emergência, como uma queda, o usuário 
        pode utilizar o botão de emergência integrado para 
        notificar imediatamente os cuidadores, garantindo uma 
        resposta rápida e eficiente</p>
      </div>
      <div id="comoFuncionara">
        <h1>Como funcionara</h1>
        <p id="comoFuncionaraTxt">Os usuários do MediAlert 
        podem facilmente adicionar todos os seus medicamentos 
        no aplicativo, especificando o nome, dosagem e horários
         de ingestão. O aplicativo então envia lembretes 
         automáticos quando é hora de tomar cada medicamento. 
         Em caso de não confirmação da ingestão, os cuidadores 
         são alertados. Além disso, o aplicativo está equipado 
         com um sensor de queda, que detecta quedas e aciona 
         automaticamente um alerta para os cuidadores. O botão 
         de emergência oferece uma camada adicional de 
         segurança, permitindo que o usuário avise seus 
         cuidadores em situações críticas.</p>
      </div>
      <div id="textoSobre">
        <p id="sobreTxt">O MediAlert, um assistente inteligente 
        inovador, transforma o tratamento médico ao simplificar a 
        administração de medicamentos. Com lembretes precisos, ele 
        assegura a adesão correta ao regime de medicação, crucial 
        para a eficácia do tratamento.</p>
      </div>
      
      <div id="tituloSolucao">
        <p id="txtTitulo">O assistente da sua saúde</p>
      </div>
      <div id="solucao">
        <p id="txtSolucao">O MediAlert, um assistente inteligente 
        inovador, transforma o tratamento médico ao simplificar a 
        administração de medicamentos. Com lembretes precisos, ele 
        assegura a adesão correta ao regime de medicação, crucial 
        para a eficácia do tratamento.</p>
      </div>
      <div id="vantagens">
        <div id="vantagem1" className="vantagem">
          <h1>Nossas Vantagens:</h1>
          <p id="vantagensTxt1" className="vantagensTxt">
          "O "illTracker" oferece aos pacientes a oportunidade de manter um registro diário e detalhado de seus sintomas, como náusea, diarreia, dor muscular, enxaqueca, entre outros, e da ingestão de medicamentos ao longo do dia. Essa funcionalidade proporciona um histórico preciso e atualizado das condições de saúde do paciente, facilitando a comunicação eficiente com os profissionais de saúde."
          </p>
        </div>
        <div id="vantagem2" className="vantagem">
        
        <p id="vantagensTxt2" className="vantagensTxt">
        "Ao chegar ao hospital, o paciente precisa apenas fornecer o código do seu perfil no aplicativo, permitindo a recuperação instantânea de todas as informações pertinentes para a criação do registro hospitalar. Essa agilidade elimina a necessidade de preenchimento repetitivo de formulários e acelera o processo de atendimento, contribuindo para uma experiência mais eficiente e conveniente para o paciente."
        </p>
        </div>
        <div id="vantagem3" className="vantagem">
        
        <p id="vantagensTxt3" className="vantagensTxt">
        " A abordagem do "illTracker" visa eliminar perguntas extensas durante as consultas médicas, como aquelas relacionadas a medicamentos recentemente tomados ou sintomas nas últimas semanas. O acesso ao histórico medicamentoso e aos registros de sintomas nos últimos meses permite ao médico realizar uma análise mais aprofundada da condição do paciente. Isso não apenas economiza tempo durante a consulta, mas também permite uma abordagem mais direta e personalizada, contribuindo para a eficiência do atendimento médico."
        </p>
        </div>
      </div>
    </div>
  );
}
