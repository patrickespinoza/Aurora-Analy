import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================
   FRASE EN MODAL — ESTILO CLÁSICO
========================================= */

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

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
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
        className="h-px w-10 sm:w-16"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(164,134,84,0.72))",
        }}
      />
    </div>
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

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M9 11H5.5A2.5 2.5 0 0 0 3 13.5V18h6v-7Z" />
      <path d="M21 11h-3.5a2.5 2.5 0 0 0-2.5 2.5V18h6v-7Z" />
      <path d="M9 11c0-3.2-1.2-5.3-3.6-6.5" />
      <path d="M21 11c0-3.2-1.2-5.3-3.6-6.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export default function FraseModal() {
  const [modalAbierto, setModalAbierto] = useState(false);

  /* BLOQUEAR SCROLL CUANDO EL MODAL ESTÁ ABIERTO */

  useEffect(() => {
    if (!modalAbierto) return undefined;

    const overflowAnterior = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowAnterior;
    };
  }, [modalAbierto]);

  /* CERRAR CON ESCAPE */

  useEffect(() => {
    if (!modalAbierto) return undefined;

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setModalAbierto(false);
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [modalAbierto]);

  return (
    <>
      {/* =========================================
          SECCIÓN PRINCIPAL
      ========================================= */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          relative
          flex
          min-h-[520px]
          w-full
          items-center
          justify-center
          overflow-hidden
          px-6
          py-24
          text-center
          sm:min-h-[600px]
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
              ${palette.paper} 58%,
              ${palette.paperDark} 100%
            )
          `,
        }}
      >
        {/* TEXTURA DE PAPEL */}

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

        {/* RAMAS DECORATIVAS */}

        <BotanicalBranch
          className="
            pointer-events-none
            absolute
            -bottom-14
            -left-8
            h-[250px]
            w-[145px]
            -rotate-12
            text-[#A48654]/12
            sm:h-[310px]
            sm:w-[180px]
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
            text-[#A48654]/12
            sm:h-[310px]
            sm:w-[180px]
          "
        />

        {/* CONTENIDO */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            max-w-3xl
            flex-col
            items-center
          "
        >
          <motion.p
            className="
              text-[8px]
              uppercase
              tracking-[0.44em]
              sm:text-[10px]
              sm:tracking-[0.55em]
            "
            style={{
              color: palette.antiqueGoldDark,
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
              duration: 0.8,
            }}
          >
            Palabras que nos representan
          </motion.p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <motion.h2
            className="
              mt-8
              font-serif
              text-[39px]
              font-normal
              leading-tight
              tracking-[-0.025em]
              sm:text-[53px]
              md:text-[62px]
            "
            style={{
              color: palette.ink,
            }}
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
              delay: 0.1,
            }}
          >
            Una frase para nuestra historia
          </motion.h2>

          <motion.p
            className="
              mx-auto
              mt-6
              max-w-xl
              font-serif
              text-[15px]
              italic
              leading-7
              sm:text-base
            "
            style={{
              color: palette.warmGray,
            }}
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.18,
            }}
          >
            Hay palabras que parecen haber sido escritas para describir aquello
            que sentimos cuando estamos juntos.
          </motion.p>

          <motion.button
            type="button"
            onClick={() => setModalAbierto(true)}
            className="
              mt-10
              inline-flex
              min-w-[230px]
              items-center
              justify-center
              gap-3
              border
              px-8
              py-4
              sm:min-w-[260px]
              sm:px-10
            "
            style={{
              backgroundColor: palette.ink,
              borderColor: palette.ink,
              color: palette.paperLight,
              boxShadow: "0 12px 28px rgba(29,39,51,0.12)",
            }}
            whileHover={{
              y: -2,
              backgroundColor: palette.inkSoft,
            }}
            whileTap={{
              scale: 0.985,
            }}
          >
            <QuoteIcon />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                sm:text-[10px]
                sm:tracking-[0.34em]
              "
            >
              Leer nuestra frase
            </span>
          </motion.button>
        </div>
      </motion.section>

      {/* =========================================
          MODAL
      ========================================= */}

      <AnimatePresence>
        {modalAbierto && (
          <motion.div
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
              bg-[#111820]/75
              px-4
              py-6
              backdrop-blur-sm
              sm:px-8
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setModalAbierto(false);
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-frase-modal"
          >
            <motion.div
              className="
                relative
                flex
                max-h-[90dvh]
                w-full
                max-w-4xl
                flex-col
                items-center
                overflow-y-auto
                border
                px-7
                py-16
                text-center
                sm:px-12
                sm:py-20
                lg:px-20
              "
              style={{
                backgroundColor: palette.paperLight,
                borderColor: "rgba(164,134,84,0.45)",
                boxShadow: "0 30px 100px rgba(0,0,0,0.32)",
              }}
              initial={{
                opacity: 0,
                y: 24,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 16,
                scale: 0.98,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* BORDE INTERIOR */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[7px]
                  border
                "
                style={{
                  borderColor: "rgba(164,134,84,0.15)",
                }}
              />

              {/* TEXTURA */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.14]
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

              {/* CERRAR */}

              <motion.button
                type="button"
                onClick={() => setModalAbierto(false)}
                aria-label="Cerrar frase"
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  bg-[#FBF9F4]
                  sm:right-6
                  sm:top-6
                "
                style={{
                  color: palette.ink,
                  borderColor: "rgba(164,134,84,0.4)",
                }}
                whileHover={{
                  scale: 1.04,
                  backgroundColor: palette.paper,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <CloseIcon />
              </motion.button>

              {/* CONTENIDO DEL MODAL */}

              <div
                className="
                  relative
                  z-10
                  flex
                  w-full
                  flex-col
                  items-center
                "
              >
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.42em]
                    sm:text-[10px]
                  "
                  style={{
                    color: palette.antiqueGoldDark,
                  }}
                >
                  Una historia de amor
                </p>

                <div className="mt-5">
                  <DecorativeDivider />
                </div>

                <span
                  className="
                    mt-8
                    block
                    font-serif
                    text-[72px]
                    leading-[0.6]
                    sm:text-[90px]
                  "
                  style={{
                    color: "rgba(164,134,84,0.25)",
                  }}
                >
                  “
                </span>

                <blockquote
                  id="titulo-frase-modal"
                  className="
                    mx-auto
                    mt-5
                    max-w-3xl
                    font-serif
                    text-[27px]
                    font-normal
                    leading-[1.55]
                    tracking-[-0.02em]
                    sm:text-[37px]
                    sm:leading-[1.5]
                    md:text-[43px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >
                  Sea cual sea la materia de que están hechas nuestras almas,
                  <span className="block">
                    la suya y la mía son iguales.
                  </span>
                </blockquote>

                <div className="my-9 sm:my-11">
                  <DecorativeDivider />
                </div>

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    sm:text-[11px]
                    sm:tracking-[0.42em]
                  "
                  style={{
                    color: palette.warmGray,
                  }}
                >
                  Emily Brontë
                </p>

                <p
                  className="
                    mt-9
                    max-w-lg
                    font-serif
                    text-[14px]
                    italic
                    leading-7
                    sm:text-base
                  "
                  style={{
                    color: palette.inkSoft,
                  }}
                >
                  Una frase que nos recuerda que algunas almas simplemente se
                  reconocen.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}