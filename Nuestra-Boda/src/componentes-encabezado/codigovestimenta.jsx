import React from "react";
import { motion } from "framer-motion";

/* =========================================
   CÓDIGO DE VESTIMENTA — CLÁSICO SIN IMÁGENES
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
   ICONOS
========================================= */

function SuitIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-10 w-10 sm:h-12 sm:w-12"
    >
      <path d="M16 8 8 13v27h32V13l-8-5" />
      <path d="m16 8 8 8 8-8" />
      <path d="m19 13 5 7 5-7" />
      <path d="M24 20v20" />
      <path d="M16 8V4h16v4" />
      <path d="M8 23h9" />
      <path d="M31 23h9" />
    </svg>
  );
}

function DressIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-10 w-10 sm:h-12 sm:w-12"
    >
      <path d="M19 5h10" />
      <path d="M20 5c0 6-2 10-5 14" />
      <path d="M28 5c0 6 2 10 5 14" />
      <path d="M15 19h18" />
      <path d="m15 19-7 23h32l-7-23" />
      <path d="M19 5c1 3 2.5 5 5 7 2.5-2 4-4 5-7" />
      <path d="M16 27h16" />
    </svg>
  );
}

function AdultEventIcon() {
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
      <path d="M7 4h10" />
      <path d="m8.5 4 1.2 6a4.3 4.3 0 0 0 8.5 0l1.2-6" />
      <path d="M14 14v6" />
      <path d="M10.5 20h7" />
      <path d="M9.5 8h9" />
    </svg>
  );
}

/* =========================================
   OPCIÓN DE VESTIMENTA
========================================= */

function DressOption({
  title,
  subtitle,
  description,
  details,
  icon,
  index,
}) {
  return (
    <motion.article
      className="
        relative
        flex
        min-h-[390px]
        w-full
        flex-col
        items-center
        justify-center
        border
        px-7
        py-12
        text-center
        sm:min-h-[430px]
        sm:px-10
        sm:py-14
      "
      style={{
        backgroundColor: "rgba(251,249,244,0.76)",
        borderColor: "rgba(164,134,84,0.3)",
        boxShadow: "0 18px 45px rgba(29,39,51,0.06)",
      }}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.85,
        delay: 0.12 + index * 0.12,
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
          borderColor: "rgba(164,134,84,0.11)",
        }}
      />

      {/* NÚMERO EDITORIAL */}

      <p
        className="
          absolute
          left-5
          top-5
          font-serif
          text-xs
          tracking-[0.2em]
          sm:left-7
          sm:top-7
        "
        style={{
          color: "rgba(164,134,84,0.65)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </p>

      {/* ICONO */}

      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border
          sm:h-24
          sm:w-24
        "
        style={{
          borderColor: "rgba(164,134,84,0.42)",
          color: palette.antiqueGoldDark,
        }}
      >
        {icon}
      </div>

      <div className="mt-8">
        <DecorativeDivider compact />
      </div>

      <h3
        className="
          mt-7
          font-serif
          text-[31px]
          font-normal
          tracking-[-0.02em]
          sm:text-[38px]
        "
        style={{
          color: palette.ink,
        }}
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-[8px]
          uppercase
          tracking-[0.36em]
          sm:text-[9px]
        "
        style={{
          color: palette.antiqueGoldDark,
        }}
      >
        {subtitle}
      </p>

      <p
        className="
          mx-auto
          mt-6
          max-w-sm
          font-serif
          text-[15px]
          leading-7
          sm:text-base
        "
        style={{
          color: palette.inkSoft,
        }}
      >
        {description}
      </p>

      <p
        className="
          mx-auto
          mt-4
          max-w-xs
          font-serif
          text-[13px]
          italic
          leading-6
          sm:text-[14px]
        "
        style={{
          color: palette.warmGray,
        }}
      >
        {details}
      </p>
    </motion.article>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

const DressCodePremium = () => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
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

      {/* MARCOS DE LA SECCIÓN */}

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

      {/* DETALLES BOTÁNICOS */}

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
            flex
            max-w-3xl
            flex-col
            items-center
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
            Detalles de la celebración
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
            Código de vestimenta
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
            Nos encantará verlos elegantes y acordes con la ocasión en este
            día tan importante para nosotros.
          </p>
        </motion.div>

        {/* OPCIONES */}

        <div
          className="
            mx-auto
            grid
            max-w-5xl
            gap-7
            sm:gap-9
            md:grid-cols-2
          "
        >
          <DressOption
            title="Caballeros"
            subtitle="Vestimenta formal"
            description="Traje formal en tonos oscuros acompañado de camisa, corbata y calzado elegante."
            details="Sugerimos negro, azul marino, gris oscuro o tonalidades similares."
            icon={<SuitIcon />}
            index={0}
          />

          <DressOption
            title="Damas"
            subtitle="Vestimenta formal"
            description="Vestido largo o atuendo de noche elegante, apropiado para una celebración formal."
            details="Agradecemos reservar los colores demasiado claros para la novia."
            icon={<DressIcon />}
            index={1}
          />
        </div>

        {/* NOTA DE ETIQUETA */}

        <motion.div
          className="
            mx-auto
            mt-12
            max-w-2xl
            border-y
            px-5
            py-8
            text-center
            sm:mt-16
            sm:px-8
          "
          style={{
            borderColor: "rgba(164,134,84,0.3)",
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
            duration: 0.85,
            delay: 0.28,
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
            Etiqueta formal
          </p>

          <p
            className="
              mx-auto
              mt-4
              max-w-lg
              font-serif
              text-[15px]
              leading-7
              sm:text-base
            "
            style={{
              color: palette.inkSoft,
            }}
          >
            Elegante y acorde con la ocasión. Agradecemos evitar vestimenta
            casual, mezclilla y calzado deportivo.
          </p>
        </motion.div>

        {/* SOLO ADULTOS */}

        <motion.div
          className="
            mx-auto
            mt-12
            flex
            max-w-xl
            flex-col
            items-center
            text-center
            sm:mt-14
          "
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
            delay: 0.36,
          }}
        >
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
            "
            style={{
              borderColor: "rgba(164,134,84,0.42)",
              color: palette.antiqueGoldDark,
            }}
          >
            <AdultEventIcon />
          </div>

          <p
            className="
              mt-5
              text-[8px]
              uppercase
              tracking-[0.4em]
              sm:text-[9px]
            "
            style={{
              color: palette.antiqueGoldDark,
            }}
          >
            Consideración especial
          </p>

          <p
            className="
              mt-3
              font-serif
              text-[22px]
              italic
              sm:text-[26px]
            "
            style={{
              color: palette.ink,
            }}
          >
            Celebración exclusiva para adultos
          </p>

          <p
            className="
              mt-3
              max-w-md
              font-serif
              text-[14px]
              leading-7
              sm:text-[15px]
            "
            style={{
              color: palette.warmGray,
            }}
          >
            Deseamos que esta noche sea una oportunidad para celebrar,
            conversar y disfrutar juntos.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodePremium;