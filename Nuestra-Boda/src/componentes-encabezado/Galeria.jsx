import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const colores = {
  rosa: "#F277A2",
  rosaFuerte: "#D94F82",
  rosaClaro: "#FFDCE8",
  rosaFondo: "#FFF1F6",
  crema: "#FFF9ED",
  amarillo: "#F5C44D",
  amarilloClaro: "#FFF0B5",
  verde: "#7FA35D",
  texto: "#67444D",
  textoSuave: "#906F78",
  blanco: "#FFFFFF",
};

const images = [
  "/carrusel01.jpeg",
  "/carusel02.jpeg",
  "/carusel03.jpeg",
  "/carusel04.jpeg",
  "/carusel05.jpeg",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function FlorRosaSuperior({ className = "", delay = 0 }) {
  return (
    <motion.svg
      viewBox="0 0 150 150"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      animate={{ y: [0, -7, 0], rotate: [-3, 3, -3] }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ellipse cx="75" cy="39" rx="23" ry="39" fill="#F5A2BC" />
      <ellipse
        cx="75"
        cy="39"
        rx="23"
        ry="39"
        fill="#F8B5C9"
        transform="rotate(60 75 75)"
      />
      <ellipse
        cx="75"
        cy="39"
        rx="23"
        ry="39"
        fill="#F28EAD"
        transform="rotate(120 75 75)"
      />
      <ellipse
        cx="75"
        cy="39"
        rx="23"
        ry="39"
        fill="#F7ADC4"
        transform="rotate(180 75 75)"
      />
      <ellipse
        cx="75"
        cy="39"
        rx="23"
        ry="39"
        fill="#F08AAA"
        transform="rotate(240 75 75)"
      />
      <ellipse
        cx="75"
        cy="39"
        rx="23"
        ry="39"
        fill="#F9B8CB"
        transform="rotate(300 75 75)"
      />
      <circle cx="75" cy="75" r="24" fill="#F5C44D" />
      <circle cx="67" cy="67" r="6" fill="#FFE58A" />
    </motion.svg>
  );
}

function FlorRosaConTallo({ className = "", mirror = false }) {
  return (
    <motion.svg
      viewBox="0 0 190 300"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{ transform: mirror ? "scaleX(-1)" : undefined }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <path
        d="M95 290C92 236 97 186 100 126"
        stroke="#719653"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M94 235C65 220 48 197 45 169C72 177 90 198 94 235Z"
        fill="#8EAA68"
      />
      <path
        d="M97 204C122 189 139 166 143 141C118 148 101 168 97 204Z"
        fill="#769B58"
      />
      <path
        d="M93 261C72 252 58 238 53 220C73 223 88 240 93 261Z"
        fill="#A3BB7D"
      />

      <ellipse cx="100" cy="67" rx="25" ry="52" fill="#F7AEC4" />
      <ellipse
        cx="100"
        cy="67"
        rx="25"
        ry="52"
        fill="#F49BB8"
        transform="rotate(45 100 67)"
      />
      <ellipse
        cx="100"
        cy="67"
        rx="25"
        ry="52"
        fill="#F8B5C9"
        transform="rotate(90 100 67)"
      />
      <ellipse
        cx="100"
        cy="67"
        rx="25"
        ry="52"
        fill="#F28EAD"
        transform="rotate(135 100 67)"
      />
      <circle cx="100" cy="67" r="31" fill="#F5C44D" />
      <circle cx="90" cy="57" r="8" fill="#FFE58A" />
      <circle cx="111" cy="74" r="5" fill="#E7A92D" opacity="0.65" />
    </motion.svg>
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

function PreviousIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function Galeria() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const totalImages = images.length;

  useEffect(() => {
    images.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;

    const intervalId = window.setInterval(() => {
      setDirection(1);
      setIndex((previousIndex) => (previousIndex + 1) % totalImages);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [isPaused, totalImages]);

  const nextImage = () => {
    setDirection(1);
    setIndex((previousIndex) => (previousIndex + 1) % totalImages);
  };

  const previousImage = () => {
    setDirection(-1);
    setIndex((previousIndex) =>
      previousIndex === 0 ? totalImages - 1 : previousIndex - 1
    );
  };

  const goToImage = (imageIndex) => {
    setDirection(imageIndex > index ? 1 : -1);
    setIndex(imageIndex);
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      className="
        relative w-full overflow-hidden px-5 py-24
        sm:px-8 sm:py-28 lg:px-12 lg:py-32
      "
      style={{ backgroundColor: colores.rosaFondo }}
    >
      {/* DOS FLORES ROSAS SUPERIORES */}

      <FlorRosaSuperior
        className="
          -left-6 -top-5 h-32 w-32
          sm:-left-4 sm:-top-4 sm:h-44 sm:w-44
          lg:left-3 lg:h-48 lg:w-48
        "
      />

      <FlorRosaSuperior
        delay={0.8}
        className="
          -right-6 -top-5 h-32 w-32
          sm:-right-4 sm:-top-4 sm:h-44 sm:w-44
          lg:right-3 lg:h-48 lg:w-48
        "
      />

      {/* MARCOS ONDULADOS */}

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

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          className="
            mx-auto mb-10 flex max-w-3xl flex-col
            items-center text-center sm:mb-14 lg:mb-16
          "
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >


          <h2
            className="
              mt-4 font-cursiveDancing text-[54px]
              font-normal leading-none sm:text-[74px]
            "
            style={{ color: colores.rosaFuerte }}
          >
            Galería de Aurora
          </h2>

          <div className="mt-5">
            <SeparadorFloral />
          </div>

          <p
            className="
              mx-auto mt-5 max-w-xl font-serif
              text-sm italic leading-7 sm:text-base
            "
            style={{ color: colores.textoSuave }}
          >
            Un pedacito de este primer año lleno de sonrisas,
            descubrimientos y mucho amor.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-5xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 1, delay: 0.12 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className="
              relative border-2 bg-white p-3
              sm:p-5 lg:p-7
            "
            style={{
              borderColor: colores.rosaClaro,
              borderRadius: "48px 48px 28px 28px",
              boxShadow: "0 24px 65px rgba(201,83,125,0.15)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-[7px] border border-dashed"
              style={{
                borderColor: "rgba(245,196,77,0.72)",
                borderRadius: "40px 40px 22px 22px",
              }}
            />

            <div
              className="
                relative h-[390px] overflow-hidden
                bg-[#FFDCE8] sm:h-[540px]
                md:h-[620px] lg:h-[680px]
              "
              style={{ borderRadius: "36px 36px 18px 18px" }}
            >
              <AnimatePresence custom={direction} mode="wait">
                <motion.img
                  key={images[index]}
                  custom={direction}
                  src={images[index]}
                  alt={`Fotografía ${index + 1} de Aurora`}
                  className="
                    absolute inset-0 h-full w-full
                    object-cover object-center
                  "
                  initial={{
                    opacity: 0,
                    scale: 1.025,
                    x: direction > 0 ? 18 : -18,
                  }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 1.012,
                    x: direction > 0 ? -16 : 16,
                  }}
                  transition={{
                    opacity: { duration: 0.65 },
                    scale: {
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    x: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                />
              </AnimatePresence>

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 62%, rgba(91,47,61,0.24) 100%)",
                }}
              />

              <div
                className="
                  absolute bottom-4 left-1/2 z-20
                  -translate-x-1/2 rounded-full
                  border bg-white/90 px-5 py-2 backdrop-blur-sm
                  sm:bottom-6
                "
                style={{
                  borderColor: colores.rosaClaro,
                  color: colores.rosaFuerte,
                }}
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.24em]">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(totalImages).padStart(2, "0")}
                </p>
              </div>
            </div>

            <div className="relative flex flex-col items-center px-4 pb-4 pt-7">
              <div className="flex items-center justify-center gap-5">
                <motion.button
                  type="button"
                  onClick={previousImage}
                  aria-label="Mostrar fotografía anterior"
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-full border-2 bg-white
                  "
                  style={{
                    borderColor: colores.rosaClaro,
                    color: colores.rosaFuerte,
                    boxShadow: "0 8px 20px rgba(201,83,125,0.12)",
                  }}
                  whileHover={{ y: -2, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <PreviousIcon />
                </motion.button>

                <div className="flex items-center justify-center gap-2">
                  {images.map((_, imageIndex) => {
                    const isActive = index === imageIndex;

                    return (
                      <motion.button
                        key={`indicator-${imageIndex}`}
                        type="button"
                        onClick={() => goToImage(imageIndex)}
                        aria-label={`Mostrar fotografía ${imageIndex + 1}`}
                        aria-current={isActive ? "true" : undefined}
                        className="h-2 rounded-full border"
                        animate={{ width: isActive ? 30 : 8 }}
                        transition={{ duration: 0.35 }}
                        style={{
                          backgroundColor: isActive
                            ? colores.rosa
                            : colores.blanco,
                          borderColor: isActive
                            ? colores.rosa
                            : colores.rosaClaro,
                        }}
                      />
                    );
                  })}
                </div>

                <motion.button
                  type="button"
                  onClick={nextImage}
                  aria-label="Mostrar siguiente fotografía"
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-full border-2 bg-white
                  "
                  style={{
                    borderColor: colores.rosaClaro,
                    color: colores.rosaFuerte,
                    boxShadow: "0 8px 20px rgba(201,83,125,0.12)",
                  }}
                  whileHover={{ y: -2, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <NextIcon />
                </motion.button>
              </div>


            </div>
          </div>
        </motion.div>

        <motion.p
          className="
            mx-auto mt-10 max-w-xl text-center
            font-cursiveDancing text-3xl
            leading-relaxed sm:mt-14 sm:text-3xl px-5
          "
          style={{ color: colores.rosaFuerte }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Un año de recuerdos para guardar por siempre
        </motion.p>
      </div>

      {/* DOS FLORES INFERIORES CON TALLO */}

      <FlorRosaConTallo
        className="
          -bottom-12 -left-12 z-[5]
          h-[245px] w-[160px]
          sm:-bottom-14 sm:-left-7 sm:h-[325px] sm:w-[210px]
          lg:left-0 lg:h-[360px] lg:w-[235px]
        "
      />

      <FlorRosaConTallo
        mirror
        className="
          -bottom-12 -right-12 z-[5]
          h-[245px] w-[160px]
          sm:-bottom-14 sm:-right-7 sm:h-[325px] sm:w-[210px]
          lg:right-0 lg:h-[360px] lg:w-[235px]
        "
      />
    </motion.section>
  );
}
