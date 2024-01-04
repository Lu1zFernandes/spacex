/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Página inspirada no site da SpaceX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>OnebitX - Home</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <span style={{ display: "none" }}>
          <img
            src="/87e11eeeaad022ab976f8f86047c3bd1.gif"
            alt="bocchiEaster-egg"
          />
        </span>

        <div class="container-fluid container00 container01">
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
                          id="navItem"
                          href="/falcon9"
                        >
                          FALCON 9
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          class="nav-link active"
                          aria-current="page"
                          id="navItem"
                          href="/humanSpace"
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
            class="container titlePadding"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <p class="h5" id="launchComing">
              Lançamento a Caminho
            </p>
            <p class="h1 mediumTitle">Missão equipe-3</p>
            <button
              type="button"
              class="btn btn-outline-light mt-5"
              id="button"
            >
              Saiba Mais
            </button>
            <div class="container text-center">
              <img
                src="/humanFlight/arrowDown.gif"
                alt="arrowDown"
                class="arrowDown"
              />
            </div>
          </div>
        </div>
        <div class="container-fluid container00 container02">
          <div
            class="container titlePadding"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p class="h5" id="launchComing">
              Missão Concluída
            </p>
            <p class="h1 shortTitle">Missão equipe-2 retornou para a Terra</p>
            <button
              type="button"
              class="btn btn-outline-light mt-5"
              id="button"
            >
              Saiba Mais
            </button>
          </div>
        </div>
        <div class="container-fluid container00 container03">
          <div
            class="container titlePadding"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <p class="h5" id="launchComing">
              Missão Concluída
            </p>
            <p class="h1 shortTitle">Dragon Retornou para a Terra</p>
            <button
              type="button"
              class="btn btn-outline-light mt-5"
              id="button"
            >
              Saiba Mais
            </button>
          </div>
        </div>
        <div class="container-fluid container00 container04">
          <div
            class="container titlePadding"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <p class="h1 mediumTitle">
              Starship pousa astronautas da NASA na Lua
            </p>
            <button
              type="button"
              class="btn btn-outline-light mt-5"
              id="button"
            >
              Saiba Mais
            </button>
          </div>
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
        <script>AOS.init()</script>
      </main>
    </>
  );
}
