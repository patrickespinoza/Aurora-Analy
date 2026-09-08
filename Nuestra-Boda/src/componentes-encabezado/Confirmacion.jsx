import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxdeU5Oi1fr3D_zA_J95JiIXBT40BaXKSoJolU3We0AObSwExDzUa48aK7PuPDoYdKJQg/exec";

const colores = {
  rosa: "#F277A2",
  rosaFuerte: "#D94F82",
  rosaClaro: "#FFDCE8",
  rosaFondo: "#FFF1F6",
  crema: "#FFF9ED",
  amarillo: "#F5C44D",
  amarilloClaro: "#FFF0B5",
  naranja: "#E9873D",
  texto: "#67444D",
  textoSuave: "#906F78",
  error: "#A64355",
  success: "#567844",
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
    },
  },
};

function SeparadorFloral() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#F5C44D] sm:w-16" />
      <span className="text-xl">🌼</span>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#F5C44D] sm:w-16" />
    </div>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

function CheckIcon() {
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
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

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
        relative flex cursor-pointer items-start gap-4
        rounded-[24px] border-2 px-5 py-4 text-left transition
      "
      style={{
        backgroundColor: isSelected
          ? colores.rosaFondo
          : colores.blanco,
        borderColor: isSelected ? colores.rosa : colores.rosaClaro,
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
          mt-0.5 flex h-5 w-5 shrink-0
          items-center justify-center rounded-full border-2
        "
        style={{
          borderColor: isSelected ? colores.rosaFuerte : colores.rosaClaro,
        }}
      >
        {isSelected && (
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: colores.rosaFuerte }}
          />
        )}
      </span>

      <span>
        <span
          className="block font-serif text-[15px] font-semibold sm:text-base"
          style={{ color: colores.texto }}
        >
          {title}
        </span>

        <span
          className="mt-1 block text-[12px] leading-5 sm:text-[13px]"
          style={{ color: colores.textoSuave }}
        >
          {description}
        </span>
      </span>
    </label>
  );
}

export default function Confirmacion() {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const cambiarAsistencia = (respuesta) => {
    setAsistencia(respuesta);
    setError("");

    if (respuesta === "No asistiré") {
      setInvitados(0);
      return;
    }

    if (respuesta === "Sí asistiré" && invitados < 1) {
      setInvitados(1);
    }
  };

  const enviarConfirmacion = async (event) => {
    event.preventDefault();

    if (enviando || enviado) return;

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
      invitados < 1
    ) {
      setError("Escribe cuántas personas asistirán.");
      return;
    }

    setError("");
    setEnviando(true);

    // Se envían únicamente estos cuatro campos.
    const confirmationData = {
      nombre: nombreInvitado.trim(),
      asistencia,
      invitados: asistencia === "Sí asistiré" ? invitados : 0,
      mensaje: mensajeInvitado.trim(),
    };

    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(confirmationData),
      });

      setEnviado(true);
    } catch (requestError) {
      console.error("Error enviando la confirmación:", requestError);
      setError(
        "No pudimos registrar tu confirmación. Intenta nuevamente."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.08 }}
      className="
        relative flex min-h-[820px] w-full
        items-center justify-center overflow-hidden
        px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32
      "
      style={{ backgroundColor: colores.rosaFondo }}
    >
      <span className="pointer-events-none absolute left-2 top-4 text-6xl sm:left-7 sm:text-8xl">
        🌼
      </span>
      <span className="pointer-events-none absolute right-3 top-10 text-5xl sm:right-8 sm:text-7xl">
        🌸
      </span>
      <span className="pointer-events-none absolute bottom-6 left-5 text-4xl sm:text-6xl">
        🌸
      </span>
      <span className="pointer-events-none absolute bottom-3 right-2 text-6xl sm:right-7 sm:text-8xl">
        🌼
      </span>

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

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.div
          className="
            mx-auto mb-10 flex max-w-3xl
            flex-col items-center text-center sm:mb-14
          "
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div
            className="
              flex h-20 w-20 items-center
              justify-center rounded-full border-4 bg-white
            "
            style={{
              color: colores.rosaFuerte,
              borderColor: colores.amarilloClaro,
            }}
          >
            <EnvelopeIcon />
          </div>

          <p
            className="
              mt-6 text-[9px] font-bold uppercase
              tracking-[0.38em] sm:text-[11px]
            "
            style={{ color: colores.naranja }}
          >
            ¿Nos acompañas?
          </p>

          <h2
            className="
              mt-4 font-cursiveDancing text-[52px]
              font-normal leading-none sm:text-[72px]
            "
            style={{ color: colores.rosaFuerte }}
          >
            Confirma tu asistencia
          </h2>

          <div className="mt-5">
            <SeparadorFloral />
          </div>

          <p
            className="
              mx-auto mt-5 max-w-2xl font-serif
              text-sm italic leading-7 sm:text-base
            "
            style={{ color: colores.textoSuave }}
          >
            Ayúdanos a preparar cada detalle de la celebración
            de Aurora con mucho cariño.
          </p>
        </motion.div>

        <motion.form
          onSubmit={enviarConfirmacion}
          className="
            relative mx-auto w-full max-w-3xl
            overflow-hidden border-2 bg-white
            px-6 py-12 sm:px-10 sm:py-14 md:px-14
          "
          style={{
            borderColor: colores.rosaClaro,
            borderRadius: "48px 48px 28px 28px",
            boxShadow: "0 24px 65px rgba(201,83,125,0.14)",
          }}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.95, delay: 0.12 }}
        >
          <div
            className="pointer-events-none absolute inset-[7px] border border-dashed"
            style={{
              borderColor: "rgba(245,196,77,0.72)",
              borderRadius: "40px 40px 22px 22px",
            }}
          />

          <div className="relative z-10">
            <div>
              <div>
                <label
                  htmlFor="confirmation-name"
                  className="text-[9px] font-bold uppercase tracking-[0.28em]"
                  style={{ color: colores.rosaFuerte }}
                >
                  Nombre
                </label>
              </div>

              <input
                id="confirmation-name"
                type="text"
                value={nombreInvitado}
                onChange={(event) => setNombreInvitado(event.target.value)}
                placeholder="Escribe tu nombre"
                autoComplete="name"
                className="
                  mt-3 w-full rounded-[18px] border-2
                  bg-[#FFF9FC] px-5 py-4 font-serif
                  text-base outline-none sm:text-lg
                "
                style={{
                  color: colores.texto,
                  borderColor: colores.rosaClaro,
                }}
              />

            </div>

            <div className="mt-8 border-t border-[#FFDCE8] pt-8">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.28em]"
                style={{ color: colores.rosaFuerte }}
              >
                ¿Asistirás?
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <AttendanceOption
                  value="Sí asistiré"
                  selectedValue={asistencia}
                  onChange={cambiarAsistencia}
                  title="Sí asistiré"
                  description="¡Será un gusto celebrar juntos!"
                />

                <AttendanceOption
                  value="No asistiré"
                  selectedValue={asistencia}
                  onChange={cambiarAsistencia}
                  title="No asistiré"
                  description="Gracias por hacérnoslo saber."
                />
              </div>
            </div>

            <AnimatePresence>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  className="mt-8 border-t border-[#FFDCE8] pt-8"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div>
                    <label
                      htmlFor="confirmation-guests"
                      className="text-[9px] font-bold uppercase tracking-[0.28em]"
                      style={{ color: colores.rosaFuerte }}
                    >
                      Número de invitados
                    </label>
                  </div>

                  <input
                    id="confirmation-guests"
                    type="number"
                    min="1"
                    inputMode="numeric"
                    value={invitados}
                    onChange={(event) => {
                      const value = Number.parseInt(event.target.value, 10);
                      setInvitados(Number.isNaN(value) ? "" : value);
                    }}
                    placeholder="Escribe el número de invitados"
                    className="
                      mt-3 w-full rounded-[18px]
                      border-2 bg-[#FFF9FC] px-5 py-4
                      text-center font-serif text-base outline-none
                      sm:text-lg
                    "
                    style={{
                      color: colores.texto,
                      borderColor: colores.rosaClaro,
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 border-t border-[#FFDCE8] pt-8">
              <label
                htmlFor="confirmation-message"
                className="text-[9px] font-bold uppercase tracking-[0.28em]"
                style={{ color: colores.rosaFuerte }}
              >
                Mensaje para Aurora
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
                  mt-3 w-full resize-none rounded-[18px]
                  border-2 bg-[#FFF9FC] px-5 py-4
                  font-serif text-[14px] leading-7 outline-none
                  sm:text-[15px]
                "
                style={{
                  color: colores.texto,
                  borderColor: colores.rosaClaro,
                }}
              />

              <p
                className="mt-2 text-right text-[10px]"
                style={{ color: colores.textoSuave }}
              >
                {mensajeInvitado.length}/500
              </p>
            </div>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  key="confirmation-error"
                  className="
                    mt-6 rounded-[16px] border px-4 py-3
                    text-center font-serif text-[13px] sm:text-[14px]
                  "
                  style={{
                    color: colores.error,
                    borderColor: "rgba(166,67,85,0.28)",
                    backgroundColor: "rgba(166,67,85,0.05)",
                  }}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {error}
                </motion.div>
              )}

              {enviado && !error && (
                <motion.div
                  key="confirmation-success"
                  className="
                    mt-6 flex items-center justify-center gap-3
                    rounded-[16px] border px-4 py-3
                    text-center font-serif text-[13px] sm:text-[14px]
                  "
                  style={{
                    color: colores.success,
                    borderColor: "rgba(86,120,68,0.3)",
                    backgroundColor: "rgba(86,120,68,0.07)",
                  }}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <CheckIcon />
                  ¡Gracias! Tu confirmación fue registrada.
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={enviando || enviado}
              className="
                mt-8 inline-flex min-h-[56px] w-full
                items-center justify-center gap-3 rounded-full
                border-2 px-6 py-4 text-white
                disabled:cursor-not-allowed disabled:opacity-65
              "
              style={{
                backgroundColor: colores.rosaFuerte,
                borderColor: colores.rosaFuerte,
                boxShadow: "0 12px 28px rgba(217,79,130,0.22)",
              }}
              whileHover={
                enviando || enviado ? undefined : { y: -2 }
              }
              whileTap={
                enviando || enviado ? undefined : { scale: 0.985 }
              }
            >
              {enviando ? (
                <span
                  className="
                    h-5 w-5 animate-spin rounded-full
                    border-2 border-white/40 border-t-white
                  "
                />
              ) : enviado ? (
                <CheckIcon />
              ) : (
                <EnvelopeIcon />
              )}

              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                {enviando
                  ? "Enviando"
                  : enviado
                    ? "Confirmación enviada"
                    : "Enviar confirmación"}
              </span>
            </motion.button>

            <p
              className="
                mx-auto mt-5 max-w-xl text-center
                font-serif text-[12px] italic leading-6 sm:text-[13px]
              "
              style={{ color: colores.textoSuave }}
            >
              Tu respuesta se registrará directamente en nuestra lista
              de invitados.
            </p>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}