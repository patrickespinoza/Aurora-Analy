import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Countdown from "./encabeza-cuenta";

/* =========================================
   PORTADA CLÁSICA EDITORIAL
========================================= */

const palette = {
  ink: "#1D2733",
  inkSoft: "#35404B",
  paper: "#F5F1E8",
  paperLight: "#FBF9F4",
  paperDark: "#DED6C8",
  antiqueGold: "#A48654",
  antiqueGoldDark: "#755E39",
  warmGray: "#777168",
  line: "#C8BDAA",
};

const transition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 76V25C4 13.4 13.4 4 25 4h51"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M13 64V29c0-8.8 7.2-16 16-16h35"
        stroke="currentColor"
        strokeWidth="0.65"
      />

      <path
        d="M25 4c0 11.6-9.4 21-21 21"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <circle cx="13" cy="13" r="1.8" fill="currentColor" />

      <path
        d="M18 18c10 3 17 10 20 20"
        stroke="currentColor"
        strokeWidth="0.65"
      />
    </svg>
  );
}

function DecorativeDivider({ dark = false }) {
  return (
    <div className="flex w-full items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{
          background: dark
            ? "linear-gradient(to right, transparent, rgba(164,134,84,0.8))"
            : "linear-gradient(to right, transparent, rgba(164,134,84,0.65))",
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: dark
            ? "rgba(164,134,84,0.85)"
            : "rgba(164,134,84,0.7)",
        }}
      />

      <span
        className="h-px w-10 sm:w-16"
        style={{
          background: dark
            ? "linear-gradient(to left, transparent, rgba(164,134,84,0.8))"
            : "linear-gradient(to left, transparent, rgba(164,134,84,0.65))",
        }}
      />
    </div>
  );
}

export default function Portada() {
  const audioRef = useRef(null);

  const [introActiva, setIntroActiva] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [abrirSobre, setAbrirSobre] = useState(false);
  const [procesandoApertura, setProcesandoApertura] = useState(false);

  const [invitados, setInvitados] = useState("Invitado");
  const [pases, setPases] = useState(1);

  /* =========================================
     DATOS PERSONALIZADOS DESDE LA URL
  ========================================= */

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    setInvitados("Invitado");
    setPases(1);
    return;
  }

  try {
    // Recuperar caracteres que pudieron cambiar dentro de la URL.
    const idNormalizado = decodeURIComponent(id)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    // Agregar padding de Base64 cuando sea necesario.
    const paddingFaltante = idNormalizado.length % 4;
    const idConPadding =
      paddingFaltante === 0
        ? idNormalizado
        : idNormalizado + "=".repeat(4 - paddingFaltante);

    // Decodificar Base64.
    const textoInvertido = atob(idConPadding);

    // Volver al orden original.
    const textoOriginal = textoInvertido
      .split("")
      .reverse()
      .join("");

    // Recuperar los datos.
    const datos = JSON.parse(textoOriginal);

    const nombreDecodificado =
      typeof datos.nombre === "string"
        ? datos.nombre.trim()
        : "";

    const pasesDecodificados = Number.parseInt(datos.pases, 10);

    if (nombreDecodificado) {
      setInvitados(nombreDecodificado);
    }

    if (
      !Number.isNaN(pasesDecodificados) &&
      pasesDecodificados > 0
    ) {
      setPases(pasesDecodificados);
    }
  } catch (error) {
    console.error(
      "No se pudieron decodificar los datos de la invitación:",
      error
    );

    setInvitados("Invitado");
    setPases("");
  }
}, []);


useEffect(() => {
  if (!introActiva) return;

  const scrollAnterior = window.scrollY;

  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });

  return () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    window.scrollTo({
      top: scrollAnterior > 0 ? 0 : scrollAnterior,
      left: 0,
      behavior: "auto",
    });
  };
}, [introActiva]);
  /* =========================================
     ABRIR INVITACIÓN
  ========================================= */

  const iniciarExperiencia = () => {
  if (procesandoApertura || abrirSobre) return;

  setProcesandoApertura(true);

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });

  setAbrirSobre(true);

  window.setTimeout(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.45;

      audioRef.current.play().catch((error) => {
        console.warn("No se pudo reproducir el audio:", error);
      });
    }
  }, 400);

  window.setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    setIntroActiva(false);
    setMostrarContenido(true);
    setProcesandoApertura(false);
  }, 1900);
};

  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
      "
      style={{
        backgroundColor: palette.paperLight,
        color: palette.ink,
      }}
    >
      {/* AUDIO */}

      <audio ref={audioRef} loop preload="auto">
        <source src="/TylerShaw.mp3" type="audio/mpeg" />
      </audio>

      {/* =========================================
          INTRO DEL SOBRE
      ========================================= */}

      <AnimatePresence mode="wait">
        {introActiva && (
          <motion.section
  key="intro-clasica"
  className="
    fixed
    inset-0
    z-[9999]
    flex
    h-[100dvh]
    w-full
    items-center
    justify-center
    overflow-hidden
    overscroll-none
    px-4
    py-3
    sm:px-8
    lg:px-12
  "
  style={{
    backgroundColor: palette.paperLight,
    backgroundImage: `
      repeating-linear-gradient(
        0deg,
        rgba(53,64,75,0.018) 0px,
        rgba(53,64,75,0.018) 1px,
        transparent 1px,
        transparent 5px
      )
    `,
    touchAction: "none",
  }}
  initial={{ opacity: 1 }}
  exit={{
    opacity: 0,
    scale: 1.01,
  }}
  transition={{
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1],
  }}
>
            {/* MARCO EXTERIOR */}

            <div
              className="
                pointer-events-none
                absolute
                inset-4
                border
                sm:inset-7
                lg:inset-9
              "
              style={{
                borderColor: "rgba(164,134,84,0.3)",
              }}
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-[21px]
                border
                sm:inset-[34px]
                lg:inset-[42px]
              "
              style={{
                borderColor: "rgba(164,134,84,0.12)",
              }}
            />

            <CornerOrnament
              className="
                pointer-events-none
                absolute
                left-5
                top-5
                h-16
                w-16
                text-[#A48654]/50
                sm:left-8
                sm:top-8
                sm:h-20
                sm:w-20
              "
            />

            <CornerOrnament
              className="
                pointer-events-none
                absolute
                right-5
                top-5
                h-16
                w-16
                rotate-90
                text-[#A48654]/50
                sm:right-8
                sm:top-8
                sm:h-20
                sm:w-20
              "
            />

            <CornerOrnament
              className="
                pointer-events-none
                absolute
                bottom-5
                left-5
                h-16
                w-16
                -rotate-90
                text-[#A48654]/50
                sm:bottom-8
                sm:left-8
                sm:h-20
                sm:w-20
              "
            />

            <CornerOrnament
              className="
                pointer-events-none
                absolute
                bottom-5
                right-5
                h-16
                w-16
                rotate-180
                text-[#A48654]/50
                sm:bottom-8
                sm:right-8
                sm:h-20
                sm:w-20
              "
            />

            <div
              className="
                relative
                z-10
                mx-auto
                grid
                w-full
                max-w-6xl
                items-center
                gap-4
                sm:gap-8
                lg:grid-cols-[0.95fr_1.05fr]
                lg:gap-16
                xl:gap-24
              "
            >
              {/* PRESENTACIÓN */}

              <motion.div
                className="
                  order-1
                  flex
                  flex-col
                  items-center
                  text-center
                  lg:items-start
                  lg:text-left
                "
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...transition,
                  delay: 0.1,
                }}
              >
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.42em]
                    sm:text-[10px]
                  "
                  style={{ color: palette.antiqueGoldDark }}
                >
                  Invitación de boda
                </p>

                <div
                  className="
                    mt-3
                    sm:mt-6
                    h-px
                    w-16
                    lg:w-20
                  "
                  style={{
                    backgroundColor: "rgba(164,134,84,0.7)",
                  }}
                />

                <p
                  className="
                    mt-3
                    sm:mt-7
                    font-serif
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    sm:text-sm
                  "
                  style={{ color: palette.warmGray }}
                >
                  Junto con nuestras familias
                </p>

                <h1
                  className="
                    mt-3
                    sm:mt-6
                    font-serif
                    text-[34px]
                    font-normal
                    leading-[0.95]
                    tracking-[-0.025em]
                    sm:text-[60px]
                    md:text-[68px]
                    lg:text-[62px]
                    xl:text-[76px]
                  "
                  style={{ color: palette.ink }}
                >
                  Valeria
                </h1>

                <span
                  className="
                    my-1
                    sm:my-2
                    font-cursiveDancing
                    text-2xl
                    sm:text-4xl
                  "
                  style={{ color: palette.antiqueGold }}
                >
                  &
                </span>

                <h1
                  className="
                    font-serif
                    text-[34px]
                    font-normal
                    leading-[0.95]
                    tracking-[-0.025em]
                    sm:text-[60px]
                    md:text-[68px]
                    lg:text-[62px]
                    xl:text-[76px]
                  "
                  style={{ color: palette.ink }}
                >
                  Alejandro
                </h1>

                <div className="mt-4 w-full max-w-[220px] sm:mt-8 sm:max-w-[260px]">
                  <DecorativeDivider />
                </div>

                <p
                  className="
                    mt-3
                    sm:mt-6
                    font-serif
                    text-[10px]
                    uppercase
                    tracking-[0.32em]
                    sm:text-sm
                  "
                  style={{ color: palette.inkSoft }}
                >
                  11 · Junio · 2027
                </p>

                <p
                  className="
                    mt-3
                    sm:mt-5
                    max-w-md
                    font-serif
                    text-[12px]
                    italic
                    leading-5
                    sm:text-base
                    sm:leading-7
                  "
                  style={{ color: palette.warmGray }}
                >
                  Hay momentos que cambian nuestra historia para siempre.
                  Queremos compartir este con ustedes.
                </p>
              </motion.div>

              {/* SOBRE E INFORMACIÓN DEL INVITADO */}

              <motion.div
                className="
                  order-2
                  flex
                  w-full
                  flex-col
                  items-center
                  justify-center
                "
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...transition,
                  delay: 0.25,
                }}
              >
                <div
                  onClick={iniciarExperiencia}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      iniciarExperiencia();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Abrir invitación"
                  className="
                    group
                    relative
                    aspect-[350/235]
                    w-[76vw]
                    max-w-[300px]
                    sm:w-[88vw]
                    sm:max-w-[420px]
                    cursor-pointer
                    outline-none
                    lg:w-full
                    lg:max-w-[430px]
                  "
                  style={{
                    perspective: 2200,
                  }}
                >
                  {/* SOMBRA DEL SOBRE */}

                  <div
                    className="
                      absolute
                      -bottom-7
                      left-1/2
                      h-12
                      w-[72%]
                      -translate-x-1/2
                      rounded-full
                      bg-black/15
                      blur-2xl
                    "
                  />

                  {/* CARTA INTERIOR */}

                  <motion.div
                    className="
                      absolute
                      left-1/2
                      top-[9%]
                      z-10
                      flex
                      h-[78%]
                      w-[82%]
                      -translate-x-1/2
                      flex-col
                      items-center
                      justify-center
                      overflow-hidden
                      border
                      px-5
                      py-5
                      text-center
                    "
                    style={{
                      backgroundColor: palette.paperLight,
                      borderColor: "rgba(164,134,84,0.32)",
                      boxShadow: "0 14px 30px rgba(29,39,51,0.13)",
                    }}
                    animate={
                      abrirSobre
                        ? {
                            y: -82,
                            scale: 1.015,
                          }
                        : {
                            y: 0,
                            scale: 1,
                          }
                    }
                    transition={{
                      duration: 1.15,
                      delay: abrirSobre ? 0.3 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <CornerOrnament
                      className="
                        absolute
                        left-2
                        top-2
                        h-10
                        w-10
                        text-[#A48654]/35
                      "
                    />

                    <CornerOrnament
                      className="
                        absolute
                        bottom-2
                        right-2
                        h-10
                        w-10
                        rotate-180
                        text-[#A48654]/35
                      "
                    />

                    <p
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.38em]
                        sm:text-[8px]
                      "
                      style={{ color: palette.antiqueGoldDark }}
                    >
                      The wedding of
                    </p>

                    <div
                      className="
                        my-4
                        h-px
                        w-12
                      "
                      style={{
                        backgroundColor: "rgba(164,134,84,0.65)",
                      }}
                    />

                    <p
                      className="
                        font-serif
                        text-[21px]
                        leading-tight
                        sm:text-[25px]
                      "
                      style={{ color: palette.ink }}
                    >
                      Valeria
                    </p>

                    <span
                      className="
                        my-0.5
                        font-cursiveDancing
                        text-lg
                        sm:text-xl
                      "
                      style={{ color: palette.antiqueGold }}
                    >
                      &
                    </span>

                    <p
                      className="
                        font-serif
                        text-[21px]
                        leading-tight
                        sm:text-[25px]
                      "
                      style={{ color: palette.ink }}
                    >
                      Alejandro
                    </p>

                    <p
                      className="
                        mt-4
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        sm:text-[8px]
                      "
                      style={{ color: palette.warmGray }}
                    >
                      11 · 06 · 2027
                    </p>
                  </motion.div>

                  {/* CUERPO DEL SOBRE */}

                  <motion.div
                    className="
                      absolute
                      inset-0
                      overflow-hidden
                      border
                    "
                    style={{
                      background: `
                        linear-gradient(
                          145deg,
                          #E8E0D2 0%,
                          #DCD2C1 52%,
                          #CFC3B0 100%
                        )
                      `,
                      borderColor: "rgba(117,94,57,0.25)",
                      boxShadow: `
                        0 28px 55px rgba(29,39,51,0.16),
                        inset 0 1px 0 rgba(255,255,255,0.65)
                      `,
                    }}
                    animate={
                      abrirSobre
                        ? {
                            scale: 1.012,
                            y: 6,
                          }
                        : {
                            scale: 1,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* TEXTURA DE PAPEL */}

                    <div
                      className="absolute inset-0 opacity-[0.15]"
                      style={{
                        backgroundImage: `
                          repeating-linear-gradient(
                            90deg,
                            rgba(53,64,75,0.08) 0px,
                            rgba(53,64,75,0.08) 1px,
                            transparent 1px,
                            transparent 5px
                          )
                        `,
                      }}
                    />

                    {/* SOLAPAS INFERIORES */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[72%]
                        w-[53%]
                        border-t
                      "
                      style={{
                        clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                        borderColor: "rgba(117,94,57,0.15)",
                        background:
                          "linear-gradient(145deg, rgba(255,255,255,0.16), transparent)",
                      }}
                    />

                    <div
                      className="
                        absolute
                        bottom-0
                        right-0
                        h-[72%]
                        w-[53%]
                        border-t
                      "
                      style={{
                        clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                        borderColor: "rgba(117,94,57,0.15)",
                        background:
                          "linear-gradient(215deg, rgba(255,255,255,0.12), transparent)",
                      }}
                    />
                  </motion.div>

                  {/* TAPA DEL SOBRE */}

                  <motion.div
                    className="
                      absolute
                      left-0
                      top-0
                      z-20
                      h-[54%]
                      w-full
                      origin-top
                      overflow-hidden
                    "
                    style={{
                      clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                      background: `
                        linear-gradient(
                          180deg,
                          #E6DDCE 0%,
                          #D5C9B7 100%
                        )
                      `,
                      boxShadow: "0 13px 24px rgba(29,39,51,0.12)",
                      backfaceVisibility: "hidden",
                    }}
                    animate={
                      abrirSobre
                        ? {
                            rotateX: -182,
                            y: -3,
                          }
                        : {
                            rotateX: 0,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* SELLO CLÁSICO */}

                  <motion.div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-30
                      flex
                      items-center
                      justify-center
                    "
                    animate={
                      abrirSobre
                        ? {
                            scale: 0.7,
                            opacity: 0,
                            y: -16,
                          }
                        : {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 0.55,
                    }}
                  >
                    <div
                      className="
                        relative
                        flex
                        h-[72px]
                        w-[72px]
                        items-center
                        justify-center
                        rounded-full
                        sm:h-[86px]
                        sm:w-[86px]
                      "
                      style={{
                        background: `
                          radial-gradient(
                            circle at 35% 28%,
                            #B59A68 0%,
                            #927545 45%,
                            #6D5532 100%
                          )
                        `,
                        boxShadow: `
                          inset 0 2px 4px rgba(255,255,255,0.24),
                          inset 0 -5px 9px rgba(45,34,19,0.28),
                          0 10px 18px rgba(29,39,51,0.17)
                        `,
                      }}
                    >
                      <div
                        className="
                          absolute
                          inset-[7px]
                          rounded-full
                          border
                        "
                        style={{
                          borderColor: "rgba(245,241,232,0.28)",
                        }}
                      />

                      <div
                        className="
                          relative
                          z-10
                          font-serif
                          text-lg
                          italic
                          sm:text-2xl
                        "
                        style={{
                          color: "#E8DDCA",
                          textShadow: "0 1px 2px rgba(29,39,51,0.35)",
                        }}
                      >
                        V
                        <span className="mx-1 text-[11px] sm:text-sm">
                          &
                        </span>
                        A
                      </div>
                    </div>
                  </motion.div>

                  {/* TEXTO ABRIR */}

                  <motion.p
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-4
                      z-40
                      text-center
                      text-[8px]
                      uppercase
                      tracking-[0.4em]
                      sm:text-[9px]
                    "
                    style={{ color: palette.inkSoft }}
                    animate={{
                      opacity: abrirSobre ? 0 : 0.75,
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    Abrir
                  </motion.p>
                </div>

                <motion.p
                  className="
                    mt-3
                    text-center
                    text-[8px]
                    uppercase
                    tracking-[0.28em]
                    sm:mt-7
                    sm:text-[10px]
                  "
                  style={{ color: palette.warmGray }}
                  animate={{
                    opacity: abrirSobre ? 0 : 1,
                  }}
                  transition={{ duration: 0.35 }}
                >
                  Toca el sobre para comenzar
                </motion.p>

                {/* DATOS DEL INVITADO */}

                <motion.div
                  className="
                    mt-3
                    w-full
                    max-w-[330px]
                    border-y
                    px-3
                    py-3
                    text-center
                    sm:mt-10
                    sm:max-w-[390px]
                    sm:px-7
                    sm:py-5
                  "
                  style={{
                    borderColor: "rgba(164,134,84,0.35)",
                  }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ...transition,
                    delay: 0.45,
                  }}
                >
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.33em]
                      sm:text-[9px]
                    "
                    style={{ color: palette.warmGray }}
                  >
                    Reservado especialmente para
                  </p>

                  <p
                    className="
                      mt-2
                      sm:mt-3
                      break-words
                      font-serif
                      text-lg
                      sm:text-2xl
                    "
                    style={{ color: palette.ink }}
                  >
                    {invitados}
                  </p>

                  <div
                    className="
                      mx-auto
                      my-2
                      sm:my-4
                      h-px
                      w-12
                    "
                    style={{
                      backgroundColor: "rgba(164,134,84,0.6)",
                    }}
                  />

                  <p
                    className="
                      font-serif
                      text-xs
                      tracking-[0.08em]
                      sm:text-base
                    "
                    style={{ color: palette.inkSoft }}
                  >
                    {pases}{" "}
                    {pases === 1
                      ? "lugar reservado"
                      : "lugares reservados"}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* =========================================
          PORTADA PRINCIPAL
      ========================================= */}

      <section
        className="
          relative
          min-h-[100dvh]
          w-full
          overflow-hidden
        "
        style={{ backgroundColor: palette.ink }}
      >
        {/* FOTOGRAFÍA */}

        <motion.img
          src="/portada.png"
          alt="Valeria y Alejandro"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
          initial={{
            opacity: 0,
            scale: 1.035,
          }}
          animate={
            mostrarContenido
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  scale: 1.035,
                }
          }
          transition={{
            opacity: { duration: 1.2 },
            scale: {
              duration: 7,
              ease: "easeOut",
            },
          }}
        />

        {/* OVERLAY CINEMATOGRÁFICO DISCRETO */}

        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(18,24,31,0.46) 0%,
                rgba(18,24,31,0.12) 32%,
                rgba(18,24,31,0.20) 54%,
                rgba(18,24,31,0.82) 100%
              ),
              linear-gradient(
                90deg,
                rgba(18,24,31,0.18) 0%,
                transparent 35%,
                transparent 65%,
                rgba(18,24,31,0.18) 100%
              )
            `,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
          }}
          transition={{ duration: 1 }}
        />

        {/* GRANO EDITORIAL */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.07]
          "
          style={{
            backgroundImage: `
              radial-gradient(
                rgba(255,255,255,0.32) 0.5px,
                transparent 0.5px
              )
            `,
            backgroundSize: "5px 5px",
          }}
        />

        {/* MARCO */}

        <motion.div
          className="
            pointer-events-none
            absolute
            inset-4
            z-10
            border
            sm:inset-7
            lg:inset-9
          "
          style={{
            borderColor: "rgba(245,241,232,0.34)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
          }}
          transition={{
            duration: 1,
            delay: 0.35,
          }}
        />

        {/* CONTENIDO */}

        <motion.div
          className="
relative
z-20
flex
min-h-[100dvh]
w-full
flex-col
items-center
justify-start
px-5
pt-8
pb-5
text-center
sm:px-12
sm:pt-16
lg:px-16
lg:pt-20
"
          initial={{ opacity: 0 }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          {/* ENCABEZADO */}

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: -12,
                  }
            }
            transition={{
              ...transition,
              delay: 0.5,
            }}
          >
           
            <div
              className="
                mx-auto
                mt-2
                sm:mt-4
                h-px
                w-14
              "
              style={{
                backgroundColor: "rgba(245,241,232,0.7)",
              }}
            />


          </motion.div>

          {/* NOMBRES */}

          <motion.div
            className="
              flex
              max-w-4xl
              flex-col
              items-center
              
            "
            initial={{ opacity: 0, y: 24 }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            transition={{
              duration: 1.1,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >


            <h1
              className="
                font-serif
                text-[40px]
                font-normal
                leading-[0.9]
                tracking-[-0.035em]
                text-[#FBF9F4]
                sm:text-[72px]
                md:text-[88px]
                lg:text-[104px]
              "
              style={{
                textShadow: "0 4px 24px rgba(0,0,0,0.32)",
              }}
            >
              Valeria
            </h1>

            <div className="my-2 flex items-center gap-3 sm:my-4 sm:gap-6">
              <span
                className="
                  h-px
                  w-12
                  sm:w-20
                "
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(216,198,166,0.8))",
                }}
              />

              <span
                className="
                  font-cursiveDancing
                  text-2xl
                  text-[#D8C6A6]
                  sm:text-4xl
                "
              >
                &
              </span>

              <span
                className="
                  h-px
                  w-12
                  sm:w-20
                "
                style={{
                  background:
                    "linear-gradient(to left, transparent, rgba(216,198,166,0.8))",
                }}
              />
            </div>

            <h1
              className="
                font-serif
                text-[40px]
                font-normal
                leading-[0.9]
                tracking-[-0.035em]
                text-[#FBF9F4]
                sm:text-[72px]
                md:text-[88px]
                lg:text-[104px]
              "
              style={{
                textShadow: "0 4px 24px rgba(0,0,0,0.32)",
              }}
            >
              Alejandro
            </h1>

          </motion.div>

          {/* CONTADOR */}

          <motion.div
            className="
              w-full
              max-w-4xl
              mt-auto
              pt-3
              pb-1
              sm:pt-6
              sm:pb-4
            "
            initial={{ opacity: 0, y: 18 }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            transition={{
              duration: 1,
              delay: 0.9,
            }}
          >

            <Countdown targetDate="2027-06-11T00:00:00" />

            <motion.div
              className="
                mt-4
                flex
                flex-col
                items-center
                sm:mt-10
              "
              initial={{ opacity: 0 }}
              animate={{
                opacity: mostrarContenido ? 1 : 0,
              }}
              transition={{
                duration: 1,
                delay: 1.1,
              }}
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.38em]
                  text-[#F5F1E8]/65
                  sm:text-[9px]
                "
              >
                Desliza para continuar
              </p>

              <div
                className="
                  mt-2
                  sm:mt-4
                  h-6
                  sm:h-9
                  w-px
                  overflow-hidden
                  bg-[#F5F1E8]/25
                "
              >
                <motion.span
                  className="
                    block
                    h-4
                    w-px
                    bg-[#F5F1E8]/80
                  "
                  animate={{
                    y: [-16, 36],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.25,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}