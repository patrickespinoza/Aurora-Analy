import { motion } from "framer-motion";

/* =========================================
   FRASE EDITORIAL CLÁSICA
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
  line: "#C9BEAC",
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
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

function BotanicalDetail({ className = "" }) {
  return (
    <svg
      viewBox="0 0 130 210"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M66 203C70 158 70 112 65 17"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M66 164C49 153 39 139 34 121"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M66 139C82 128 92 113 96 94"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M65 103C50 92 42 79 39 64"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M65 76C80 66 87 52 89 38"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M34 121C44 120 52 126 57 137C46 137 38 132 34 121Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M96 94C86 94 78 100 72 111C84 111 92 105 96 94Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M39 64C49 65 57 71 61 82C50 81 42 75 39 64Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M89 38C80 39 73 45 68 55C79 54 86 49 89 38Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <circle
        cx="65"
        cy="16"
        r="3"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

function SmallDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-14"
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
        className="h-px w-10 sm:w-14"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(164,134,84,0.72))",
        }}
      />
    </div>
  );
}

export default function FrasePremium() {
  return (
    <motion.section
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.18,
      }}
      className="
        relative
        flex
        min-h-[620px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-24
        text-center
        sm:min-h-[700px]
        sm:px-8
        sm:py-28
        lg:min-h-[680px]
        lg:px-12
        lg:py-32
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            ${palette.paperLight} 0%,
            ${palette.paper} 55%,
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

      {/* MARCO EXTERIOR */}

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
          borderColor: "rgba(164,134,84,0.26)",
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

      {/* DETALLES BOTÁNICOS */}

      <BotanicalDetail
        className="
          pointer-events-none
          absolute
          -bottom-8
          -left-5
          h-[210px]
          w-[130px]
          -rotate-12
          text-[#A48654]/20
          sm:-left-1
          sm:h-[260px]
          sm:w-[160px]
          lg:left-8
          lg:h-[310px]
          lg:w-[190px]
        "
      />

      <BotanicalDetail
        className="
          pointer-events-none
          absolute
          -right-5
          -top-10
          h-[210px]
          w-[130px]
          rotate-[168deg]
          text-[#A48654]/20
          sm:-right-1
          sm:h-[260px]
          sm:w-[160px]
          lg:right-8
          lg:h-[310px]
          lg:w-[190px]
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
          max-w-5xl
          flex-col
          items-center
        "
      >
        {/* ETIQUETA */}

        <motion.div
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
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.42em]
              sm:text-[10px]
              sm:tracking-[0.52em]
            "
            style={{
              color: palette.antiqueGoldDark,
            }}
          >
            Una historia de amor
          </p>

          <div className="mt-5">
            <SmallDivider />
          </div>
        </motion.div>

        {/* COMILLA */}

        <motion.span
          className="
            mt-8
            block
            font-serif
            text-[68px]
            font-light
            leading-[0.65]
            sm:mt-10
            sm:text-[86px]
          "
          style={{
            color: "rgba(164,134,84,0.28)",
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
            delay: 0.12,
          }}
        >
          “
        </motion.span>

        {/* FRASE */}

        <motion.blockquote
          className="
            mx-auto
            mt-3
            max-w-4xl
            font-serif
            text-[26px]
            font-normal
            leading-[1.55]
            tracking-[-0.015em]
            sm:text-[35px]
            sm:leading-[1.5]
            md:text-[41px]
            lg:text-[46px]
            lg:leading-[1.42]
          "
          style={{
            color: palette.ink,
          }}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Te quiero no por quien eres,
          <span className="block">
            sino por quien soy
          </span>
          <span className="block">
            cuando estoy contigo.
          </span>
        </motion.blockquote>

        {/* SEPARADOR */}

        <motion.div
          className="
            my-9
            sm:my-11
          "
          initial={{
            opacity: 0,
            scaleX: 0.65,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.32,
          }}
        >
          <SmallDivider />
        </motion.div>

        {/* AUTOR */}

        <motion.p
          className="
            text-[9px]
            uppercase
            tracking-[0.28em]
            sm:text-[11px]
            sm:tracking-[0.4em]
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
            delay: 0.4,
          }}
        >
          Gabriel García Márquez
        </motion.p>

        {/* CIERRE NARRATIVO */}

        <motion.div
          className="
            mt-12
            max-w-lg
            sm:mt-14
          "
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
            delay: 0.5,
          }}
        >
          <div
            className="
              mx-auto
              mb-6
              h-px
              w-16
            "
            style={{
              backgroundColor: "rgba(164,134,84,0.48)",
            }}
          />

          <p
            className="
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
            Desde que nuestros caminos se encontraron, aprendimos que el amor
            también se construye en los pequeños momentos.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}