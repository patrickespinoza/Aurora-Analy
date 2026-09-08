import { motion } from "framer-motion";

const colores = {
  rosa: "#F277A2",
  rosaFuerte: "#D94F82",
  rosaClaro: "#FFDCE8",
  rosaMuyClaro: "#FFF1F6",
  crema: "#FFF9ED",
  amarillo: "#F5C44D",
  amarilloClaro: "#FFF0B5",
  naranja: "#E9873D",
  verde: "#8EAA68",
  texto: "#67444D",
  textoSuave: "#906F78",
  blanco: "#FFFFFF",
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
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

function FlorDecorativa({
  tipo = "margarita",
  className = "",
  delay = 0,
}) {
  return (
    <motion.span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
      animate={{
        y: [0, -8, 0],
        rotate: [-3, 4, -3],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {tipo === "rosa" ? "🌸" : "🌼"}
    </motion.span>
  );
}

function SeparadorFloral() {
  return (
    <div
      className="flex items-center justify-center gap-3"
      aria-hidden="true"
    >
      <span
        className="
          h-px
          w-10
          bg-gradient-to-r
          from-transparent
          to-[#F5C44D]
          sm:w-16
        "
      />

      <span className="text-xl sm:text-2xl">🌼</span>

      <span
        className="
          h-px
          w-10
          bg-gradient-to-l
          from-transparent
          to-[#F5C44D]
          sm:w-16
        "
      />
    </div>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-8 w-8 sm:h-9 sm:w-9"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}



function DatoPendiente({ titulo }) {
  return (
    <motion.div
      variants={fadeUp}
      className="
        flex
        min-h-[112px]
        flex-col
        items-center
        justify-center
        rounded-[30px]
        border-2
        border-dashed
        px-4
        py-5
        text-center
      "
      style={{
        borderColor: colores.rosaClaro,
        backgroundColor: "rgba(255,255,255,0.65)",
      }}
    >
      <p
        className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.28em]
          sm:text-[10px]
        "
        style={{ color: colores.naranja }}
      >
        {titulo}
      </p>

      <span
        className="
          mt-3
          rounded-full
          px-4
          py-2
          text-xs
          font-semibold
          sm:text-sm
        "
        style={{
          backgroundColor: colores.amarilloClaro,
          color: colores.texto,
        }}
      >
        Información pendiente
      </span>
    </motion.div>
  );
}

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
        lg:min-h-[800px]
        lg:px-12
        lg:py-32
      "
      style={{
        backgroundColor: colores.rosaMuyClaro,
      }}
    >
      {/* MARCOS ONDULADOS */}

      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border-2
          sm:inset-7
          lg:inset-9
        "
        style={{
          borderColor: "rgba(242,119,162,0.5)",
          borderRadius: "46% 54% 48% 52% / 5% 7% 6% 8%",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[22px]
          border
          border-dashed
          sm:inset-[36px]
          lg:inset-[44px]
        "
        style={{
          borderColor: "rgba(245,196,77,0.7)",
          borderRadius: "54% 46% 53% 47% / 7% 5% 8% 6%",
        }}
      />

      {/* FLORES DECORATIVAS */}

      <FlorDecorativa
        className="
          -left-2
          top-1
          text-7xl
          sm:left-3
          sm:top-3
          sm:text-8xl
          lg:text-9xl
        "
      />

      <FlorDecorativa
        tipo="rosa"
        delay={0.8}
        className="
          right-1
          top-12
          text-5xl
          sm:right-6
          sm:text-7xl
        "
      />

      <FlorDecorativa
        tipo="rosa"
        delay={1.4}
        className="
          bottom-10
          left-3
          text-5xl
          sm:bottom-12
          sm:left-7
          sm:text-7xl
        "
      />

      <FlorDecorativa
        delay={0.4}
        className="
          -bottom-2
          -right-3
          text-8xl
          sm:right-2
          sm:text-9xl
        "
      />

      <FlorDecorativa
        delay={1.1}
        className="
          left-[7%]
          top-[40%]
          text-3xl
          sm:left-[10%]
          sm:text-4xl
        "
      />

      <FlorDecorativa
        tipo="rosa"
        delay={1.8}
        className="
          right-[6%]
          top-[43%]
          text-3xl
          sm:right-[9%]
          sm:text-4xl
        "
      />

      <FlorDecorativa
        delay={0.9}
        className="
          right-[14%]
          top-[20%]
          text-2xl
          sm:text-3xl
        "
      />

      <FlorDecorativa
        tipo="rosa"
        delay={1.6}
        className="
          bottom-[15%]
          left-[22%]
          text-2xl
          sm:text-3xl
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[12%]
          top-[23%]
          text-2xl
          opacity-80
          sm:text-3xl
        "
      >
        🌸
      </span>

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[24%]
          right-[10%]
          text-2xl
          opacity-80
          sm:text-3xl
        "
      >
        🌼
      </span>

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[19%]
          top-[8%]
          text-xl
          opacity-80
          sm:text-2xl
        "
      >
        🌸
      </span>

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[8%]
          right-[28%]
          text-xl
          opacity-80
          sm:text-2xl
        "
      >
        🌼
      </span>

      {/* CONTENIDO */}

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.div
          variants={fadeUp}
          className="
            mx-auto
            mb-10
            max-w-2xl
            text-center
            sm:mb-14
          "
        >


          <h2
            className="
              mt-4
              font-cursiveDancing
              text-[52px]
              font-normal
              leading-none
              sm:text-[72px]
            "
            style={{ color: colores.rosaFuerte }}
          >
            La celebración
          </h2>

          <div className="mt-5">
            <SeparadorFloral />
          </div>

          <p
            className="
              mx-auto
              mt-5
              max-w-lg
              font-serif
              text-sm
              italic
              leading-7
              sm:text-base
            "
            style={{ color: colores.textoSuave }}
          >
            Nos encantará compartir contigo este día lleno de alegría,
            juegos y momentos inolvidables.
          </p>
        </motion.div>

        {/* TARJETA PRINCIPAL */}

        <motion.div
          variants={fadeUp}
          className="
            relative
            mx-auto
            max-w-3xl
            overflow-hidden
            border-2
            px-5
            py-12
            text-center
            sm:px-10
            sm:py-14
            lg:px-14
          "
          style={{
            backgroundColor: "rgba(255,255,255,0.88)",
            borderColor: colores.rosaClaro,
            borderRadius: "46px 46px 28px 28px",
            boxShadow: "0 24px 65px rgba(201,83,125,0.14)",
          }}
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-2
              border
              border-dashed
            "
            style={{
              borderColor: "rgba(245,196,77,0.75)",
              borderRadius: "39px 39px 22px 22px",
            }}
          />

          <span
            aria-hidden="true"
            className="absolute left-4 top-3 text-3xl sm:left-7 sm:top-5"
          >
            🌼
          </span>

          <span
            aria-hidden="true"
            className="absolute bottom-3 right-4 text-3xl sm:bottom-5 sm:right-7"
          >
            🌸
          </span>

          {/* PRIMER AÑITO */}

          <motion.div
            variants={fadeUp}
            className="relative mx-auto mb-8 flex w-fit flex-col items-center"
          >
            <span
              aria-hidden="true"
              className="absolute -left-9 top-10 text-3xl sm:-left-12 sm:text-4xl"
            >
              🌸
            </span>

            <span
              aria-hidden="true"
              className="absolute -right-9 top-2 text-3xl sm:-right-12 sm:text-4xl"
            >
              🌼
            </span>

            <span
              className="
                font-serif text-[105px] font-bold
                leading-[0.8] sm:text-[135px]
              "
              style={{
                color: colores.rosa,
                WebkitTextStroke: "2px #FFFFFF",
                textShadow: "4px 5px 0 #F5C44D",
              }}
            >
              1
            </span>

            <p
              className="
                mt-3 font-cursiveDancing
                text-4xl sm:text-5xl
              "
              style={{ color: colores.rosaFuerte }}
            >
              Añito
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="
              relative
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border-4
              sm:h-24
              sm:w-24
            "
            style={{
              color: colores.rosaFuerte,
              backgroundColor: colores.rosaMuyClaro,
              borderColor: colores.amarilloClaro,
            }}
          >
            <LocationIcon />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="
              mt-7
              text-[9px]
              font-bold
              uppercase
              tracking-[0.35em]
              sm:text-[10px]
            "
            style={{ color: colores.naranja }}
          >
            Lugar
          </motion.p>

          <motion.h3
            variants={fadeUp}
            className="
              mx-auto
              mt-3
              max-w-xl
              font-serif
              text-[30px]
              font-semibold
              leading-tight
              sm:text-[42px]
            "
            style={{ color: colores.texto }}
          >
            Salón de eventos Are’s
          </motion.h3>

          <div className="my-7">
            <SeparadorFloral />
          </div>

          <motion.div
            variants={fadeUp}
            className="
              relative
              grid
              gap-4
              sm:grid-cols-2
              sm:gap-5
            "
          >
            <div
              className="
                flex min-h-[130px] flex-col items-center
                justify-center rounded-[30px] border-2
                border-dashed px-4 py-5
              "
              style={{
                color: colores.rosaFuerte,
                borderColor: colores.rosaClaro,
                backgroundColor: colores.rosaMuyClaro,
              }}
            >
              <CalendarIcon />

              <p
                className="
                  mt-3 text-[9px] font-bold uppercase
                  tracking-[0.28em]
                "
                style={{ color: colores.naranja }}
              >
                Fecha
              </p>

              <p
                className="mt-2 font-serif text-lg font-semibold sm:text-xl"
                style={{ color: colores.texto }}
              >
                Sábado 10 de octubre
              </p>
            </div>

            <div
              className="
                flex min-h-[130px] flex-col items-center
                justify-center rounded-[30px] border-2
                border-dashed px-4 py-5
              "
              style={{
                color: colores.rosaFuerte,
                borderColor: colores.rosaClaro,
                backgroundColor: colores.rosaMuyClaro,
              }}
            >
              <ClockIcon />

              <p
                className="
                  mt-3 text-[9px] font-bold uppercase
                  tracking-[0.28em]
                "
                style={{ color: colores.naranja }}
              >
                Hora
              </p>

              <p
                className="mt-2 font-serif text-2xl font-semibold"
                style={{ color: colores.texto }}
              >
                3:00 p. m.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="
              relative mx-auto mt-6 flex w-full max-w-lg
              items-center justify-center gap-3
              rounded-[26px] border-2 border-dashed
              px-5 py-4
            "
            style={{
              color: colores.rosaFuerte,
              backgroundColor: colores.amarilloClaro,
              borderColor: colores.amarillo,
            }}
          >
            <span aria-hidden="true" className="text-2xl">
              🌼
            </span>

            <span
              className="
                font-cursiveDancing text-2xl
                font-semibold sm:text-3xl
              "
            >
              ¡Trae tu traje de baño!
            </span>

            <span aria-hidden="true" className="text-2xl">
              💦
            </span>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="https://maps.app.goo.gl/WDbdTLn1AKjzeYMd9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir la ubicación del Salón de eventos Are’s en Google Maps"
            className="
              relative mt-7 inline-flex min-h-[54px]
              items-center justify-center gap-3 rounded-full
              border-2 px-8 py-4 text-white
              sm:min-w-[270px]
            "
            style={{
              backgroundColor: colores.rosaFuerte,
              borderColor: colores.rosaFuerte,
              boxShadow: "0 12px 28px rgba(217,79,130,0.22)",
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.985 }}
          >
            <LocationIcon />

            <span
              className="
                text-[10px] font-bold uppercase
                tracking-[0.25em]
              "
            >
              Ver ubicación
            </span>
          </motion.a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            font-cursiveDancing
            text-3xl
            leading-relaxed
            sm:mt-12
            sm:text-4xl
          "
          style={{ color: colores.rosaFuerte }}
        >
          ¡Te esperamos para celebrar juntos!
        </motion.p>
      </div>
    </motion.section>
  );
}
