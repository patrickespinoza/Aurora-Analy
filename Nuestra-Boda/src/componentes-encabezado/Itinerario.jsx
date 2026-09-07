import { motion } from "framer-motion";

/* =========================================
   ITINERARIO CLÁSICO EDITORIAL
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

const events = [
  {
    time: "18:00",
    title: "Ceremonia",
    description: "Ceremonia civil con nuestros seres queridos.",
    icon: "rings",
  },
  {
    time: "19:30",
    title: "Recepción",
    description: "Bienvenida con cóctel y música en vivo.",
    icon: "glass",
  },
  {
    time: "21:00",
    title: "Cena",
    description: "Banquete con un menú especialmente diseñado.",
    icon: "dinner",
  },
  {
    time: "23:00",
    title: "Fiesta",
    description: "Una noche para bailar y celebrar juntos.",
    icon: "music",
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
   ICONOS
========================================= */

function EventIcon({ type }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.25",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-5 w-5 sm:h-6 sm:w-6",
    "aria-hidden": true,
  };

  if (type === "rings") {
    return (
      <svg {...commonProps}>
        <circle cx="9" cy="12" r="5" />
        <circle cx="15" cy="12" r="5" />
        <path d="M12 5.5 14 3l2 2.5" />
      </svg>
    );
  }

  if (type === "glass") {
    return (
      <svg {...commonProps}>
        <path d="M7 4h10l-1.2 7.2A4 4 0 0 1 12 14.5a4 4 0 0 1-3.8-3.3Z" />
        <path d="M12 14.5V21" />
        <path d="M8.5 21h7" />
        <path d="M8.5 8h7" />
      </svg>
    );
  }

  if (type === "dinner") {
    return (
      <svg {...commonProps}>
        <path d="M7 3v8" />
        <path d="M4.5 3v5a2.5 2.5 0 0 0 5 0V3" />
        <path d="M7 11v10" />
        <path d="M16 3v18" />
        <path d="M16 3c2.5 2 3.5 5.5 0 8" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M9 18V5l10-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="16" cy="16" r="3" />
    </svg>
  );
}

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

/* =========================================
   EVENTO DE LA CRONOLOGÍA
========================================= */

function TimelineEvent({ event, index, isLast }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.85,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        grid
        grid-cols-[44px_1fr]
        gap-5
        sm:grid-cols-[58px_1fr]
        sm:gap-7
        lg:grid-cols-[1fr_80px_1fr]
        lg:gap-10
      "
    >
      {/* LÍNEA VERTICAL EN MÓVIL */}

      {!isLast && (
        <div
          className="
            absolute
            left-[21px]
            top-11
            h-[calc(100%+28px)]
            w-px
            sm:left-[28px]
            lg:hidden
          "
          style={{
            backgroundColor: "rgba(164,134,84,0.32)",
          }}
        />
      )}

      {/* CONTENIDO IZQUIERDO EN COMPUTADORA */}

      <div
        className={`
          hidden
          lg:flex
          lg:flex-col
          lg:justify-center
          ${isEven ? "lg:items-end lg:text-right" : "lg:invisible"}
        `}
      >
        {isEven && (
          <EventContent
            event={event}
            index={index}
            alignment="right"
          />
        )}
      </div>

      {/* MARCADOR CENTRAL */}

      <div
        className="
          relative
          z-10
          col-start-1
          row-start-1
          flex
          justify-center
          lg:col-start-2
        "
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
            bg-[#FBF9F4]
            sm:h-14
            sm:w-14
          "
          style={{
            borderColor: "rgba(164,134,84,0.55)",
            color: palette.antiqueGoldDark,
            boxShadow: "0 7px 20px rgba(29,39,51,0.08)",
          }}
        >
          <EventIcon type={event.icon} />
        </div>

        {!isLast && (
          <div
            className="
              pointer-events-none
              absolute
              top-14
              hidden
              h-[calc(100%+50px)]
              w-px
              lg:block
            "
            style={{
              backgroundColor: "rgba(164,134,84,0.32)",
            }}
          />
        )}
      </div>

      {/* CONTENIDO MÓVIL Y DERECHO EN COMPUTADORA */}

      <div
        className={`
          col-start-2
          row-start-1
          pb-11
          sm:pb-14
          lg:col-start-3
          lg:flex
          lg:flex-col
          lg:justify-center
          ${isEven ? "lg:invisible" : "lg:items-start lg:text-left"}
        `}
      >
        <div className="lg:hidden">
          <EventContent
            event={event}
            index={index}
            alignment="left"
          />
        </div>

        {!isEven && (
          <div className="hidden lg:block">
            <EventContent
              event={event}
              index={index}
              alignment="left"
            />
          </div>
        )}
      </div>
    </motion.article>
  );
}

/* =========================================
   CONTENIDO DE CADA EVENTO
========================================= */

function EventContent({ event, index, alignment }) {
  const isRight = alignment === "right";

  return (
    <div
      className={`
        w-full
        max-w-md
        ${isRight ? "lg:ml-auto" : "lg:mr-auto"}
      `}
    >
      <p
        className="
          text-[8px]
          uppercase
          tracking-[0.34em]
          sm:text-[9px]
        "
        style={{
          color: palette.antiqueGoldDark,
        }}
      >
        Momento {String(index + 1).padStart(2, "0")}
      </p>

      <div
        className={`
          mt-3
          flex
          flex-col
          gap-2
          sm:flex-row
          sm:items-baseline
          sm:gap-4
          ${
            isRight
              ? "sm:justify-start lg:flex-row-reverse lg:justify-start"
              : "sm:justify-start"
          }
        `}
      >
        <p
          className="
            font-serif
            text-[33px]
            leading-none
            tracking-[-0.025em]
            sm:text-[39px]
          "
          style={{
            color: palette.ink,
          }}
        >
          {event.time}
        </p>

        <span
          className="
            hidden
            h-px
            w-8
            sm:block
          "
          style={{
            backgroundColor: "rgba(164,134,84,0.55)",
          }}
        />

        <h3
          className="
            font-serif
            text-[24px]
            font-normal
            sm:text-[28px]
          "
          style={{
            color: palette.inkSoft,
          }}
        >
          {event.title}
        </h3>
      </div>

      <p
        className="
          mt-4
          font-serif
          text-[14px]
          leading-7
          sm:text-[15px]
        "
        style={{
          color: palette.warmGray,
        }}
      >
        {event.description}
      </p>
    </div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function ItinerarioRelojCentral() {
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
        w-full
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
            mb-16
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-20
            lg:mb-24
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
            Itinerario
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
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
          >
            El orden de nuestro día
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
            Cada momento ha sido pensado para compartir, celebrar y guardar
            juntos un recuerdo inolvidable.
          </p>
        </motion.div>

        {/* FECHA CENTRAL */}

        <motion.div
          className="
            mx-auto
            mb-14
            flex
            max-w-sm
            flex-col
            items-center
            border-y
            px-5
            py-7
            text-center
            sm:mb-16
          "
          style={{
            borderColor: "rgba(164,134,84,0.34)",
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
            Nuestra celebración
          </p>

          <p
            className="
              mt-3
              font-serif
              text-[42px]
              leading-none
              sm:text-[48px]
            "
            style={{
              color: palette.ink,
            }}
          >
            11
          </p>

          <p
            className="
              mt-2
              text-[9px]
              uppercase
              tracking-[0.4em]
              sm:text-[10px]
            "
            style={{
              color: palette.warmGray,
            }}
          >
            Junio
          </p>
        </motion.div>

        {/* CRONOLOGÍA */}

        <div className="mx-auto max-w-5xl">
          {events.map((event, index) => (
            <TimelineEvent
              key={`${event.time}-${event.title}`}
              event={event}
              index={index}
              isLast={index === events.length - 1}
            />
          ))}
        </div>

        {/* CIERRE */}

        <motion.div
          className="
            mx-auto
            mt-10
            flex
            max-w-xl
            flex-col
            items-center
            text-center
            sm:mt-14
            lg:mt-16
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
            duration: 0.9,
            delay: 0.25,
          }}
        >
          <DecorativeDivider />

          <p
            className="
              mt-6
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
            Esperamos vivir cada momento contigo.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}