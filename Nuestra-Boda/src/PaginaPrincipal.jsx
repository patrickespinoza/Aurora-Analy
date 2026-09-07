import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ItinerarioRelojCentral from "./componentes-encabezado/Itinerario";
import Preguntas from "./componentes-encabezado/Preguntas";
import Regalos from "./componentes-encabezado/Regalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import FrasePremium from "./componentes-encabezado/FrasePrincipal";
import EventoDireccion from "./componentes-encabezado/Ubicacion";
import DressCodePremium from "./componentes-encabezado/codigovestimenta";
import Galeria from "./componentes-encabezado/Galeria";
import FraseModal from "./componentes-encabezado/Fraseintermedia";
import Album from "./componentes-encabezado/albun";


export default function PaginaPrincipal() {
   // Estados para manejar boton de album
  const [open, setOpen] = useState(false);
  // Estados para manejar el formulario
  
  const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
// Estados para manejar boton de tarjeta bancaria

  const[mostrarModal, setMostrarModal] = useState(false)
  const [copiado, setCopiado] = useState(false);
  const copiarCuenta = () => {
  navigator.clipboard.writeText("1234 5678 9012 3456");
  setCopiado(true);

  setTimeout(() => {
    setCopiado(false);
  }, 2000);
};
  




  return (
    <div >

<FrasePremium/>

<EventoDireccion/>

<Galeria/>

<ItinerarioRelojCentral/>
  
<FraseModal/> 

<DressCodePremium/>

<Album/>

<Preguntas/>

<Regalos/>

<Confirmacion/>
  

      </div>      
  );
}
