import React from "react";

export default function ImagenFinal({ imagen = "/final.jpg" }) {
  return (
    <section
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#FFF1F6]"
      aria-label="Imagen final de la invitación"
    >
      <img
        src={imagen}
        alt="Aurora Analy"
        loading="lazy"
        decoding="async"
        draggable="false"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center px-5 pb-8 sm:pb-12 lg:pb-14">
        <p
          className="font-cursiveDancing text-[48px] font-normal leading-none text-white sm:text-[68px] lg:text-[82px]"
          style={{ textShadow: "0 3px 12px rgba(103, 68, 77, 0.7)" }}
        >
          Te esperamos
        </p>
      </div>
    </section>
  );
}
