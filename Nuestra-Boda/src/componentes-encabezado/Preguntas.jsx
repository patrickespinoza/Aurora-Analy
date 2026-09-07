import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import html2canvas from "html2canvas";

/* =========================================
   CONFIGURACIÓN
========================================= */

const API_URL =
  "https://script.google.com/macros/s/AKfycbxQTHIUXU3wWSw_mg7wvwbjwLbzskGcgGaGKzuY_yUK1r-RfPfXtSB7WD4CfZ6W7f5QJg/exec";

const palette = {
  ink: "#1D2733",
  inkSoft: "#39434D",
  paper: "#F5F1E8",
  paperLight: "#FBF9F4",
  paperDark: "#E5DED2",
  antiqueGold: "#A48654",
  antiqueGoldDark: "#725B37",
  warmGray: "#777168",
};

const preguntas = [
  {
    pregunta: "¿Dónde se conocieron Valeria y Alejandro?",
    opciones: [
      "En la Universidad",
      "En una Fiesta",
      "En el trabajo",
      "Por una app",
      "En un viaje",
    ],
    correcta: 0,
  },
  {
    pregunta: "¿Quién dijo “te amo” primero?",
    opciones: ["Valeria", "Alejandro", "Ambos", "Nadie", "Fue un accidente"],
    correcta: 1,
  },
  {
    pregunta: "¿Cuál es su comida favorita?",
    opciones: ["Pizza", "Sushi", "Tacos", "Pasta", "Hamburguesas"],
    correcta: 2,
  },
  {
    pregunta: "¿Dónde fue su primera cita?",
    opciones: ["Cine", "Restaurante", "Parque", "Café", "Playa"],
    correcta: 3,
  },
  {
    pregunta: "¿Quién es más puntual?",
    opciones: ["Valeria", "Alejandro", "Ambos", "Ninguno", "Depende del día"],
    correcta: 0,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   ORNAMENTOS
========================================= */

function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 85V30C5 16.2 16.2 5 30 5h55"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M15 72V34c0-10.5 8.5-19 19-19h38"
        stroke="currentColor"
        strokeWidth="0.65"
      />

      <path
        d="M30 5C30 18.8 18.8 30 5 30"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <circle cx="15" cy="15" r="2" fill="currentColor" />
    </svg>
  );
}

function BotanicalBranch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 260"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M76 252C80 192 78 130 71 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M76 205C54 192 41 174 35 151"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M75 167C97 153 109 133 113 109"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M73 123C53 110 43 93 39 72"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M72 83C91 71 101 53 103 34"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M35 151C49 150 60 158 67 173C52 172 41 165 35 151Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M113 109C99 109 88 117 80 132C96 131 107 123 113 109Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M39 72C53 73 63 81 69 95C54 94 44 86 39 72Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M103 34C90 35 80 42 74 55C88 54 98 47 103 34Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

function DecorativeDivider({ compact = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(164,134,84,0.72))",
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: "rgba(164,134,84,0.72)",
        }}
      />

      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(164,134,84,0.72))",
        }}
      />
    </div>
  );
}

/* =========================================
   ICONOS
========================================= */

function QuestionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.8 9a2.4 2.4 0 1 1 3.7 2c-1 .65-1.5 1.15-1.5 2.5" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H4v1a4 4 0 0 0 4 4" />
      <path d="M16 6h4v1a4 4 0 0 1-4 4" />
      <path d="M12 12v5" />
      <path d="M8 21h8" />
      <path d="M9 17h6v4H9z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

/* =========================================
   PODIO
========================================= */

function PodiumPlace({ participant, place }) {
  if (!participant) return null;

  const placeStyles = {
    1: {
      height: "h-28 sm:h-36",
      number: "01",
      label: "Primer lugar",
    },
    2: {
      height: "h-20 sm:h-28",
      number: "02",
      label: "Segundo lugar",
    },
    3: {
      height: "h-16 sm:h-24",
      number: "03",
      label: "Tercer lugar",
    },
  };

  const current = placeStyles[place];

  return (
    <motion.div
      className="
        flex
        min-w-0
        flex-1
        flex-col
        items-center
        text-center
      "
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.75,
        delay: place * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p
        className="
          max-w-full
          truncate
          font-serif
          text-[13px]
          sm:text-base
        "
        style={{
          color: palette.ink,
        }}
      >
        {participant.nombre}
      </p>

      <p
        className="
          mt-1
          text-[8px]
          uppercase
          tracking-[0.22em]
        "
        style={{
          color: palette.warmGray,
        }}
      >
        {participant.score} aciertos
      </p>

      <div
        className={`
          mt-4
          flex
          w-full
          max-w-[105px]
          items-center
          justify-center
          border
          ${current.height}
        `}
        style={{
          background:
            place === 1
              ? "linear-gradient(180deg, #E6DDCE, #D7CAB5)"
              : "linear-gradient(180deg, #F5F1E8, #E5DED2)",
          borderColor:
            place === 1
              ? "rgba(164,134,84,0.55)"
              : "rgba(164,134,84,0.3)",
        }}
      >
        <span
          className="
            font-serif
            text-2xl
            sm:text-3xl
          "
          style={{
            color: place === 1 ? palette.antiqueGoldDark : palette.inkSoft,
          }}
        >
          {current.number}
        </span>
      </div>

      <p
        className="
          mt-3
          text-[7px]
          uppercase
          tracking-[0.2em]
          sm:text-[8px]
        "
        style={{
          color: palette.antiqueGoldDark,
        }}
      >
        {current.label}
      </p>
    </motion.div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

const Preguntas = () => {
  const [nombre, setNombre] = useState("");
  const [mostrarNombre, setMostrarNombre] = useState(true);

  const [paso, setPaso] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [bloqueado, setBloqueado] = useState(false);

  const [score, setScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [terminado, setTerminado] = useState(false);

  const [ranking, setRanking] = useState([]);
  const [cargandoRanking, setCargandoRanking] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);
  const [guardandoImagen, setGuardandoImagen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const resultadoRef = useRef(null);

  /* =========================================
     TAMAÑO DE VENTANA
  ========================================= */

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize();

    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  /* =========================================
     ENVIAR RESULTADO
  ========================================= */

  const enviarResultado = async (scoreToSend) => {
    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          nombre: nombre.trim(),
          score: scoreToSend,
        }),
      });
    } catch (error) {
      console.error("Error enviando el resultado:", error);
    }
  };

  /* =========================================
     OBTENER RANKING
  ========================================= */

  const obtenerRanking = async () => {
    setCargandoRanking(true);

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("No fue posible obtener el ranking.");
      }

      const data = await response.json();

      const normalizedData = Array.isArray(data) ? data : [];

      const sortedRanking = normalizedData
        .map((participant) => ({
          ...participant,
          score: Number(participant.score) || 0,
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

      setRanking(sortedRanking);
    } catch (error) {
      console.error("Error obteniendo el ranking:", error);
      setRanking([]);
    } finally {
      setCargandoRanking(false);
    }
  };

  /* =========================================
     FLUJO FINAL
  ========================================= */

  useEffect(() => {
    if (!terminado) return undefined;

    let rankingTimeout;
    let confettiTimeout;

    const completeQuiz = async () => {
      await enviarResultado(finalScore);

      setShowConfetti(true);

      rankingTimeout = window.setTimeout(() => {
        obtenerRanking();
      }, 1400);

      confettiTimeout = window.setTimeout(() => {
        setShowConfetti(false);
      }, 6000);
    };

    completeQuiz();

    return () => {
      window.clearTimeout(rankingTimeout);
      window.clearTimeout(confettiTimeout);
    };
  }, [terminado, finalScore]);

  /* =========================================
     RESPONDER
  ========================================= */

  const manejarRespuesta = (optionIndex) => {
    if (bloqueado) return;

    if (mostrarNombre && !nombre.trim()) {
      window.alert("Escribe tu nombre para comenzar.");
      return;
    }

    setBloqueado(true);
    setSeleccion(optionIndex);

    const isCorrect = optionIndex === preguntas[paso].correcta;
    const nextScore = isCorrect ? score + 1 : score;

    if (isCorrect) {
      setScore(nextScore);
    }

    window.setTimeout(() => {
      setSeleccion(null);

      if (paso === 0) {
        setMostrarNombre(false);
      }

      if (paso + 1 < preguntas.length) {
        setPaso((previousStep) => previousStep + 1);
        setBloqueado(false);
      } else {
        setFinalScore(nextScore);
        setTerminado(true);
        setBloqueado(false);
      }
    }, 700);
  };

  /* =========================================
     GUARDAR RESULTADO
  ========================================= */

  const guardarResultado = async () => {
    if (!resultadoRef.current || guardandoImagen) return;

    setGuardandoImagen(true);

    try {
      const canvas = await html2canvas(resultadoRef.current, {
        scale: 2,
        backgroundColor: palette.paperLight,
        useCORS: true,
      });

      const link = document.createElement("a");

      link.download = `resultado-${nombre
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")}.png`;

      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("No se pudo guardar el resultado:", error);
    } finally {
      setGuardandoImagen(false);
    }
  };

  const progress = ((paso + 1) / preguntas.length) * 100;

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="
        relative
        flex
        min-h-[760px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            ${palette.paperLight} 0%,
            ${palette.paper} 56%,
            ${palette.paperDark} 100%
          )
        `,
      }}
    >
      {/* CONFETI */}

      {showConfetti && windowSize.width > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={220}
          recycle={false}
          gravity={0.12}
        />
      )}

      {/* TEXTURA */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(29,39,51,0.025) 0px,
              rgba(29,39,51,0.025) 1px,
              transparent 1px,
              transparent 5px
            )
          `,
        }}
      />

      {/* MARCOS */}

      <div
        className="
          pointer-events-none
          absolute
          inset-5
          border
          sm:inset-8
          lg:inset-10
        "
        style={{
          borderColor: "rgba(164,134,84,0.25)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[26px]
          border
          sm:inset-[38px]
          lg:inset-[46px]
        "
        style={{
          borderColor: "rgba(164,134,84,0.1)",
        }}
      />

      {/* ESQUINAS */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-[#A48654]/25
          sm:left-9
          sm:top-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          right-6
          top-6
          h-16
          w-16
          rotate-90
          text-[#A48654]/25
          sm:right-9
          sm:top-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-6
          left-6
          h-16
          w-16
          -rotate-90
          text-[#A48654]/25
          sm:bottom-9
          sm:left-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-6
          right-6
          h-16
          w-16
          rotate-180
          text-[#A48654]/25
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      {/* BOTÁNICOS */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[250px]
          w-[145px]
          -rotate-12
          text-[#A48654]/10
          sm:h-[310px]
          sm:w-[180px]
          lg:left-2
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-8
          -top-16
          h-[250px]
          w-[145px]
          rotate-[168deg]
          text-[#A48654]/10
          sm:h-[310px]
          sm:w-[180px]
          lg:right-2
        "
      />

      {/* CONTENIDO */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-12
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-16
          "
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
          }}
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
            "
            style={{
              color: palette.antiqueGoldDark,
              borderColor: "rgba(164,134,84,0.42)",
            }}
          >
            {terminado ? <TrophyIcon /> : <QuestionIcon />}
          </div>

          <p
            className="
              mt-6
              text-[8px]
              uppercase
              tracking-[0.44em]
              sm:text-[10px]
              sm:tracking-[0.55em]
            "
            style={{
              color: palette.antiqueGoldDark,
            }}
          >
            Un detalle para compartir
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              font-serif
              text-[39px]
              font-normal
              leading-tight
              tracking-[-0.025em]
              sm:text-[54px]
              md:text-[64px]
            "
            style={{
              color: palette.ink,
            }}
          >
            ¿Cuánto nos conoces?
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
            "
            style={{
              color: palette.warmGray,
            }}
          >
            Pon a prueba cuánto conoces nuestra historia y descubre tu lugar
            entre nuestros invitados.
          </p>
        </motion.div>

        {/* JUEGO */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-3xl
            border
          "
          style={{
            backgroundColor: "rgba(251,249,244,0.82)",
            borderColor: "rgba(164,134,84,0.34)",
            boxShadow: "0 24px 65px rgba(29,39,51,0.08)",
          }}
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-[7px]
              border
            "
            style={{
              borderColor: "rgba(164,134,84,0.12)",
            }}
          />

          <AnimatePresence mode="wait">
            {!terminado ? (
              <motion.div
                key={`question-${paso}`}
                className="
                  relative
                  z-10
                  flex
                  min-h-[570px]
                  flex-col
                  items-center
                  px-6
                  py-12
                  text-center
                  sm:px-10
                  sm:py-14
                  md:px-14
                "
                initial={{
                  opacity: 0,
                  x: 18,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -18,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* PROGRESO */}

                <div className="w-full">
                  <div className="flex items-center justify-between gap-4">
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.28em]
                        sm:text-[9px]
                      "
                      style={{
                        color: palette.antiqueGoldDark,
                      }}
                    >
                      Pregunta {String(paso + 1).padStart(2, "0")}
                    </p>

                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.22em]
                        sm:text-[9px]
                      "
                      style={{
                        color: palette.warmGray,
                      }}
                    >
                      De {String(preguntas.length).padStart(2, "0")}
                    </p>
                  </div>

                  <div
                    className="
                      mt-4
                      h-px
                      w-full
                      overflow-hidden
                    "
                    style={{
                      backgroundColor: "rgba(164,134,84,0.18)",
                    }}
                  >
                    <motion.div
                      className="h-full"
                      style={{
                        backgroundColor: palette.antiqueGold,
                      }}
                      animate={{
                        width: `${progress}%`,
                      }}
                      transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </div>

                {/* NOMBRE */}

                <AnimatePresence>
                  {mostrarNombre && (
                    <motion.div
                      className="
                        mt-9
                        w-full
                        max-w-md
                      "
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                    >
                      <label
                        htmlFor="quiz-name"
                        className="
                          text-[8px]
                          uppercase
                          tracking-[0.34em]
                          sm:text-[9px]
                        "
                        style={{
                          color: palette.warmGray,
                        }}
                      >
                        Escribe tu nombre
                      </label>

                      <input
                        id="quiz-name"
                        type="text"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                        placeholder="Tu nombre"
                        autoComplete="name"
                        className="
                          mt-4
                          w-full
                          border
                          bg-[#FBF9F4]
                          px-5
                          py-4
                          text-center
                          font-serif
                          text-base
                          outline-none
                          transition
                          sm:text-lg
                        "
                        style={{
                          color: palette.ink,
                          borderColor: "rgba(164,134,84,0.34)",
                        }}
                        onFocus={(event) => {
                          event.currentTarget.style.borderColor =
                            palette.antiqueGold;
                        }}
                        onBlur={(event) => {
                          event.currentTarget.style.borderColor =
                            "rgba(164,134,84,0.34)";
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="my-9">
                  <DecorativeDivider compact />
                </div>

                {/* PREGUNTA */}

                <h3
                  className="
                    max-w-2xl
                    font-serif
                    text-[26px]
                    font-normal
                    leading-[1.45]
                    tracking-[-0.015em]
                    sm:text-[34px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >
                  {preguntas[paso].pregunta}
                </h3>

                {/* RESPUESTAS */}

                <div
                  className="
                    mt-9
                    grid
                    w-full
                    max-w-xl
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {preguntas[paso].opciones.map((opcion, optionIndex) => {
                    const isSelected = seleccion === optionIndex;

                    return (
                      <motion.button
                        key={`${paso}-${opcion}`}
                        type="button"
                        onClick={() => manejarRespuesta(optionIndex)}
                        disabled={bloqueado}
                        className="
                          relative
                          min-h-[58px]
                          border
                          px-5
                          py-4
                          text-left
                          disabled:cursor-not-allowed
                        "
                        style={{
                          backgroundColor: isSelected
                            ? palette.ink
                            : palette.paperLight,
                          borderColor: isSelected
                            ? palette.ink
                            : "rgba(164,134,84,0.3)",
                          color: isSelected
                            ? palette.paperLight
                            : palette.inkSoft,
                        }}
                        whileHover={
                          bloqueado
                            ? undefined
                            : {
                                y: -2,
                                borderColor: palette.antiqueGold,
                              }
                        }
                        whileTap={
                          bloqueado
                            ? undefined
                            : {
                                scale: 0.985,
                              }
                        }
                      >
                        <span
                          className="
                            mr-3
                            font-serif
                            text-xs
                          "
                          style={{
                            color: isSelected
                              ? "rgba(251,249,244,0.68)"
                              : palette.antiqueGoldDark,
                          }}
                        >
                          {String.fromCharCode(65 + optionIndex)}.
                        </span>

                        <span
                          className="
                            font-serif
                            text-[14px]
                            sm:text-[15px]
                          "
                        >
                          {opcion}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="quiz-result"
                ref={resultadoRef}
                className="
                  relative
                  z-10
                  flex
                  min-h-[650px]
                  flex-col
                  items-center
                  px-5
                  py-12
                  text-center
                  sm:px-10
                  sm:py-14
                  md:px-14
                "
                style={{
                  backgroundColor: palette.paperLight,
                }}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                  "
                  style={{
                    color: palette.antiqueGoldDark,
                    borderColor: "rgba(164,134,84,0.42)",
                  }}
                >
                  <TrophyIcon />
                </div>

                <p
                  className="
                    mt-6
                    text-[8px]
                    uppercase
                    tracking-[0.4em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.antiqueGoldDark,
                  }}
                >
                  Resultado final
                </p>

                <div className="mt-5">
                  <DecorativeDivider />
                </div>

                <h3
                  className="
                    mt-7
                    font-serif
                    text-[34px]
                    font-normal
                    leading-tight
                    sm:text-[43px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >
                  {nombre.trim()}, acertaste
                </h3>

                <p
                  className="
                    mt-4
                    font-serif
                    text-[72px]
                    leading-none
                    tracking-[-0.06em]
                    sm:text-[92px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >
                  {finalScore}
                </p>

                <p
                  className="
                    mt-3
                    text-[9px]
                    uppercase
                    tracking-[0.34em]
                    sm:text-[10px]
                  "
                  style={{
                    color: palette.warmGray,
                  }}
                >
                  De {preguntas.length} preguntas
                </p>

                <div
                  className="
                    mx-auto
                    mt-10
                    w-full
                    max-w-xl
                    border-t
                    pt-9
                  "
                  style={{
                    borderColor: "rgba(164,134,84,0.3)",
                  }}
                >
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.36em]
                      sm:text-[9px]
                    "
                    style={{
                      color: palette.antiqueGoldDark,
                    }}
                  >
                    Los invitados que mejor nos conocen
                  </p>

                  {cargandoRanking ? (
                    <p
                      className="
                        mt-10
                        font-serif
                        text-sm
                        italic
                      "
                      style={{
                        color: palette.warmGray,
                      }}
                    >
                      Actualizando resultados…
                    </p>
                  ) : ranking.length > 0 ? (
                    <div
                      className="
                        mt-9
                        flex
                        items-end
                        justify-center
                        gap-3
                        sm:gap-5
                      "
                    >
                      <PodiumPlace participant={ranking[1]} place={2} />
                      <PodiumPlace participant={ranking[0]} place={1} />
                      <PodiumPlace participant={ranking[2]} place={3} />
                    </div>
                  ) : (
                    <p
                      className="
                        mt-9
                        font-serif
                        text-sm
                        italic
                        leading-7
                      "
                      style={{
                        color: palette.warmGray,
                      }}
                    >
                      El ranking estará disponible cuando se registren los
                      primeros resultados.
                    </p>
                  )}
                </div>

                <motion.button
                  type="button"
                  onClick={guardarResultado}
                  disabled={guardandoImagen}
                  className="
                    mt-11
                    inline-flex
                    min-w-[230px]
                    items-center
                    justify-center
                    gap-3
                    border
                    px-8
                    py-4
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    sm:min-w-[260px]
                  "
                  style={{
                    backgroundColor: palette.ink,
                    borderColor: palette.ink,
                    color: palette.paperLight,
                  }}
                  whileHover={
                    guardandoImagen
                      ? undefined
                      : {
                          y: -2,
                          backgroundColor: palette.inkSoft,
                        }
                  }
                  whileTap={
                    guardandoImagen
                      ? undefined
                      : {
                          scale: 0.985,
                        }
                  }
                >
                  <DownloadIcon />

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.28em]
                      sm:text-[10px]
                    "
                  >
                    {guardandoImagen
                      ? "Preparando imagen"
                      : "Guardar resultado"}
                  </span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.p
          className="
            mx-auto
            mt-10
            max-w-xl
            text-center
            font-serif
            text-[14px]
            italic
            leading-7
            sm:mt-12
            sm:text-base
          "
          style={{
            color: palette.warmGray,
          }}
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.85,
            delay: 0.25,
          }}
        >
          Gracias por formar parte de nuestra historia y compartir este momento
          con nosotros.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Preguntas;