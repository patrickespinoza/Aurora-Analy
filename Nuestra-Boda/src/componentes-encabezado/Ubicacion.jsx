import { motion } from "framer-motion";

/* =========================================
   EVENTO Y DIRECCIÓN — ESTILO CLÁSICO
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
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
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
   SEPARADOR CLÁSICO
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
   ÍCONO DE UBICACIÓN
========================================= */

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* =========================================
   COMPONENTE
========================================= */

export default function EventoDireccion() {
  return (
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
        min-h-[760px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:min-h-[720px]
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

      {/* MARCO GENERAL */}

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

      {/* ORNAMENTOS DE ESQUINA */}

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

      {/* RAMAS BOTÁNICAS */}

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
          max-w-6xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
            sm:mb-16
            lg:mb-20
          "
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
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
          >
            Nuestra celebración
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
              tracking-[-0.02em]
              sm:text-[54px]
              md:text-[64px]
            "
            style={{
              color: palette.ink,
            }}
          >
            Un día para recordar
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
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
            Nos hará muy felices compartir con ustedes el comienzo de este
            nuevo capítulo.
          </p>
        </motion.div>

        {/* TARJETA DE INFORMACIÓN */}

        <motion.div
          className="
            relative
            overflow-hidden
            border
            lg:grid
            lg:grid-cols-[0.88fr_1.12fr]
          "
          style={{
            backgroundColor: "rgba(251,249,244,0.82)",
            borderColor: "rgba(164,134,84,0.34)",
            boxShadow: "0 24px 65px rgba(29,39,51,0.09)",
          }}
          initial={{
            opacity: 0,
            y: 26,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.12,
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
              borderColor: "rgba(164,134,84,0.12)",
            }}
          />

          {/* COLUMNA DE FECHA */}

          <div
            className="
              relative
              flex
              min-h-[430px]
              flex-col
              items-center
              justify-center
              border-b
              px-7
              py-16
              text-center
              sm:min-h-[470px]
              sm:px-10
              lg:min-h-[570px]
              lg:border-b-0
              lg:border-r
              lg:px-12
            "
            style={{
              borderColor: "rgba(164,134,84,0.24)",
              background: `
                linear-gradient(
                  180deg,
                  rgba(245,241,232,0.62),
                  rgba(228,221,209,0.5)
                )
              `,
            }}
          >
            <motion.p
              className="
                text-[8px]
                uppercase
                tracking-[0.4em]
                sm:text-[10px]
                sm:tracking-[0.5em]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
              initial={{
                opacity: 0,
                y: -10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              Reserve la fecha
            </motion.p>

            <div
              className="
                my-7
                h-px
                w-14
                sm:w-20
              "
              style={{
                backgroundColor: "rgba(164,134,84,0.58)",
              }}
            />

            <motion.p
              className="
                font-serif
                text-lg
                uppercase
                tracking-[0.18em]
                sm:text-xl
              "
              style={{
                color: palette.inkSoft,
              }}
              initial={{
                opacity: 0,
                y: 12,
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
              Domingo
            </motion.p>

            <motion.p
              className="
                my-3
                font-serif
                text-[98px]
                font-normal
                leading-none
                tracking-[-0.06em]
                sm:text-[122px]
                lg:text-[136px]
              "
              style={{
                color: palette.ink,
              }}
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.95,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              11
            </motion.p>

            <motion.p
              className="
                font-serif
                text-[12px]
                uppercase
                tracking-[0.4em]
                sm:text-sm
                sm:tracking-[0.52em]
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
                duration: 0.85,
                delay: 0.35,
              }}
            >
              Junio · 2026
            </motion.p>

            <div className="mt-8">
              <DecorativeDivider compact />
            </div>
          </div>

          {/* COLUMNA DE CEREMONIA */}

          <div
            className="
              relative
              flex
              min-h-[520px]
              flex-col
              items-center
              justify-center
              px-7
              py-16
              text-center
              sm:px-12
              lg:min-h-[570px]
              lg:px-16
            "
          >
            <motion.p
              className="
                text-[9px]
                uppercase
                tracking-[0.42em]
                sm:text-[10px]
                sm:tracking-[0.52em]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
              initial={{
                opacity: 0,
                y: -10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.28,
              }}
            >
              Ceremonia
            </motion.p>

            <motion.h3
              className="
                mt-6
                font-serif
                text-[35px]
                font-normal
                leading-tight
                tracking-[-0.02em]
                sm:text-[45px]
              "
              style={{
                color: palette.ink,
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
                delay: 0.32,
              }}
            >
              Nuestra ceremonia
            </motion.h3>

            <div className="my-8 sm:my-9">
              <DecorativeDivider />
            </div>

            {/* HORA */}

            <motion.div
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
                delay: 0.38,
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
                  color: palette.warmGray,
                }}
              >
                Hora
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-[52px]
                  font-normal
                  leading-none
                  tracking-[-0.035em]
                  sm:text-[66px]
                  lg:text-[72px]
                "
                style={{
                  color: palette.ink,
                }}
              >
                16:30
              </p>

              <p
                className="
                  mt-3
                  text-[8px]
                  uppercase
                  tracking-[0.4em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.antiqueGoldDark,
                }}
              >
                Horas
              </p>
            </motion.div>

            {/* UBICACIÓN */}

            <motion.div
              className="mt-10 sm:mt-11"
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
                delay: 0.46,
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
                Ubicación
              </p>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-md
                  font-serif
                  text-xl
                  leading-relaxed
                  sm:text-[24px]
                "
                style={{
                  color: palette.inkSoft,
                }}
              >
                Consulta la ubicación de nuestra ceremonia
              </p>
            </motion.div>

            {/* BOTÓN */}

            <motion.a
              href="https://maps.app.goo.gl/TsSDUBKAractwi8F8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir ubicación de la ceremonia en Google Maps"
              className="
                group
                mt-10
                inline-flex
                min-w-[220px]
                items-center
                justify-center
                gap-3
                border
                px-8
                py-4
                sm:min-w-[250px]
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
                transition: {
                  duration: 0.25,
                },
              }}
              whileTap={{
                scale: 0.985,
              }}
            >
              <LocationIcon />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  sm:text-[10px]
                  sm:tracking-[0.34em]
                "
              >
                Ver ubicación
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* CIERRE */}

        <motion.p
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            font-serif
            text-[14px]
            italic
            leading-7
            sm:mt-14
            sm:text-base
          "
          style={{
            color: palette.warmGray,
          }}
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.52,
          }}
        >
          Esperamos contar con su presencia en un día que guardaremos para
          siempre en nuestra memoria.
        </motion.p>
      </div>
    </motion.section>
  );
}