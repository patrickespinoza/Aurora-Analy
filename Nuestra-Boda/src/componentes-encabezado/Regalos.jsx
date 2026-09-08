import { motion } from "framer-motion";

const colores = {
  rosa: "#F277A2",
  rosaFuerte: "#D94F82",
  rosaClaro: "#FFDCE8",
  rosaFondo: "#FFF1F6",
  crema: "#FFF9ED",
  amarillo: "#F5C44D",
  amarilloClaro: "#FFF0B5",
  naranja: "#E9873D",
  verde: "#86A765",
  texto: "#67444D",
  textoSuave: "#906F78",
  blanco: "#FFFFFF",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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

const flores = [
  { simbolo: "🌼", posicion: "left-[4%] top-[7%]", tamano: "text-3xl", delay: 0 },
  { simbolo: "🌸", posicion: "left-[19%] top-[13%]", tamano: "text-xl", delay: 0.4 },
  { simbolo: "🌻", posicion: "right-[7%] top-[8%]", tamano: "text-3xl", delay: 0.8 },
  { simbolo: "🌷", posicion: "right-[23%] top-[17%]", tamano: "text-2xl", delay: 1.2 },
  { simbolo: "🌺", posicion: "left-[7%] top-[38%]", tamano: "text-2xl", delay: 0.6 },
  { simbolo: "🌼", posicion: "right-[5%] top-[42%]", tamano: "text-2xl", delay: 1.4 },
  { simbolo: "🌸", posicion: "left-[14%] bottom-[28%]", tamano: "text-3xl", delay: 1 },
  { simbolo: "🌻", posicion: "right-[15%] bottom-[25%]", tamano: "text-2xl", delay: 0.2 },
  { simbolo: "🌷", posicion: "left-[4%] bottom-[9%]", tamano: "text-3xl", delay: 1.6 },
  { simbolo: "🌺", posicion: "right-[5%] bottom-[8%]", tamano: "text-3xl", delay: 0.9 },
  { simbolo: "🌼", posicion: "left-[32%] bottom-[5%]", tamano: "text-xl", delay: 1.3 },
  { simbolo: "🌸", posicion: "right-[34%] top-[5%]", tamano: "text-xl", delay: 0.5 },
  { simbolo: "🌻", posicion: "left-[3%] top-[65%]", tamano: "text-xl", delay: 0.7 },
  { simbolo: "🌷", posicion: "right-[3%] top-[67%]", tamano: "text-xl", delay: 1.1 },
];

function FloresPequenas() {
  return (
    <>
      {flores.map((flor, index) => (
        <motion.span
          key={`flor-${index}`}
          aria-hidden="true"
          className={`
            pointer-events-none absolute select-none
            ${flor.posicion} ${flor.tamano}
          `}
          animate={{
            y: [0, -7, 0],
            rotate: [-4, 5, -4],
          }}
          transition={{
            duration: 3.5 + (index % 3) * 0.4,
            delay: flor.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {flor.simbolo}
        </motion.span>
      ))}
    </>
  );
}

function SeparadorFloral() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#F5C44D] sm:w-16" />
      <span className="text-xl">🌼</span>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#F5C44D] sm:w-16" />
    </div>
  );
}

function GiftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-8 w-8"
    >
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M12 8v13M3 12h18" />
      <path d="M7.5 8C5.6 8 4 6.7 4 5.2 4 4 5 3 6.3 3 9.2 3 12 8 12 8" />
      <path d="M16.5 8C18.4 8 20 6.7 20 5.2 20 4 19 3 17.7 3 14.8 3 12 8 12 8" />
    </svg>
  );
}

function MoneyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-9 w-9"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M7 9H6v1M17 15h1v-1" />
    </svg>
  );
}

function ClothesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-9 w-9"
    >
      <path d="M9 4c.4 1.4 1.4 2 3 2s2.6-.6 3-2l5 3-2 4-2-1v10H8V10l-2 1-2-4 5-3Z" />
      <path d="M8 15h8" />
    </svg>
  );
}

function OpcionRegalo({ tipo, titulo, descripcion, etiqueta }) {
  const esMonetario = tipo === "monetario";

  return (
    <motion.article
      variants={fadeUp}
      className="
        relative flex min-h-[330px] flex-col items-center
        justify-center overflow-hidden border-2 bg-white
        px-6 py-10 text-center sm:min-h-[360px] sm:px-9
      "
      style={{
        borderColor: colores.rosaClaro,
        borderRadius: esMonetario
          ? "46px 46px 26px 46px"
          : "46px 46px 46px 26px",
        boxShadow: "0 20px 52px rgba(201,83,125,0.13)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-2 border border-dashed"
        style={{
          borderColor: "rgba(245,196,77,0.7)",
          borderRadius: esMonetario
            ? "38px 38px 20px 38px"
            : "38px 38px 38px 20px",
        }}
      />

      <span
        aria-hidden="true"
        className="absolute left-4 top-3 text-2xl"
      >
        {esMonetario ? "🌼" : "🌸"}
      </span>

      <div
        className="
          relative flex h-20 w-20 items-center
          justify-center rounded-full border-4
        "
        style={{
          color: colores.rosaFuerte,
          backgroundColor: colores.rosaFondo,
          borderColor: colores.amarilloClaro,
        }}
      >
        {esMonetario ? <MoneyIcon /> : <ClothesIcon />}
      </div>

      <p
        className="
          mt-6 text-[9px] font-bold uppercase
          tracking-[0.3em]
        "
        style={{ color: colores.naranja }}
      >
        Sugerencia
      </p>

      <h3
        className="
          mt-3 font-serif text-[28px]
          font-semibold leading-tight sm:text-[34px]
        "
        style={{ color: colores.texto }}
      >
        {titulo}
      </h3>

      <p
        className="
          mt-4 max-w-sm font-serif
          text-sm italic leading-7 sm:text-base
        "
        style={{ color: colores.textoSuave }}
      >
        {descripcion}
      </p>

      <span
        className="
          mt-6 inline-flex min-h-[42px] items-center
          justify-center rounded-full px-5 py-2
          text-xs font-bold sm:text-sm
        "
        style={{
          color: colores.texto,
          backgroundColor: esMonetario
            ? colores.amarilloClaro
            : colores.rosaClaro,
        }}
      >
        {etiqueta}
      </span>
    </motion.article>
  );
}

export default function Regalos() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="
        relative flex min-h-[760px] w-full items-center
        justify-center overflow-hidden px-5 py-24
        sm:px-8 sm:py-28 lg:px-12 lg:py-32
      "
      style={{ backgroundColor: colores.rosaFondo }}
    >
      <FloresPequenas />

      <div
        className="pointer-events-none absolute inset-4 border-2 sm:inset-7 lg:inset-9"
        style={{
          borderColor: "rgba(242,119,162,0.48)",
          borderRadius: "46% 54% 48% 52% / 5% 7% 6% 8%",
        }}
      />

      <div
        className="
          pointer-events-none absolute inset-[22px]
          border border-dashed sm:inset-[36px] lg:inset-[44px]
        "
        style={{
          borderColor: "rgba(245,196,77,0.72)",
          borderRadius: "54% 46% 53% 47% / 7% 5% 8% 6%",
        }}
      />

      <div
        className="
          relative z-10 mx-auto flex w-full max-w-5xl
          flex-col items-center text-center
        "
      >
        <motion.div
          variants={fadeUp}
          className="
            flex h-20 w-20 items-center justify-center
            rounded-full border-4
          "
          style={{
            color: colores.rosaFuerte,
            backgroundColor: colores.blanco,
            borderColor: colores.amarilloClaro,
            boxShadow: "0 12px 30px rgba(201,83,125,0.13)",
          }}
        >
          <GiftIcon />
        </motion.div>


        <motion.h2
          variants={fadeUp}
          className="
            mt-4 font-cursiveDancing text-[54px]
            font-normal leading-none sm:text-[74px]
          "
          style={{ color: colores.rosaFuerte }}
        >
          Mesa de regalos
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-5">
          <SeparadorFloral />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="
            mx-auto mt-5 max-w-2xl font-serif
            text-sm italic leading-7 sm:text-[17px] sm:leading-8
          "
          style={{ color: colores.textoSuave }}
        >
          Tu presencia es nuestro mejor regalo. Si deseas tener un detalle
          con Aurora, puedes considerar alguna de estas opciones.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="
            mt-10 grid w-full gap-5
            sm:mt-12 sm:grid-cols-2 sm:gap-7
          "
        >
          <OpcionRegalo
            tipo="monetario"
            titulo="Regalo monetario"
            descripcion="Durante la celebración tendremos un espacio especial para recibir tu sobre."
            etiqueta="Lluvia de sobres"
          />

          <OpcionRegalo
            tipo="ropa"
            titulo="Ropita para Aurora"
            descripcion="Puedes elegir una prenda cómoda, alegre y llena de color para esta nueva etapa."
            etiqueta="Talla 18 meses"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="
            mt-10 font-cursiveDancing
            text-3xl sm:mt-14 sm:text-4xl px-4
          "
          style={{ color: colores.rosaFuerte }}
        >
          Gracias por consentir a nuestra pequeña
        </motion.p>
      </div>
    </motion.section>
  );
}