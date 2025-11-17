import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Relevamiento inicial", text: "Conocemos tu idea, necesidad y estilo de vivienda." },
  { title: "Modelos y presupuesto", text: "Te mostramos opciones y un estimado claro de inversión." },
  { title: "Personalización del proyecto", text: "Ajustamos distribución, terminaciones y detalles." },
  { title: "Planificación", text: "Definimos plazos, materiales y cronograma de obra." },
  { title: "Preparación del terreno", text: "Dejamos todo listo para comenzar la construcción." },
  { title: "Montaje de la estructura", text: "Armamos la base y estructura principal de la vivienda." },
  { title: "Paneles y techos", text: "La casa toma forma con paredes, techo y aislaciones." },
  { title: "Terminaciones", text: "Aplicamos detalles interiores y exteriores." },
  { title: "Inspección y entrega", text: "Revisamos todo y te entregamos tu nueva casa." },
  { title: "Postventa", text: "Seguimos acompañándote después de la entrega." }
];

export default function ProcessSlider() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 2000); // 4 segundos

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));

  return (
    <div className="max-w-5xl mx-auto p-6 mt-20">

      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        Nuestro Proceso de Construcción
      </h2>

<div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-10 border border-gray-200 shadow-lg overflow-hidden min-h-[150px]">

  {/* Fondo rayado */}
  {/* <div
    className="absolute inset-0 bg-[linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[length:100%_32px] pointer-events-none opacity-50"
  ></div> */}

  {/* Contenido animado */}
  <motion.div
    key={index}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.6 }}
    className="relative z-10 flex flex-col"
  >
    <div className="flex items-center gap-3 mb-4">
      {/* Icono check animado */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md"
      >
        ✓
      </motion.div>

      <h3 className="text-2xl font-semibold text-gray-900">
        {index + 1}. {steps[index].title}
      </h3>
    </div>

    <p className="text-lg text-gray-700 leading-relaxed pl-12">
      {steps[index].text}
    </p>
  </motion.div>

</div>

      {/* CONTROLES (opcionales) */}
      {/* Controles más sutiles */}
<div className="flex justify-center items-center gap-6 mt-8">

  <button
    onClick={prev}
    className={`px-4 py-2 rounded-lg font-medium transition-all border
      ${
        index === 0
          ? "text-gray-400 border-gray-300 cursor-not-allowed"
          : "text-blue-700 border-blue-300 hover:bg-blue-50 hover:border-blue-500"
      }
    `}
    disabled={index === 0}
  >
    Anterior
  </button>

  <button
    onClick={next}
    className={`px-4 py-2 rounded-lg font-medium transition-all border
      ${
        index === steps.length - 1
          ? "text-gray-400 border-gray-300 cursor-not-allowed"
          : "text-blue-700 border-blue-300 hover:bg-blue-50 hover:border-blue-500"
      }
    `}
    disabled={index === steps.length - 1}
  >
    Siguiente
  </button>

</div>


    </div>
  );
}
