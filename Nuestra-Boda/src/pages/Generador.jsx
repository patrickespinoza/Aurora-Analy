import { useState } from "react";

const palette = {
  ink: "#1D2733",
  inkSoft: "#35404B",
  paper: "#F5F1E8",
  paperLight: "#FBF9F4",
  paperDark: "#DED6C8",
  antiqueGold: "#A48654",
  antiqueGoldDark: "#755E39",
  warmGray: "#777168",
  line: "#C8BDAA",
};

export default function Generador() {
  const [nombre, setNombre] = useState("");
  const [pases, setPases] = useState("1");

  const [link, setLink] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [linkCopiado, setLinkCopiado] = useState(false);
  const [mensajeCopiado, setMensajeCopiado] = useState(false);

  /* =========================================
     GENERAR ID ENCRIPTADO
     Compatible con Portada.jsx
  ========================================= */

  const crearId = (nombreInvitado, numeroPases) => {
    const datos = {
      nombre: nombreInvitado,
      pases: numeroPases,
    };

    const textoOriginal = JSON.stringify(datos);

    const textoInvertido = textoOriginal
      .split("")
      .reverse()
      .join("");

    const base64 = btoa(textoInvertido);

    // Base64 seguro para URL
    return base64
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/g, "");
  };

  /* =========================================
     GENERAR LINK
  ========================================= */

  const generarLink = () => {
    const nombreLimpio = nombre.trim();
    const numeroPases = Number.parseInt(pases, 10);

    if (!nombreLimpio) {
      alert("Escribe el nombre del invitado o familia.");
      return;
    }

    if (
      Number.isNaN(numeroPases) ||
      numeroPases < 1
    ) {
      alert("Ingresa un número válido de lugares.");
      return;
    }

    const id = crearId(
      nombreLimpio,
      numeroPases
    );

    const url = `${window.location.origin}/?id=${encodeURIComponent(
      id
    )}`;

    setLink(url);

    const textoPases =
      numeroPases === 1
        ? "1 lugar"
        : `${numeroPases} lugares`;

    const mensajeWhatsApp = `✨ Invitación especial ✨

Hola ${nombreLimpio} 🤍

Con mucha alegría queremos compartir contigo nuestra invitación de boda.

Hemos reservado especialmente para ti:
🎟️ ${textoPases}

Puedes consultar todos los detalles de nuestra celebración en el siguiente enlace:

${url}

Será un gusto compartir este momento tan especial contigo.

Valeria & Alejandro 🤍`;

    setMensaje(mensajeWhatsApp);

    setLinkCopiado(false);
    setMensajeCopiado(false);
  };

  /* =========================================
     COPIAR LINK
  ========================================= */

  const copiarLink = async () => {
    if (!link) return;

    try {
      await navigator.clipboard.writeText(link);

      setLinkCopiado(true);

      setTimeout(() => {
        setLinkCopiado(false);
      }, 2000);
    } catch (error) {
      console.error(
        "No se pudo copiar el link:",
        error
      );
    }
  };

  /* =========================================
     COPIAR MENSAJE
  ========================================= */

  const copiarMensaje = async () => {
    if (!mensaje) return;

    try {
      await navigator.clipboard.writeText(
        mensaje
      );

      setMensajeCopiado(true);

      setTimeout(() => {
        setMensajeCopiado(false);
      }, 2000);
    } catch (error) {
      console.error(
        "No se pudo copiar el mensaje:",
        error
      );
    }
  };

  return (
    <main
      className="
        min-h-screen
        w-full
        px-4
        py-8
        sm:px-6
        sm:py-12
        lg:px-10
      "
      style={{
        backgroundColor: palette.paperLight,
        color: palette.ink,
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            rgba(53,64,75,0.015) 0px,
            rgba(53,64,75,0.015) 1px,
            transparent 1px,
            transparent 5px
          )
        `,
      }}
    >
      {/* =========================================
          ENCABEZADO
      ========================================= */}

      <div
        className="
          mx-auto
          mb-10
          max-w-6xl
          text-center
        "
      >
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.4em]
            sm:text-[10px]
          "
          style={{
            color: palette.antiqueGoldDark,
          }}
        >
          Valeria & Alejandro
        </p>

        <h1
          className="
            mt-4
            font-serif
            text-3xl
            font-normal
            sm:text-4xl
            lg:text-5xl
          "
        >
          Generador de invitaciones
        </h1>

        <div
          className="
            mx-auto
            mt-5
            h-px
            w-16
          "
          style={{
            backgroundColor:
              "rgba(164,134,84,0.65)",
          }}
        />

        <p
          className="
            mx-auto
            mt-5
            max-w-xl
            font-serif
            text-sm
            leading-6
            sm:text-base
          "
          style={{
            color: palette.warmGray,
          }}
        >
          Personaliza el nombre y los lugares
          reservados para cada invitado.
        </p>
      </div>

      {/* =========================================
          GRID PRINCIPAL
      ========================================= */}

      <div
        className="
          mx-auto
          grid
          max-w-6xl
          gap-8
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-12
        "
      >
        {/* =========================================
            FORMULARIO
        ========================================= */}

        <section
          className="
            order-2
            border
            bg-white/70
            p-5
            shadow-[0_18px_50px_rgba(29,39,51,0.08)]
            backdrop-blur-sm
            sm:p-8
            lg:order-1
          "
          style={{
            borderColor:
              "rgba(164,134,84,0.28)",
          }}
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.32em]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
            >
              Datos del invitado
            </p>

            <h2
              className="
                mt-3
                font-serif
                text-2xl
              "
            >
              Crear invitación
            </h2>
          </div>

          {/* NOMBRE */}

          <div className="mt-7">
            <label
              className="
                mb-2
                block
                text-[10px]
                uppercase
                tracking-[0.24em]
              "
              style={{
                color: palette.warmGray,
              }}
            >
              Nombre o familia
            </label>

            <input
              type="text"
              placeholder="Ej. Familia Hernández"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
                setLink("");
              }}
              className="
                w-full
                border
                bg-white
                px-4
                py-3.5
                font-serif
                text-base
                outline-none
                transition
                placeholder:text-gray-400
                focus:ring-1
              "
              style={{
                borderColor:
                  "rgba(164,134,84,0.4)",
              }}
            />
          </div>

          {/* PASES */}

          <div className="mt-5">
            <label
              className="
                mb-2
                block
                text-[10px]
                uppercase
                tracking-[0.24em]
              "
              style={{
                color: palette.warmGray,
              }}
            >
              Número de lugares
            </label>

            <input
              type="number"
              min="1"
              inputMode="numeric"
              value={pases}
              onChange={(e) => {
                setPases(e.target.value);
                setLink("");
              }}
              className="
                w-full
                border
                bg-white
                px-4
                py-3.5
                font-serif
                text-base
                outline-none
                transition
                focus:ring-1
              "
              style={{
                borderColor:
                  "rgba(164,134,84,0.4)",
              }}
            />
          </div>

          {/* GENERAR */}

          <button
            type="button"
            onClick={generarLink}
            className="
              mt-7
              w-full
              px-6
              py-4
              text-[10px]
              uppercase
              tracking-[0.26em]
              text-white
              transition
              hover:opacity-90
              active:scale-[0.99]
            "
            style={{
              backgroundColor: palette.ink,
            }}
          >
            Generar invitación
          </button>

          {/* LINK */}

          {link && (
            <div className="mt-7">
              <p
                className="
                  mb-2
                  text-[9px]
                  uppercase
                  tracking-[0.26em]
                "
                style={{
                  color: palette.warmGray,
                }}
              >
                Link personalizado
              </p>

              <div
                className="
                  break-all
                  border
                  bg-[#F5F1E8]
                  p-4
                  text-xs
                  leading-5
                "
                style={{
                  borderColor:
                    "rgba(164,134,84,0.3)",
                  color: palette.inkSoft,
                }}
              >
                {link}
              </div>

              <button
                type="button"
                onClick={copiarLink}
                className="
                  mt-3
                  w-full
                  border
                  px-5
                  py-3
                  text-[9px]
                  uppercase
                  tracking-[0.24em]
                  transition
                  hover:bg-black/5
                "
                style={{
                  borderColor:
                    "rgba(29,39,51,0.4)",
                }}
              >
                {linkCopiado
                  ? "Link copiado ✓"
                  : "Copiar link"}
              </button>
            </div>
          )}

          {/* =========================================
              MENSAJE WHATSAPP
          ========================================= */}

          {link && (
            <div
              className="
                mt-8
                border-t
                pt-7
              "
              style={{
                borderColor:
                  "rgba(164,134,84,0.28)",
              }}
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                "
                style={{
                  color: palette.antiqueGoldDark,
                }}
              >
                Mensaje para WhatsApp
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  leading-5
                "
                style={{
                  color: palette.warmGray,
                }}
              >
                Puedes editar el mensaje antes de
                copiarlo.
              </p>

              <textarea
                value={mensaje}
                onChange={(e) =>
                  setMensaje(e.target.value)
                }
                rows={14}
                className="
                  mt-4
                  w-full
                  resize-y
                  border
                  bg-white
                  p-4
                  text-sm
                  leading-6
                  outline-none
                  focus:ring-1
                "
                style={{
                  borderColor:
                    "rgba(164,134,84,0.35)",
                }}
              />

              <button
                type="button"
                onClick={copiarMensaje}
                className="
                  mt-3
                  w-full
                  px-6
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.24em]
                  text-white
                  transition
                  hover:opacity-90
                "
                style={{
                  backgroundColor:
                    palette.antiqueGoldDark,
                }}
              >
                {mensajeCopiado
                  ? "Mensaje copiado ✓"
                  : "Copiar mensaje para WhatsApp"}
              </button>
            </div>
          )}
        </section>

        {/* =========================================
            IMAGEN DE PORTADA
        ========================================= */}

        <section
          className="
            order-1
            flex
            flex-col
            items-center
            lg:order-2
          "
        >
          <div className="mb-5 text-center">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.32em]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
            >
              Invitación
            </p>

            <h2
              className="
                mt-2
                font-serif
                text-2xl
              "
            >
              Valeria & Alejandro
            </h2>
          </div>

          {/* FOTO REAL DE PORTADA */}

          <div
            className="
              w-full
              max-w-[430px]
              overflow-hidden
              border
              bg-white
              p-2
              shadow-[0_25px_60px_rgba(29,39,51,0.14)]
              sm:p-3
              lg:sticky
              lg:top-8
            "
            style={{
              borderColor: "rgba(164,134,84,0.3)",
            }}
          >
            <img
              src="/portada.png"
              alt="Portada de la invitación de Valeria y Alejandro"
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />
          </div>

          {/* =========================================
              PREVIEW WHATSAPP
          ========================================= */}

          {link && (
            <div
              className="
                mt-10
                w-full
                max-w-[430px]
              "
            >
              <p
                className="
                  mb-3
                  text-center
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                "
                style={{
                  color: palette.antiqueGoldDark,
                }}
              >
                Vista previa del mensaje
              </p>

              <div
                className="
                  rounded-2xl
                  bg-[#EFEAE2]
                  p-4
                  shadow-[0_15px_40px_rgba(29,39,51,0.08)]
                "
              >
                <div
                  className="
                    ml-auto
                    max-w-[90%]
                    rounded-xl
                    rounded-tr-sm
                    bg-[#D9FDD3]
                    px-4
                    py-3
                    shadow-sm
                  "
                >
                  <p
                    className="
                      whitespace-pre-wrap
                      break-words
                      text-[13px]
                      leading-5
                      text-[#1D2733]
                    "
                  >
                    {mensaje}
                  </p>

                  <p
                    className="
                      mt-1
                      text-right
                      text-[9px]
                      text-black/40
                    "
                  >
                    12:00 ✓✓
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}