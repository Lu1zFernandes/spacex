/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";

import Link from "next/link";

export default function humanSpace() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {"<!--Favicon-->"}
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        {"<!--Bootstrap Css-->"}
        <title>OnebitX - Human Space</title>
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

        <div class="container-fluid container00 container08">
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
                          class="nav-link active navbarText"
                          aria-current="page"
                          href="/falcon9"
                          id="navItemHuman"
                        >
                          FALCON 9
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link active"
                          href="/humanSpace"
                          id="navItemHuman"
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
            class="container text-center container01Content"
            data-aos="zoom-in"
            data-aos-duration="1700"
          >
            <p class="h1 titleHuman">HUMAN SPACEFLIGHT</p>
            <p class="subTitleHuman">Fazendo a vida multiplanetária</p>
            <img
              src="/humanFlight/arrowDown.gif"
              alt="arrowDown"
              class="arrowDown"
            />
          </div>
        </div>

        <div class="container-fluid text-center earthDesc">
          <p class="textDescEarth" data-aos="zoom-in" data-aos-duration="1500">
            SpaceX também oferece voos cormeciais para orbita terrestre e lunar.
            Para começar a planejar a sua jornada, por favor contate-nos por
            <a
              href="https://www.linkedin.com/in/luiz-fernandes-matos-neves-a74a9a203/"
              target="blank"
              class="emailObc"
            >
              onebitcode@gmail.com
            </a>
          </p>
        </div>

        <div class="container-fluid container00 container09">
          <div
            class="containerRightContent"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <p>Missão</p>
            <p class="h2 titleSection">Órbita da Terra</p>
            <p class="subTitle">Experimente o planeta azul a 300km de altura</p>
            <button type="button" class="btn btn-outline-light py-3 px-5">
              Explorar
            </button>
          </div>
        </div>

        <div class="container-fluid container00 container10">
          <div
            class="containerLeftContent"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <p>Missão</p>
            <p class="h2 titleSection">Estação Espacial</p>
            <p class="subTitle">
              Transportando humanos para o laboratório voador no céu
            </p>
            <button type="button" class="btn btn-outline-light py-3 px-5">
              Explorar
            </button>
          </div>
        </div>

        <div class="container-fluid container00 container11">
          <div
            class="containerRightContent"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <p>Missão</p>
            <p class="h2 titleSection">Lua</p>
            <p class="subTitle">Retornando humanos para a nossa lua vizinha</p>
            <button type="button" class="btn btn-outline-light py-3 px-5">
              Explorar
            </button>
          </div>
        </div>

        <div class="container-fluid container00 container12">
          <div
            class="containerLeftContent"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <p>Missão</p>
            <p class="h2 titleSection">Marte e além</p>
            <p class="subTitle">
              O caminho para tornar a humanidade multiplanetária
            </p>
            <button type="button" class="btn btn-outline-light py-3 px-5">
              Explorar
            </button>
          </div>
        </div>

        <div
          class="container-fluid text-center downloadDesc"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <p>
            Para mais informações sobre os serviçoes entre em contato com
            <a
              href="mailto:luiz.fernandes31matos@gmail.com"
              target="blank"
              class="emailObc"
            >
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
