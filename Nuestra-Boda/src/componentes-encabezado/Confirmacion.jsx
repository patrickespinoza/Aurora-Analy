import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

/* =========================================
   CONFIGURACIÓN
========================================= */

const API_URL =
  "https://script.google.com/macros/s/AKfycbxklU9PTlqxkcu9pBUfWYhByQZ_7kJWuFENeeQhlEW-C6eh2cVbTK3z2AbMJiWVL1ME/exec";

/*
  Coloca los números con código de país, sin:
  +, espacios, guiones ni paréntesis.

  Ejemplo México:
  5215512345678
*/

const NUMERO_NOVIA = "521XXXXXXXXXX";
const NUMERO_NOVIO = "521XXXXXXXXXX";

const NOMBRE_NOVIA = "Allison";
const NOMBRE_NOVIO = "David";

const palette = {
  ink: "#1D2733",
  inkSoft: "#39434D",
  paper: "#F5F1E8",
  paperLight: "#FBF9F4",
  paperDark: "#E5DED2",
  antiqueGold: "#A48654",
  antiqueGoldDark: "#725B37",
  warmGray: "#777168",
  error: "#8B3A3A",
  success: "#49644D",
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
   DECODIFICACIÓN DEL GENERADOR
========================================= */

/*
  Este decodificador es compatible con un generador que haga:

  1. JSON.stringify({ nombre, pases })
  2. invertir el texto
  3. convertir a Base64 con btoa()
  4. colocar el resultado en ?id=...

  También admite Base64 URL-safe:
  - en lugar de +
  _ en lugar de /
*/

function normalizeBase64(value) {
  const normalized = value
    .trim()
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const remainder = normalized.length % 4;

  if (remainder === 0) {
    return normalized;
  }

  return normalized + "=".repeat(4 - remainder);
}

function decodeBase64Utf8(value) {
  const binary = window.atob(normalizeBase64(value));

  try {
    const bytes = Uint8Array.from(binary, (character) =>
      character.charCodeAt(0)
    );

    return new TextDecoder("utf-8", {
      fatal: false,
    }).decode(bytes);
  } catch {
    return binary;
  }
}

function parseInvitationData(encodedId) {
  if (!encodedId) return null;

  const decodedValue = decodeURIComponent(encodedId);

  /*
    Intentamos varios formatos para que sea más resistente:

    1. Base64 → texto invertido → JSON.
    2. Base64 → JSON directo.
  */

  const decodedText = decodeBase64Utf8(decodedValue);

  const possibleValues = [
    decodedText.split("").reverse().join(""),
    decodedText,
  ];

  for (const possibleValue of possibleValues) {
    try {
      const parsedData = JSON.parse(possibleValue);

      if (parsedData && typeof parsedData === "object") {
        return parsedData;
      }
    } catch {
      // Continúa con el siguiente formato.
    }
  }

  throw new Error("El enlace de invitación no tiene un formato válido.");
}

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

function EnvelopeIcon() {
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
      <rect x="3" y="5" width="18" height="14" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

function WhatsAppIcon() {
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
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.2 7.8c.3-.4.6-.4.9-.1l1.1 1.5c.2.3.2.6 0 .9l-.6.8c-.2.3 0 .7.3 1.1.7 1 1.5 1.8 2.6 2.4.4.2.8.3 1.1 0l.8-.8c.3-.3.6-.3.9-.1l1.5 1c.4.2.4.6.2.9-.5 1-1.4 1.6-2.5 1.6-1.6 0-3.8-1.2-5.6-3-1.7-1.7-2.9-3.9-2.9-5.4 0-.9.4-1.9 1.2-2.8Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function LockIcon() {
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
      <rect x="5" y="10" width="14" height="10" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

/* =========================================
   CAMPO DE ASISTENCIA
========================================= */

function AttendanceOption({
  value,
  selectedValue,
  onChange,
  title,
  description,
}) {
  const isSelected = selectedValue === value;

  return (
    <label
      className="
        relative
        flex
        cursor-pointer
        items-start
        gap-4
        border
        px-5
        py-4
        text-left
        transition
      "
      style={{
        backgroundColor: isSelected
          ? "rgba(29,39,51,0.055)"
          : palette.paperLight,
        borderColor: isSelected
          ? palette.antiqueGold
          : "rgba(164,134,84,0.3)",
      }}
    >
      <input
        type="radio"
        name="asistencia"
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        className="sr-only"
      />

      <span
        className="
          mt-0.5
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          rounded-full
          border
        "
        style={{
          borderColor: isSelected
            ? palette.antiqueGoldDark
            : "rgba(119,113,104,0.6)",
        }}
      >
        {isSelected && (
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: palette.antiqueGoldDark,
            }}
          />
        )}
      </span>

      <span>
        <span
          className="
            block
            font-serif
            text-[15px]
            sm:text-base
          "
          style={{
            color: palette.ink,
          }}
        >
          {title}
        </span>

        <span
          className="
            mt-1
            block
            text-[12px]
            leading-5
            sm:text-[13px]
          "
          style={{
            color: palette.warmGray,
          }}
        >
          {description}
        </span>
      </span>
    </label>
  );
}

/* =========================================
   COMPONENTE
========================================= */

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [pasesAsignados, setPasesAsignados] = useState(1);
  const [datosDesdeGenerador, setDatosDesdeGenerador] = useState(false);

  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);

  const [error, setError] = useState("");
  const [loadingSide, setLoadingSide] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [urlError, setUrlError] = useState("");

  /* =========================================
     LEER Y DECODIFICAR URL
  ========================================= */

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const encodedId = params.get("id");
    const visibleName = params.get("nombre");
    const visiblePasses = params.get("pases");

    try {
      let invitationData = null;

      if (encodedId) {
        invitationData = parseInvitationData(encodedId);
      } else if (visibleName || visiblePasses) {
        /*
          Respaldo temporal para enlaces anteriores:

          ?nombre=Familia%20López&pases=4
        */

        invitationData = {
          nombre: visibleName,
          pases: visiblePasses,
        };
      }

      if (!invitationData) {
        setDatosDesdeGenerador(false);
        return;
      }

      const decodedName =
        typeof invitationData.nombre === "string"
          ? invitationData.nombre.trim()
          : "";

      /*
        Aceptamos varias propiedades por compatibilidad:
        pases, invitados, cantidad o lugares.
      */

      const decodedPasses = Number.parseInt(
        invitationData.pases ??
          invitationData.invitados ??
          invitationData.cantidad ??
          invitationData.lugares ??
          1,
        10
      );

      if (decodedName) {
        setNombreInvitado(decodedName);
      }

      if (!Number.isNaN(decodedPasses) && decodedPasses > 0) {
        setPasesAsignados(decodedPasses);
        setInvitados(decodedPasses);
      }

      setDatosDesdeGenerador(Boolean(decodedName));
      setUrlError("");
    } catch (decodeError) {
      console.error("No se pudieron leer los datos del enlace:", decodeError);

      setUrlError(
        "No pudimos reconocer los datos personalizados de esta invitación."
      );

      setDatosDesdeGenerador(false);
    }
  }, []);

  /* =========================================
     AJUSTAR ASISTENTES SEGÚN ASISTENCIA
  ========================================= */

  useEffect(() => {
    if (asistencia === "No podré asistir") {
      setInvitados(0);
      return;
    }

    if (asistencia === "Sí asistiré" && invitados < 1) {
      setInvitados(1);
    }
  }, [asistencia, invitados]);

  const availablePasses = useMemo(() => {
    return Array.from(
      {
        length: pasesAsignados,
      },
      (_, index) => index + 1
    );
  }, [pasesAsignados]);

  /* =========================================
     MENSAJE DE WHATSAPP
  ========================================= */

  const createWhatsAppMessage = (recipientName) => {
    const attendanceText =
      asistencia === "Sí asistiré"
        ? `Sí asistiré con ${invitados} ${
            invitados === 1 ? "persona" : "personas"
          }.`
        : "Lamentablemente no podré asistir.";

    const optionalMessage = mensajeInvitado.trim()
      ? `\n\nMensaje: ${mensajeInvitado.trim()}`
      : "";

    return [
      `Hola ${recipientName}.`,
      "",
      `Soy ${nombreInvitado.trim()}.`,
      attendanceText,
      optionalMessage,
      "",
      "Gracias por la invitación.",
    ]
      .join("\n")
      .replace(/\n{3,}/g, "\n\n");
  };

  const openWhatsApp = (phoneNumber, recipientName) => {
    const message = createWhatsAppMessage(recipientName);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappUrl;
  };

  /* =========================================
     ENVIAR CONFIRMACIÓN
  ========================================= */

  const enviarConfirmacion = async ({
    side,
    phoneNumber,
    recipientName,
  }) => {
    if (loadingSide) return;

    if (!nombreInvitado.trim()) {
      setError("Escribe el nombre del invitado.");
      return;
    }

    if (!asistencia) {
      setError("Selecciona si podrás acompañarnos.");
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (invitados < 1 || invitados > pasesAsignados)
    ) {
      setError(
        `Puedes confirmar entre 1 y ${pasesAsignados} ${
          pasesAsignados === 1 ? "lugar" : "lugares"
        }.`
      );
      return;
    }

    setError("");
    setEnviado(false);
    setLoadingSide(side);

    const confirmationData = {
      nombre: nombreInvitado.trim(),
      asistencia,
      invitados: asistencia === "Sí asistiré" ? invitados : 0,
      mensaje: mensajeInvitado.trim(),
      lado: side,
      pasesAsignados,
    };

    try {
      /*
        No agregamos Content-Type: application/json porque la petición
        utiliza mode: "no-cors".

        Apps Script puede leer el contenido mediante:
        e.postData.contents
      */

      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(confirmationData),
      });

      setEnviado(true);

      /*
        Conservamos nombre y pases porque vienen del generador.
        Solo limpiamos la respuesta y el mensaje.
      */

      window.setTimeout(() => {
        openWhatsApp(phoneNumber, recipientName);
      }, 650);
    } catch (requestError) {
      console.error("Error enviando la confirmación:", requestError);

      setError(
        "No pudimos enviar tu confirmación. Intenta nuevamente en unos momentos."
      );

      setLoadingSide("");
    }
  };

  /* =========================================
     RENDER
  ========================================= */

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
        min-h-[820px]
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

      {/* RAMAS */}

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
            <EnvelopeIcon />
          </div>

          <p
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
          >
            Nos encantará contar contigo
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
            Confirmación de asistencia
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
            Por favor, confirma tu asistencia y ayúdanos a preparar cada
            detalle de nuestra celebración.
          </p>
        </motion.div>

        {/* FORMULARIO */}

        <motion.div
          className="
            relative
            mx-auto
            w-full
            max-w-3xl
            border
            px-6
            py-12
            sm:px-10
            sm:py-14
            md:px-14
          "
          style={{
            backgroundColor: "rgba(251,249,244,0.84)",
            borderColor: "rgba(164,134,84,0.34)",
            boxShadow: "0 24px 65px rgba(29,39,51,0.08)",
          }}
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
            amount: 0.12,
          }}
          transition={{
            duration: 0.95,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
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

          <div className="relative z-10">
            {/* NOMBRE */}

            <div>
              <div className="flex items-center justify-between gap-4">
                <label
                  htmlFor="confirmation-name"
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
                  Nombre del invitado
                </label>

                {datosDesdeGenerador && (
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-[7px]
                      uppercase
                      tracking-[0.22em]
                      sm:text-[8px]
                    "
                    style={{
                      color: palette.warmGray,
                    }}
                  >
                    <LockIcon />
                    Invitación personalizada
                  </span>
                )}
              </div>

              <input
                id="confirmation-name"
                type="text"
                value={nombreInvitado}
                onChange={(event) => {
                  if (!datosDesdeGenerador) {
                    setNombreInvitado(event.target.value);
                  }
                }}
                readOnly={datosDesdeGenerador}
                placeholder="Nombre y apellido"
                autoComplete="name"
                className="
                  mt-4
                  w-full
                  border
                  bg-[#FBF9F4]
                  px-5
                  py-4
                  font-serif
                  text-base
                  outline-none
                  sm:text-lg
                "
                style={{
                  color: palette.ink,
                  borderColor: "rgba(164,134,84,0.34)",
                  cursor: datosDesdeGenerador ? "not-allowed" : "text",
                }}
              />

              <AnimatePresence>
                {urlError && (
                  <motion.p
                    className="
                      mt-3
                      text-[12px]
                      leading-5
                    "
                    style={{
                      color: palette.error,
                    }}
                    initial={{
                      opacity: 0,
                      y: 4,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                  >
                    {urlError}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ASISTENCIA */}

            <div
              className="
                mt-9
                border-t
                pt-9
              "
              style={{
                borderColor: "rgba(164,134,84,0.26)",
              }}
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
                ¿Podrás acompañarnos?
              </p>

              <div
                className="
                  mt-5
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                <AttendanceOption
                  value="Sí asistiré"
                  selectedValue={asistencia}
                  onChange={setAsistencia}
                  title="Sí asistiré"
                  description="Será un gusto celebrar juntos."
                />

                <AttendanceOption
                  value="No podré asistir"
                  selectedValue={asistencia}
                  onChange={setAsistencia}
                  title="No podré asistir"
                  description="Agradecemos que nos lo hagas saber."
                />
              </div>
            </div>

            {/* PASES */}

            <AnimatePresence>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  className="
                    mt-9
                    border-t
                    pt-9
                  "
                  style={{
                    borderColor: "rgba(164,134,84,0.26)",
                  }}
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
                  <div className="flex items-center justify-between gap-4">
                    <label
                      htmlFor="confirmation-passes"
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
                      Personas que asistirán
                    </label>

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                      "
                      style={{
                        color: palette.warmGray,
                      }}
                    >
                      Máximo {pasesAsignados}
                    </span>
                  </div>

                  <select
                    id="confirmation-passes"
                    value={invitados}
                    onChange={(event) =>
                      setInvitados(Number(event.target.value))
                    }
                    className="
                      mt-4
                      w-full
                      appearance-none
                      border
                      bg-[#FBF9F4]
                      px-5
                      py-4
                      text-center
                      font-serif
                      text-base
                      outline-none
                      sm:text-lg
                    "
                    style={{
                      color: palette.ink,
                      borderColor: "rgba(164,134,84,0.34)",
                    }}
                  >
                    {availablePasses.map((passNumber) => (
                      <option key={passNumber} value={passNumber}>
                        {passNumber}{" "}
                        {passNumber === 1 ? "persona" : "personas"}
                      </option>
                    ))}
                  </select>

                  <p
                    className="
                      mt-3
                      text-center
                      font-serif
                      text-[12px]
                      italic
                      sm:text-[13px]
                    "
                    style={{
                      color: palette.warmGray,
                    }}
                  >
                    Esta invitación tiene{" "}
                    {pasesAsignados === 1
                      ? "1 lugar reservado"
                      : `${pasesAsignados} lugares reservados`}.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* MENSAJE */}

            <div
              className="
                mt-9
                border-t
                pt-9
              "
              style={{
                borderColor: "rgba(164,134,84,0.26)",
              }}
            >
              <label
                htmlFor="confirmation-message"
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
                Mensaje para los novios
              </label>

              <textarea
                id="confirmation-message"
                value={mensajeInvitado}
                onChange={(event) =>
                  setMensajeInvitado(event.target.value)
                }
                placeholder="Escribe un mensaje especial (opcional)"
                rows={4}
                maxLength={500}
                className="
                  mt-4
                  w-full
                  resize-none
                  border
                  bg-[#FBF9F4]
                  px-5
                  py-4
                  font-serif
                  text-[14px]
                  leading-7
                  outline-none
                  sm:text-[15px]
                "
                style={{
                  color: palette.ink,
                  borderColor: "rgba(164,134,84,0.34)",
                }}
              />

              <p
                className="
                  mt-2
                  text-right
                  text-[10px]
                "
                style={{
                  color: palette.warmGray,
                }}
              >
                {mensajeInvitado.length}/500
              </p>
            </div>

            {/* MENSAJES */}

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  key="confirmation-error"
                  className="
                    mt-7
                    border
                    px-4
                    py-3
                    text-center
                    font-serif
                    text-[13px]
                    sm:text-[14px]
                  "
                  style={{
                    color: palette.error,
                    borderColor: "rgba(139,58,58,0.3)",
                    backgroundColor: "rgba(139,58,58,0.045)",
                  }}
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  {error}
                </motion.div>
              )}

              {enviado && !error && (
                <motion.div
                  key="confirmation-success"
                  className="
                    mt-7
                    flex
                    items-center
                    justify-center
                    gap-3
                    border
                    px-4
                    py-3
                    text-center
                    font-serif
                    text-[13px]
                    sm:text-[14px]
                  "
                  style={{
                    color: palette.success,
                    borderColor: "rgba(73,100,77,0.3)",
                    backgroundColor: "rgba(73,100,77,0.05)",
                  }}
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  <CheckIcon />
                  Confirmación registrada. Abriendo WhatsApp…
                </motion.div>
              )}
            </AnimatePresence>

            {/* BOTONES */}

            <div
              className="
                mt-9
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              <motion.button
                type="button"
                onClick={() =>
                  enviarConfirmacion({
                    side: "Novia",
                    phoneNumber: NUMERO_NOVIA,
                    recipientName: NOMBRE_NOVIA,
                  })
                }
                disabled={Boolean(loadingSide)}
                className="
                  inline-flex
                  min-h-[58px]
                  items-center
                  justify-center
                  gap-3
                  border
                  px-5
                  py-4
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
                style={{
                  backgroundColor: palette.ink,
                  borderColor: palette.ink,
                  color: palette.paperLight,
                }}
                whileHover={
                  loadingSide
                    ? undefined
                    : {
                        y: -2,
                        backgroundColor: palette.inkSoft,
                      }
                }
                whileTap={
                  loadingSide
                    ? undefined
                    : {
                        scale: 0.985,
                      }
                }
              >
                {loadingSide === "Novia" ? (
                  <span
                    className="
                      h-4
                      w-4
                      animate-spin
                      rounded-full
                      border-2
                      border-white/35
                      border-t-white
                    "
                  />
                ) : (
                  <WhatsAppIcon />
                )}

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.24em]
                    sm:text-[9px]
                  "
                >
                  {loadingSide === "Novia"
                    ? "Enviando"
                    : `Confirmar con ${NOMBRE_NOVIA}`}
                </span>
              </motion.button>

              <motion.button
                type="button"
                onClick={() =>
                  enviarConfirmacion({
                    side: "Novio",
                    phoneNumber: NUMERO_NOVIO,
                    recipientName: NOMBRE_NOVIO,
                  })
                }
                disabled={Boolean(loadingSide)}
                className="
                  inline-flex
                  min-h-[58px]
                  items-center
                  justify-center
                  gap-3
                  border
                  px-5
                  py-4
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
                style={{
                  backgroundColor: palette.paperLight,
                  borderColor: palette.ink,
                  color: palette.ink,
                }}
                whileHover={
                  loadingSide
                    ? undefined
                    : {
                        y: -2,
                        backgroundColor: palette.paper,
                      }
                }
                whileTap={
                  loadingSide
                    ? undefined
                    : {
                        scale: 0.985,
                      }
                }
              >
                {loadingSide === "Novio" ? (
                  <span
                    className="
                      h-4
                      w-4
                      animate-spin
                      rounded-full
                      border-2
                      border-[#1D2733]/25
                      border-t-[#1D2733]
                    "
                  />
                ) : (
                  <WhatsAppIcon />
                )}

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.24em]
                    sm:text-[9px]
                  "
                >
                  {loadingSide === "Novio"
                    ? "Enviando"
                    : `Confirmar con ${NOMBRE_NOVIO}`}
                </span>
              </motion.button>
            </div>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-center
                font-serif
                text-[12px]
                italic
                leading-6
                sm:text-[13px]
              "
              style={{
                color: palette.warmGray,
              }}
            >
              Al confirmar, registraremos tu respuesta y te dirigiremos a
              WhatsApp para enviar el mensaje correspondiente.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Confirmacion;