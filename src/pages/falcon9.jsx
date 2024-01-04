/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";

import Link from "next/link";

export default function Falcon9() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {"<!--Favicon-->"}
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        {"<!--Bootstrap Css-->"}
        <title>OnebitX - Falcon9</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        {"<!--Lib Text Css-->"}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        {"<!--Css Link-->"}
        <link rel="stylesheet" href="./css/style.css" />
      </Head>
      <main>
        <img
          style={{ display: "none" }}
          src="/87e11eeeaad022ab976f8f86047c3bd1.gif"
          alt="bocchiEaster-egg"
        />

        <div class="container-fluid container00 container05">
          <div class="container">
            <header class="header">
              <nav class="navbar navbar-expand-lg navbar-dark bg-transparent pt-4">
                <div class="container-fluid">
                  <Link href="/">
                    <img
                      src="/logo-obc-2021-darkbg.png"
                      alt="LogoOBC"
                      class="logoPc img-fluid"
                    />
                  </Link>

                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <Link
                          class="nav-link active"
                          aria-current="page"
                          href="/falcon9"
                          id="navItem"
                        >
                          FALCON 9
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link active"
                          href="/humanSpace"
                          id="navItem"
                        >
                          HUMAN SPACE FLIGHT
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
          </div>

          <div
            class="container text-center titleContent"
            data-aos="zoom-out"
            data-aos-duration="1500"
          >
            <p class="h1 titleFalcon9">FALCON 9</p>
            <p class="h5 subTitleFalcon">
              Primeira classe de foguete de órbita capaz de voltar
            </p>
          </div>
        </div>

        <div class="container-fluid numbers">
          <div
            class="row text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1500"
          >
            <div class="col-sm col1">
              <p class="h1 titleNumb">126</p>
              <p class="subTitleNumb">Lançamentos Totais</p>
            </div>

            <div class="col">
              <p class="h1 titleNumb">85</p>
              <p class="subTitleNumb">Desembarques Totais</p>
            </div>

            <div class="col-sm col3">
              <p class="h1 titleNumb">68</p>
              <p class="subTitleNumb">Foguetes recuperados</p>
            </div>
          </div>
        </div>

        <div class="container-fluid container00 container06">
          <div
            class="container containerFalcon9Desc"
            data-aos="flip-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <p class="falcon9Desc">
              O Falcon 9 é um foguete reutilizável de dois estágios projetado e
              fabricado pela SpaceX para o transporte confiável e seguro de
              pessoas e cargas úteis para a órbita da Terra e além. Falcon 9 é o
              primeiro foguete reutilizável de classe orbital do mundo. A
              capacidade de reutilização permite que a SpaceX refile as partes
              mais caras do foguete, o que, por sua vez, reduz o custo do acesso
              ao espaço.
            </p>
          </div>
        </div>

        <div
          id="carouselExampleControls"
          class="carousel slide slidesOfCarousel"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              class="carousel-item active container00 carrossel01"
              data-bs-interval="100000000"
            >
              <div class="container" id="overViewPosition">
                <p class="subTitleOvewView">Falcon 9</p>
                <p class="h3 titleOverView">Visão Geral</p>
                <table class="table" id="widthTable2">
                  <tbody>
                    <tr data-aos="fade-up" data-aos-duration="1500">
                      <td>ALTURA</td>
                      <td class="text-end">
                        70 m<span class="corEscuraTxt">/ 229.6 f</span>
                      </td>
                    </tr>
                    <tr data-aos="fade-up" data-aos-duration="1200">
                      <td>DIAMETRO</td>
                      <td class="text-end">
                        3.7 m<span class="corEscuraTxt"> / 12 ft</span>
                      </td>
                    </tr>
                    <tr data-aos="fade-up" data-aos-duration="1500">
                      <td>MASSA</td>
                      <td class="text-end">
                        549,054 kg
                        <span class="corEscuraTxt"> / 1,207,920 lb</span>
                      </td>
                    </tr>
                    <tr data-aos="fade-up" data-aos-duration="1400">
                      <td>CARGA MÁXIMA PARA LEO</td>
                      <td class="text-end">
                        22,800 kg<span class="corEscuraTxt"> / 50,265 lb</span>
                      </td>
                    </tr>
                    <tr data-aos="fade-up" data-aos-duration="1600">
                      <td>CARGA MÁXIMA PARA GTO</td>
                      <td class="text-end">
                        8,300 kg<span class="corEscuraTxt"> / 18,300 lb</span>
                      </td>
                    </tr>
                    <tr data-aos="fade-up" data-aos-duration="1300">
                      <td>CARGA MÁXIMA PARA MARTE</td>
                      <td class="text-end">
                        4,020 kg<span class="corEscuraTxt"> / 8,860 lb</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              class="carousel-item container00 carrossel02"
              data-bs-interval="100000000"
            >
              <div class="container" id="overViewPosition">
                <p class="subTitleOvewView">Falcon 9</p>
                <p class="h3 titleOverView">Primeiro Estágio</p>
                <p class="description">
                  Falcon 9's O primeiro estágio do Falcon 9 incorpora nove
                  motores Merlin e tanques de liga de alumínio-lítio contendo
                  oxigênio líquido e propelente de querosene de grau de foguete
                  (RP-1).
                </p>
                <p class="description">
                  O Falcon 9 gera mais de 1,7 milhão de libras de empuxo ao
                  nível do mar.
                </p>
              </div>
            </div>

            <div
              class="carousel-item container00 carrossel03"
              data-bs-interval="100000000"
            >
              <div class="container" id="overViewPosition">
                <p class="subTitleOvewView">Falcon 9</p>
                <p class="h3 titleOverView">Segundo Estágio</p>
                <p class="description">
                  O segundo estágio, alimentado por um único motor a vácuo
                  Merlin, entrega a carga útil do Falcon 9 à órbita desejada. O
                  motor do segundo estágio acende alguns segundos após a
                  separação do estágio e pode ser reiniciado várias vezes para
                  colocar várias cargas em diferentes órbitas.
                </p>
                <table class="table" id="widthTable">
                  <tbody>
                    <tr>
                      <td>NÚMERO DE MOTORES</td>
                      <td class="text-end">1 vacuum</td>
                    </tr>
                    <tr>
                      <td>TEMPO DE QUEIMA</td>
                      <td class="text-end">397seg</td>
                    </tr>
                    <tr>
                      <td>IMPULSO</td>
                      <td class="text-end">
                        981 kN <span>/ 220.500 lbf</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              class="carousel-item container00 carrossel04"
              data-bs-interval="100000000"
            >
              <div class="container" id="overViewPosition">
                <p class="subTitleOvewView">Falcon 9</p>
                <p class="h3 titleOverView">Interestadual</p>
                <p class="description">
                  A interestadual é uma estrutura composta que conecta o
                  primeiro e o segundo estágios e abriga os empurradores
                  pneumáticos que permitem que o primeiro e o segundo estágios
                  se separem durante o vôo.
                </p>
                <p style={{ fontSize: "18px" }}>ALETAS DE GRADE</p>
                <p class="description">
                  O Falcon 9 está equipado com quatro aletas de grade
                  hipersônicas posicionadas na base da interestadual. Eles
                  orientam o foguete durante a reentrada, movendo o centro de
                  pressão.
                </p>
              </div>
            </div>

            <div
              class="carousel-item container00 carrossel05"
              data-bs-interval="100000000"
            >
              <div class="container" id="overViewPosition">
                <p class="subTitleOvewView">Falcon 9</p>
                <p class="h3 titleOverView">Carga útil</p>
                <p class="description">
                  Feita de um material composto de carbono, a carenagem protege
                  os satélites em seu caminho para a órbita. A carenagem é
                  lançada a aproximadamente 3 minutos em vôo, e a SpaceX
                  continua a recuperar as carenagens para reutilização em
                  missões futuras.
                </p>
                <table class="table" id="widthTable">
                  <tbody>
                    <tr>
                      <td>ALTURA</td>
                      <td class="text-end">
                        13,1m <span>/43 ft</span>
                      </td>
                    </tr>
                    <tr>
                      <td>DIÂMETRO</td>
                      <td class="text-end">
                        5,2m <span>/17,1 ft</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Próximo</span>
          </button>
        </div>

        <div class="container-fluid container00 container07">
          <div
            class="container"
            id="overViewPosition"
            data-aos="fade-down"
            data-aos-duration="1300"
          >
            <p class="subTitleOvewView">FALCON 9</p>
            <h3 class="titleOverView">MERLIN</h3>
            <p>
              Merlin é uma família de motores de foguete desenvolvidos pela
              SpaceX para uso em seus veículos de lançamento Falcon 1, Falcon 9
              e Falcon Heavy. Os motores Merlin usam querosene de grau de
              foguete (RP-1) e oxigênio líquido como propelentes de foguete em
              um ciclo de energia de gerador a gás. O motor Merlin foi
              originalmente projetado para recuperação e reutilização.
            </p>
            <table class="table" id="widthTable">
              <tbody>
                <tr>
                  <td>PROPULSOR</td>
                  <td class="text-end">
                    LOX <span>/ RP-1</span>
                  </td>
                </tr>
                <tr>
                  <td>IMPULSO</td>
                  <td class="text-end">
                    845 kN <span>/ 190.000 lbf</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          id="carouselExampleCaptions"
          class="carousel slide carrosselSlide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="1000000">
              <img src="falcon9/09.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-md-block">
                <p class="carousselText">
                  O Falcon 9 lança o Dragon para a Estação Espacial
                  Internacional do Complexo de Lançamento 39A
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000000">
              <img src="falcon9/10.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-md-block">
                <p class="carousselText">
                  Primeiro e segundo estágio após a separação de voo
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000000">
              <img src="falcon9/11.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-md-block">
                <p class="carousselText">
                  Falcon 9 decola com sua carga útil Iridium-5
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000000">
              <img src="falcon9/12.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-md-block">
                <p class="carousselText">
                  Falcon 9 pousando no droneship para ler as instruções
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000000">
              <img src="falcon9/13.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-md-block">
                <p class="carousselText">
                  Clone dos motores Merlin do Falcon 9 durante a decolagem
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000000">
              <img src="falcon9/14.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-md-block">
                <p class="carousselText">
                  O falcon 9 deixa um rastro de luz ao decolar da Base Aérea de
                  Vandenberg
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div
          class="container-fluid text-center downloadDesc"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <p>
            Para mais informações sobre os serviçoes entre em contato com a
            &nbsp;
            <a href="mailto:luiz.fernandes31matos@gmail.com" target="blank">
              onebitcode@gmail.com
            </a>
          </p>

          <button type="button" class="btn btn-outline-light p-3">
            BAIXAR GUIA DO USUÁRIO
          </button>
          <button type="button" class="btn btn-outline-light p-3">
            CAPACIDADES E SERVIÇOS
          </button>
        </div>
        <footer class="container-fluid footer">
          <span class="me-4 copyOBC">OneBitCode &copy;2021</span>
          <a
            href="https://www.linkedin.com/in/luiz-fernandes-matos-neves-a74a9a203/"
            target="_blank"
            class="me-4"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/luiz-fernandes-matos-neves-a74a9a203/"
            target="_blank"
            class="me-4"
          >
            Youtube
          </a>
          <a
            class="emailObc"
            href="https://www.linkedin.com/in/luiz-fernandes-matos-neves-a74a9a203/"
            target="_blank"
          >
            Twitter
          </a>
        </footer>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>

        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </main>
    </>
  );
}
