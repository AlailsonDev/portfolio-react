import lightmode from "../images/lightmode.png";
import fontemaior from "../images/fonte-maior.png";
import foto from "../images/foto.jpeg";
import menorque from "../images/menorque.png";
import maiorque from "../images/maiorque.png";
import portlens from "../images/portfolio/port-lens.png";
import portbuen from "../images/portfolio/port-buen.png";
import portrecife from "../images/portfolio/port-recife.png";
import portvanart from "../images/portfolio/port-vanart.png";
import React, { useEffect } from "react";

function LightMode() {
  const lightMode = document.body;

  lightMode.classList.toggle("light");

  if (lightMode.classList.contains("light")) {
    localStorage.setItem("modo", "LightMode");
  } else {
    localStorage.setItem("modo", "DarkMode");
  }
}

function Acessibility() {
  const fontSize = document.body;

  fontSize.classList.toggle("acessibility");

  if (fontSize.classList.contains("acessibility")) {
    localStorage.setItem("modo2", "Acessibility");
  } else {
    localStorage.setItem("modo2", "Normal");
  }
}

function Main() {
  useEffect(() => {
    const modoAtual = localStorage.getItem("modo");
    if (modoAtual === "LightMode") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, []);

  useEffect(() => {
    const modoAtual = localStorage.getItem("modo2");
    if (modoAtual === "Acessibility") {
      document.body.classList.add("acessibility");
    } else {
      document.body.classList.remove("acessibility");
    }
  }, []);

  return (
    <main class="main">
      <div class="acessibility">
        <img class="light-mode" src={lightmode} alt="" onClick={LightMode} />

        <img
          class="acessibility-mode"
          src={fontemaior}
          alt=""
          onClick={Acessibility}
        />
      </div>

      <img class="photo" src={foto} alt="foto" />
      <div class="greetings">
        <p class="greetings-paragraph">Olá! Me chamo Alailson Barbosa </p>
        {/* <img src={menorque} alt="menorque" class="greetings-img" />
        <p class="greetings-paragraph">Alailson Barbosa</p>
        <img src={maiorque} alt="maiorque" class="greetings-img" /> */}
      </div>
      <p class="main-paragraph">
        Sou um Desenvolvedor Front End. Gosto de desenvolver coisas legais para
        pessoas legais.
      </p>
      <a href="#contact">
        <button class="main-btn">FALE COMIGO</button>
      </a>

      <a href="#top">
        <p class="back">↑</p>
      </a>
      <div class="portfolio">
        <p class="portfolio-title" id="portfolio">
          {" portfolio "}
        </p>
        <div class="item1">
          <img src={portlens} alt="img-site" class="img-site" />
          <p class="portfolio-subtitle">_Lens</p>
        </div>
        <div class="item2">
          <img src={portbuen} alt="img-site" class="img-site" />
          <p class="portfolio-subtitle">_BuenProvecho</p>
        </div>
        <div class="item3">
          <img src={portrecife} alt="img-site" class="img-site" />
          <p class="portfolio-subtitle">_Visite</p>
        </div>
        <div class="item4">
          <img src={portvanart} alt="img-site" class="img-site" />

          <p class="portfolio-subtitle">_VanArt</p>
        </div>
      </div>
      <div class="about">
        <p class="about-title" id="about">
          {" sobre_mim "}
        </p>
        <p class="about-paragraph">
          ...Possuo 2 anos de experiência no desenvolvimento web, com forte
          ligação na stack de front end;
        </p>
        <p class="about-paragraph2">
          ...Tenho como pontos fortes minha criatividade, versatilidade para
          desenvolver em qualquer segmento, trabalho muito bem em equipe,
          procuro sempre inovar ao realizar minhas atividades e busco sempre
          concluir uma tarefa com excelência.
        </p>
      </div>
      <div class="contact">
        <p class="contact-title" id="contact">
          {" contato "}
        </p>
        <form action="" class="form-contact">
          <label for="nome">Nome: </label>
          <input type="text" id="nome" class="contact-input" required />
          <label for="email">Email: </label>
          <input type="email" id="email" class="contact-input" required />
          <label for="telefone">Telefone: </label>
          <input
            type="tel"
            name="telefone"
            id="telefone"
            class="contact-input"
            required
          />
          <label for="mensagem">Mensagem: </label>
          <textarea
            name="mensagem"
            id="mensagem"
            cols="50"
            rows="10"
            class="contact-input-text"
          ></textarea>
          <button class="form-btn" id="contact">
            ENVIAR
          </button>
        </form>
      </div>
    </main>
  );
}

export default Main;
