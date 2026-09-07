import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/* =========================================
   MESA DE REGALOS — ESTILO CLÁSICO
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

/* =========================================
   ORNAMENTO DE ESQUINA
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

/* =========================================
   RAMA BOTÁNICA
========================================= */

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

/* =========================================
   SEPARADOR
========================================= */

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

function GiftIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="8" width="18" height="13" />
      <path d="M12 8v13" />
      <path d="M3 12h18" />
      <path d="M7.5 8C5.6 8 4 6.7 4 5.2 4 4 5 3 6.3 3 9.2 3 12 8 12 8" />
      <path d="M16.5 8C18.4 8 20 6.7 20 5.2 20 4 19 3 17.7 3 14.8 3 12 8 12 8" />
    </svg>
  );
}

function ExternalLinkIcon() {
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
      <path d="M14 5h5v5" />
      <path d="m19 5-8 8" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
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

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

const Regalos = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const numeroEvento = "12345678";

  const linkLiverpool = `https://www.liverpool.com.mx/tienda/giftregistry/giftRegistryDetail.jsp?eventNo=${numeroEvento}`;

  /* BLOQUEAR SCROLL CUANDO EL MODAL ESTÁ ABIERTO */

  useEffect(() => {
    if (!mostrarModal) return undefined;

    const bodyOverflowAnterior = document.body.style.overflow;
    const htmlOverflowAnterior = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = bodyOverflowAnterior;
      document.documentElement.style.overflow = htmlOverflowAnterior;
    };
  }, [mostrarModal]);

  /* CERRAR CON ESCAPE */

  useEffect(() => {
    if (!mostrarModal) return undefined;

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setMostrarModal(false);
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [mostrarModal]);

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
          amount: 0.12,
        }}
        className="
          relative
          flex
          min-h-[680px]
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

        {/* ORNAMENTOS */}

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
            flex
            w-full
            max-w-4xl
            flex-col
            items-center
            text-center
          "
        >
          <motion.div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              sm:h-20
              sm:w-20
            "
            style={{
              color: palette.antiqueGoldDark,
              borderColor: "rgba(164,134,84,0.42)",
            }}
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            <GiftIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          </motion.div>

          <motion.p
            className="
              mt-7
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
              delay: 0.08,
            }}
          >
            Un detalle para nuestro hogar
          </motion.p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <motion.h2
            className="
              mt-8
              font-serif
              text-[40px]
              font-normal
              leading-tight
              tracking-[-0.025em]
              sm:text-[54px]
              md:text-[64px]
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
              delay: 0.12,
            }}
          >
            Mesa de regalos
          </motion.h2>

          <motion.p
            className="
              mx-auto
              mt-6
              max-w-2xl
              font-serif
              text-[15px]
              italic
              leading-7
              sm:text-[17px]
              sm:leading-8
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
            Su presencia en este día es el regalo más importante para nosotros.
            Para quienes deseen tener un detalle adicional, hemos preparado una
            mesa de regalos en Liverpool.
          </motion.p>

          {/* INFORMACIÓN BREVE */}

          <motion.div
            className="
              mx-auto
              mt-10
              w-full
              max-w-xl
              border-y
              px-5
              py-7
              sm:mt-12
              sm:px-10
            "
            style={{
              borderColor: "rgba(164,134,84,0.3)",
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
              duration: 0.85,
              delay: 0.24,
            }}
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.38em]
                sm:text-[9px]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
            >
              Liverpool
            </p>

            <p
              className="
                mt-4
                font-serif
                text-[15px]
                leading-7
                sm:text-base
              "
              style={{
                color: palette.inkSoft,
              }}
            >
              Consulta el número de evento y el acceso directo dentro de
              nuestra tarjeta de regalos.
            </p>
          </motion.div>

          {/* BOTÓN */}

          <motion.button
            type="button"
            onClick={() => setMostrarModal(true)}
            className="
              mt-10
              inline-flex
              min-w-[240px]
              items-center
              justify-center
              gap-3
              border
              px-8
              py-4
              sm:min-w-[280px]
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
            <GiftIcon className="h-4 w-4" />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                sm:text-[10px]
                sm:tracking-[0.34em]
              "
            >
              Ver mesa de regalos
            </span>
          </motion.button>
        </div>
      </motion.section>

      {/* =========================================
          MODAL
      ========================================= */}

      <AnimatePresence>
        {mostrarModal && (
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
              bg-[#111820]/78
              px-4
              py-5
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
                setMostrarModal(false);
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gift-modal-title"
          >
            <motion.div
              className="
                relative
                max-h-[92dvh]
                w-full
                max-w-2xl
                overflow-y-auto
                border
                px-6
                py-14
                text-center
                sm:px-10
                sm:py-16
                md:px-14
              "
              style={{
                backgroundColor: palette.paperLight,
                borderColor: "rgba(164,134,84,0.48)",
                boxShadow: "0 30px 100px rgba(0,0,0,0.34)",
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

              {/* CERRAR */}

              <motion.button
                type="button"
                onClick={() => setMostrarModal(false)}
                aria-label="Cerrar mesa de regalos"
                className="
                  absolute
                  right-4
                  top-4
                  z-30
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
                  borderColor: "rgba(164,134,84,0.42)",
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

              {/* CONTENIDO */}

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
                  <GiftIcon />
                </div>

                <p
                  className="
                    mt-6
                    text-[8px]
                    uppercase
                    tracking-[0.42em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.antiqueGoldDark,
                  }}
                >
                  Mesa de regalos
                </p>

                <div className="mt-5">
                  <DecorativeDivider />
                </div>

                <h2
                  id="gift-modal-title"
                  className="
                    mt-7
                    font-serif
                    text-[36px]
                    font-normal
                    tracking-[-0.02em]
                    sm:text-[46px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >
                  Liverpool
                </h2>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-lg
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
                  Hemos seleccionado algunos detalles que serán parte del hogar
                  y de la nueva etapa que comenzaremos juntos.
                </p>

                {/* NÚMERO DE EVENTO */}

                <div
                  className="
                    mx-auto
                    mt-10
                    w-full
                    max-w-md
                    border-y
                    px-5
                    py-8
                  "
                  style={{
                    borderColor: "rgba(164,134,84,0.32)",
                  }}
                >
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.38em]
                      sm:text-[9px]
                    "
                    style={{
                      color: palette.warmGray,
                    }}
                  >
                    Número de evento
                  </p>

                  <p
                    className="
                      mt-4
                      break-all
                      font-serif
                      text-[32px]
                      tracking-[0.12em]
                      sm:text-[40px]
                      sm:tracking-[0.18em]
                    "
                    style={{
                      color: palette.ink,
                    }}
                  >
                    {numeroEvento}
                  </p>
                </div>

                {/* BOTÓN LIVERPOOL */}

                <motion.a
                  href={linkLiverpool}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    sm:min-w-[270px]
                  "
                  style={{
                    backgroundColor: palette.ink,
                    borderColor: palette.ink,
                    color: palette.paperLight,
                  }}
                  whileHover={{
                    y: -2,
                    backgroundColor: palette.inkSoft,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                >
                  <ExternalLinkIcon />

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.28em]
                      sm:text-[10px]
                    "
                  >
                    Abrir mesa en Liverpool
                  </span>
                </motion.a>

                <div className="mt-10">
                  <DecorativeDivider compact />
                </div>

                <p
                  className="
                    mt-6
                    max-w-lg
                    font-serif
                    text-[14px]
                    italic
                    leading-7
                  "
                  style={{
                    color: palette.inkSoft,
                  }}
                >
                  Gracias por acompañarnos y por formar parte de este nuevo
                  capítulo de nuestra historia.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Regalos;