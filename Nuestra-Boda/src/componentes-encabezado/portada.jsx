import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const colores = {
  rosa: "#F277A2",
  rosaFuerte: "#D94F82",
  rosaClaro: "#FFDCE8",
  rosaFondo: "#FFF1F6",
  crema: "#FFF9ED",
  amarillo: "#F5C44D",
  naranja: "#E9873D",
  texto: "#67444D",
};

const transicion = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

function Flor({ rosa = false, className = "", delay = 0 }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
      animate={{ y: [0, -8, 0], rotate: [-2, 3, -2] }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {rosa ? "🌸" : "🌼"}
    </motion.span>
  );
}

function Separador() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#F5C44D]" />
      <span className="text-xl">🌼</span>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#F5C44D]" />
    </div>
  );
}

export default function Portada() {
  const audioRef = useRef(null);

  const [introActiva, setIntroActiva] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [abrirSobre, setAbrirSobre] = useState(false);
  const [procesandoApertura, setProcesandoApertura] = useState(false);
  const [invitados, setInvitados] = useState("Invitado especial");
  const [pases, setPases] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) return;

    try {
      const idNormalizado = decodeURIComponent(id)
        .replace(/-/g, "+")
        .replace(/_/g, "/");

      const paddingFaltante = idNormalizado.length % 4;
      const idConPadding =
        paddingFaltante === 0
          ? idNormalizado
          : idNormalizado + "=".repeat(4 - paddingFaltante);

      const textoInvertido = atob(idConPadding);
      const textoOriginal = textoInvertido.split("").reverse().join("");
      const datos = JSON.parse(textoOriginal);

      const nombre =
        typeof datos.nombre === "string" ? datos.nombre.trim() : "";
      const cantidadPases = Number.parseInt(datos.pases, 10);

      if (nombre) setInvitados(nombre);

      if (!Number.isNaN(cantidadPases) && cantidadPases > 0) {
        setPases(cantidadPases);
      }
    } catch (error) {
      console.error("No se pudieron leer los datos del invitado:", error);
    }
  }, []);

  useEffect(() => {
    if (!introActiva) return;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
  }, [introActiva]);

  const iniciarExperiencia = () => {
    if (procesandoApertura || abrirSobre) return;

    setProcesandoApertura(true);
    setAbrirSobre(true);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    window.setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.45;
        audioRef.current.play().catch((error) => {
          console.warn("No se pudo reproducir el audio:", error);
        });
      }
    }, 400);

    window.setTimeout(() => {
      setIntroActiva(false);
      setMostrarContenido(true);
      setProcesandoApertura(false);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 1900);
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: colores.crema, color: colores.texto }}
    >
      <audio ref={audioRef} loop preload="auto">
        <source src="/TylerShaw.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence mode="wait">
        {introActiva && (
          <motion.section
            key="intro-aurora"
            className="
              fixed inset-0 z-[9999] flex h-[100dvh] w-full
              items-center justify-center overflow-hidden overscroll-none
              px-4 py-5 sm:px-8 lg:px-12
            "
            style={{
              backgroundColor: colores.rosaFondo,
              touchAction: "none",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.75 }}
          >
            <div
              className="pointer-events-none absolute inset-4 border-2 sm:inset-7"
              style={{
                borderColor: "rgba(242,119,162,0.55)",
                borderRadius: "45% 55% 47% 53% / 6% 8% 7% 9%",
              }}
            />

            <div
              className="
                pointer-events-none absolute inset-[22px]
                border border-dashed opacity-70 sm:inset-9
              "
              style={{
                borderColor: "rgba(245,196,77,0.75)",
                borderRadius: "53% 47% 55% 45% / 8% 6% 9% 7%",
              }}
            />

            <Flor className="left-1 top-1 text-6xl sm:left-5 sm:top-4 sm:text-8xl" />
            <Flor
              rosa
              delay={0.8}
              className="right-2 top-7 text-5xl sm:right-7 sm:text-7xl"
            />
            <Flor
              rosa
              delay={1.4}
              className="bottom-5 left-5 text-4xl sm:text-6xl"
            />
            <Flor
              delay={0.4}
              className="bottom-1 right-0 text-7xl sm:right-5 sm:text-8xl"
            />

            <div
              className="
                relative z-10 mx-auto grid w-full max-w-6xl items-center
                gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16
              "
            >
              <motion.div
                className="
                  order-1 flex flex-col items-center text-center
                  lg:items-start lg:text-left
                "
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transicion, delay: 0.1 }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.35em]"
                  style={{ color: colores.naranja }}
                >
                  Una invitación muy especial
                </p>

                <span className="mt-3 text-2xl sm:mt-5">🌼</span>

                <h1
                  className="
                    mt-2 font-cursiveDancing text-[48px] font-normal
                    leading-[0.9] sm:text-[78px] lg:text-[88px]
                  "
                  style={{ color: colores.rosaFuerte }}
                >
                  Aurora Analy
                </h1>

                <p
                  className="
                    mt-3 font-serif text-base font-semibold uppercase
                    tracking-[0.18em] sm:mt-5 sm:text-xl
                  "
                  style={{ color: colores.naranja }}
                >
                  Cumple un añito
                </p>

                <div className="mt-4 w-full max-w-[240px] sm:mt-6">
                  <Separador />
                </div>

                <p
                  className="
                    mt-4 max-w-md font-serif text-sm italic leading-6
                    sm:mt-6 sm:text-base sm:leading-7
                  "
                >
                  Un año de sonrisas, juegos y mucho amor merece una
                  celebración inolvidable.
                </p>

                <p
                  className="
                    mt-3 font-serif text-xs font-semibold uppercase
                    tracking-[0.22em] sm:mt-5 sm:text-sm
                  "
                  style={{ color: colores.rosaFuerte }}
                >
                  10 · Octubre · 2026
                </p>
              </motion.div>

              <motion.div
                className="order-2 flex w-full flex-col items-center"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transicion, delay: 0.25 }}
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
                  aria-label="Abrir invitación de Aurora Analy"
                  className="
                    relative aspect-[350/235] w-[78vw] max-w-[310px]
                    cursor-pointer outline-none sm:max-w-[430px] lg:w-full
                  "
                  style={{ perspective: 2200 }}
                >
                  <div
                    className="
                      absolute -bottom-7 left-1/2 h-12 w-[72%]
                      -translate-x-1/2 rounded-full
                      bg-[#D94F82]/20 blur-2xl
                    "
                  />

                  <motion.div
                    className="
                      absolute left-1/2 top-[8%] z-10 flex h-[80%] w-[82%]
                      -translate-x-1/2 flex-col items-center justify-center
                      overflow-hidden border-2 px-5 py-4 text-center
                    "
                    style={{
                      backgroundColor: colores.crema,
                      borderColor: colores.rosaClaro,
                      borderRadius: "35% 35% 18% 18% / 16% 16% 12% 12%",
                      boxShadow: "0 14px 30px rgba(180,73,111,0.16)",
                    }}
                    animate={
                      abrirSobre
                        ? { y: -84, scale: 1.015 }
                        : { y: 0, scale: 1 }
                    }
                    transition={{
                      duration: 1.15,
                      delay: abrirSobre ? 0.3 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="absolute left-3 top-2 text-2xl">🌼</span>
                    <span className="absolute bottom-2 right-3 text-2xl">
                      🌸
                    </span>

                    <p
                      className="text-[8px] font-bold uppercase tracking-[0.3em]"
                      style={{ color: colores.naranja }}
                    >
                      Mi primer cumpleaños
                    </p>

                    <p
                      className="
                        mt-3 font-cursiveDancing text-[32px]
                        leading-none sm:text-[42px]
                      "
                      style={{ color: colores.rosaFuerte }}
                    >
                      Aurora Analy
                    </p>

                    <div
                      className="
                        my-2 flex h-11 w-11 items-center justify-center
                        rounded-2xl border-2 border-dashed bg-white
                        text-3xl font-bold
                      "
                      style={{
                        color: colores.rosa,
                        borderColor: colores.amarillo,
                      }}
                    >
                      1
                    </div>

                    <p className="text-[8px] font-bold uppercase tracking-[0.22em]">
                      10 · 10 · 2026
                    </p>
                  </motion.div>

                  <motion.div
                    className="
                      absolute inset-0 overflow-hidden
                      rounded-b-[30px] rounded-t-[18px] border
                    "
                    style={{
                      borderColor: "rgba(217,79,130,0.22)",
                      background:
                        "linear-gradient(145deg, #FFD7E4 0%, #F8AFC6 55%, #F38EB0 100%)",
                      boxShadow:
                        "0 28px 55px rgba(180,73,111,0.19), inset 0 1px 0 rgba(255,255,255,0.7)",
                    }}
                    animate={
                      abrirSobre
                        ? { scale: 1.012, y: 6 }
                        : { scale: 1, y: 0 }
                    }
                    transition={{ duration: 1.1 }}
                  >
                    <div
                      className="absolute inset-0 opacity-25"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />

                    <div
                      className="absolute bottom-0 left-0 h-[72%] w-[53%]"
                      style={{
                        clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                        background:
                          "linear-gradient(145deg, rgba(255,255,255,.25), transparent)",
                      }}
                    />

                    <div
                      className="absolute bottom-0 right-0 h-[72%] w-[53%]"
                      style={{
                        clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                        background:
                          "linear-gradient(215deg, rgba(255,255,255,.18), transparent)",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    className="
                      absolute left-0 top-0 z-20 h-[54%] w-full
                      origin-top overflow-hidden
                    "
                    style={{
                      clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                      background:
                        "linear-gradient(180deg, #FFE4EC 0%, #F7B1C7 100%)",
                      backfaceVisibility: "hidden",
                    }}
                    animate={
                      abrirSobre
                        ? { rotateX: -182, y: -3 }
                        : { rotateX: 0, y: 0 }
                    }
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <motion.div
                    className="
                      pointer-events-none absolute inset-0 z-30
                      flex items-center justify-center
                    "
                    animate={
                      abrirSobre
                        ? { scale: 0.7, opacity: 0, y: -16 }
                        : { scale: 1, opacity: 1, y: 0 }
                    }
                    transition={{ duration: 0.55 }}
                  >
                    <div
                      className="
                        flex h-[72px] w-[72px] items-center justify-center
                        rounded-full border-4 text-4xl
                        sm:h-[86px] sm:w-[86px]
                      "
                      style={{
                        backgroundColor: colores.amarillo,
                        borderColor: "#FFF0B5",
                        boxShadow:
                          "inset 0 2px 4px rgba(255,255,255,.45), 0 10px 18px rgba(180,73,111,.18)",
                      }}
                    >
                      🌼
                    </div>
                  </motion.div>

                  <motion.p
                    className="
                      pointer-events-none absolute inset-x-0 top-4 z-40
                      text-center text-[8px] font-bold uppercase
                      tracking-[0.4em] sm:text-[9px]
                    "
                    animate={{ opacity: abrirSobre ? 0 : 0.75 }}
                  >
                    Abrir
                  </motion.p>
                </div>

                <motion.p
                  className="
                    mt-3 text-center text-[9px] font-semibold uppercase
                    tracking-[0.25em] sm:mt-7 sm:text-[10px]
                  "
                  style={{ color: colores.rosaFuerte }}
                  animate={{ opacity: abrirSobre ? 0 : 1 }}
                >
                  Toca el sobre para comenzar
                </motion.p>

                <motion.div
                  className="
                    mt-3 w-full max-w-[330px] rounded-[28px]
                    border-2 border-dashed bg-white/75 px-4 py-3
                    text-center sm:mt-8 sm:max-w-[390px] sm:px-7 sm:py-5
                  "
                  style={{ borderColor: colores.rosaClaro }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...transicion, delay: 0.45 }}
                >
                  <p
                    className="text-[8px] font-bold uppercase tracking-[0.3em]"
                    style={{ color: colores.naranja }}
                  >
                    Invitación preparada para
                  </p>

                  <p
                    className="
                      mt-2 break-words font-cursiveDancing
                      text-2xl sm:mt-3 sm:text-3xl
                    "
                    style={{ color: colores.rosaFuerte }}
                  >
                    {invitados}
                  </p>

                  <div className="my-2 text-lg sm:my-3">🌼</div>

                  <p className="font-serif text-xs font-semibold sm:text-base">
                    {pases} {pases === 1 ? "pase reservado" : "pases reservados"}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <section
        className="relative min-h-[100dvh] w-full overflow-hidden"
        style={{ backgroundColor: colores.texto }}
      >
        <motion.img
          src="/portada.png"
          alt="Aurora Analy"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ opacity: 0, scale: 1.035 }}
          animate={
            mostrarContenido
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 1.035 }
          }
          transition={{
            opacity: { duration: 1.2 },
            scale: { duration: 7, ease: "easeOut" },
          }}
        />

        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(77,33,49,0.15) 0%,
                rgba(77,33,49,0.02) 38%,
                rgba(77,33,49,0.12) 58%,
                rgba(77,33,49,0.80) 100%
              )
            `,
          }}
          animate={{ opacity: mostrarContenido ? 1 : 0 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="
            pointer-events-none absolute inset-4 z-10 border-2
            sm:inset-7 lg:inset-9
          "
          style={{
            borderColor: "rgba(255,255,255,0.65)",
            borderRadius: "44% 56% 45% 55% / 5% 7% 6% 8%",
          }}
          animate={{ opacity: mostrarContenido ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.35 }}
        />

        <Flor className="left-2 top-2 z-10 text-5xl sm:left-7 sm:top-7 sm:text-7xl" />
        <Flor
          rosa
          delay={0.8}
          className="right-2 top-6 z-10 text-4xl sm:right-7 sm:text-6xl"
        />

        <motion.div
          className="
            relative z-20 flex min-h-[100dvh] w-full flex-col
            items-center justify-end px-6 pb-10 pt-12 text-center
            sm:px-12 sm:pb-16 lg:px-16
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: mostrarContenido ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="
              w-full max-w-2xl rounded-[42px] border border-white/60
              bg-[#A93E67]/20 px-5 py-7 backdrop-blur-[2px]
              sm:px-10 sm:py-9
            "
            initial={{ opacity: 0, y: 24 }}
            animate={
              mostrarContenido
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
            transition={{ ...transicion, delay: 0.55 }}
          >
  
   
            <h1
              className="
                mt-3 font-cursiveDancing text-[52px] font-normal
                leading-[0.82] text-white sm:text-[82px] lg:text-[96px]
              "
              style={{ textShadow: "0 4px 24px rgba(75,27,43,0.35)" }}
            >
              Aurora Analy
            </h1>

            <div className="my-4">
              <Separador />
            </div>

            <p
              className="
                font-serif text-sm font-semibold uppercase
                tracking-[0.2em] text-white sm:text-base
              "
            >
              10 · Octubre · 2026
            </p>

            <p className="mt-3 font-serif text-sm italic text-white/90 sm:text-base">
              Acompáñame a festejar mi primer añito
            </p>
          </motion.div>

          <motion.div
            className="mt-5 flex flex-col items-center sm:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: mostrarContenido ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p
              className="
                text-[9px] font-semibold uppercase
                tracking-[0.32em] text-white/80
              "
            >
              Desliza para continuar
            </p>

            <div className="mt-3 h-8 w-px overflow-hidden bg-white/30">
              <motion.span
                className="block h-4 w-px bg-white"
                animate={{ y: [-16, 36] }}
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
      </section>
    </div>
  );
}
