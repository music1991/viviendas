import { GraduationCap, Briefcase, Heart, Languages } from "lucide-react";
import { useLanguage } from "../context/Language";
import TypewriterLines from "../components/TypewriterLines";
import React, { useMemo } from "react";
import images from "../images.json";

const volunteerPics = images.motivation.volunteerPics;
const theaterPics = images.motivation.theaterPics ?? [];
const exercisePics = images.motivation.exercisePics ?? [];


const Polaroid: React.FC<{ src: string; caption?: string; rotate?: number }> = ({ src, caption, rotate = 0 }) => (
  <figure
    className={`relative bg-white rounded-sm shadow-xl ring-1 ring-black/10 p-3 w-44 sm:w-52 md:w-56
                transition-transform duration-300 hover:-translate-y-1`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <img
      src={src}
      alt={caption ?? ""}
      className="block w-full h-44 sm:h-52 md:h-56 object-cover rounded-[2px]"
      draggable={false}
    />
    {caption && (
      <figcaption className="mt-2 text-[12px] text-gray-700 text-center">
        {caption}
      </figcaption>
    )}
    <div className="pointer-events-none absolute inset-0 rounded-sm shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]" />
  </figure>
);

const PolaroidRow: React.FC<{ images: { src: string; caption?: string }[] }> = ({ images }) => (
  <div className="mt-4 flex items-start justify-center gap-4 sm:gap-6 flex-wrap">
    <Polaroid src={images[0]?.src} caption={images[0]?.caption} rotate={-6} />
    <Polaroid src={images[1]?.src} caption={images[1]?.caption} rotate={4} />
    {images[2] && <Polaroid src={images[2]?.src} caption={images[2]?.caption} rotate={-2} />}
  </div>
);


const AboutPage: React.FC = () => {
  const { t, tObj } = useLanguage();

  const aboutLines = useMemo(
    () => t("profile.about.content").split("\n").filter((l) => l.trim().length > 0),
    [t]
  );

  type LangItem = { name: string; level: string };
  type EduItem = { degree: string; institution: string; year: string };
  type JobItem = { role: string; company: string; period: string; details: string[] };

  const jobs = tObj<JobItem[]>("profile.experience.jobs") ?? [];
  const langs = tObj<LangItem[]>("profile.languages.list") ?? [];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* <header className="text-center py-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
        <p className="text-lg opacity-90 mt-20">{t("profile.header.subtitle")}</p>
      </header> */}

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">

        <div className="max-w-4xl mx-auto mt-16 mb-24 bg-white rounded-3xl shadow-xl border border-gray-200 p-10">

          {/* título principal */}
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Sobre Nosotros
          </h2>

          {/* descripción general */}
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            <span className="font-semibold text-blue-700">Viviendas Bariloche Tuc.</span> es una empresa familiar dedicada al diseño y
            construcción de viviendas prefabricadas que combinan calidad, calidez y eficiencia. Nacimos con un propósito claro:
            ofrecer soluciones habitacionales accesibles, modernas y pensadas para mejorar la vida de las familias que eligen
            crecer en la Patagonia.
          </p>

          {/* VISIÓN */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600 text-3xl">•</span> Nuestra Visión
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg pl-5">
              Ser la empresa líder en viviendas prefabricadas del norte argentino, reconocida por la calidad,
              la transparencia y la confianza que brindamos en cada construcción. Cada hogar entregado es un
              lugar donde las personas proyectan sueños, futuro y bienestar.
            </p>
          </div>

          {/* MISIÓN */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600 text-3xl">•</span> Nuestra Misión
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg pl-5">
              Diseñar y construir viviendas eficientes, cómodas y accesibles, cuidando cada detalle desde el
              primer contacto hasta la entrega final. Apostamos por procesos claros, tiempos reales y un
              acompañamiento continuo para que cada familia disfrute de su hogar sin estrés ni sorpresas.
            </p>
          </div>

          {/* VALORES */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <span className="text-blue-600 text-3xl">•</span> Nuestros Valores
            </h3>

            <ul className="space-y-4 text-gray-700 text-lg pl-5">
              <li>
                <span className="font-semibold text-blue-700">Compromiso:</span>
                &nbsp;Cumplimos cada plazo, acuerdo y palabra. La confianza es la base del proyecto.
              </li>

              <li>
                <span className="font-semibold text-blue-700">Transparencia:</span>
                &nbsp;Comunicación clara en cada etapa de la obra, sin sorpresas.
              </li>

              <li>
                <span className="font-semibold text-blue-700">Calidad:</span>
                &nbsp;Materiales seleccionados, técnicas modernas y mano de obra especializada.
              </li>

              <li>
                <span className="font-semibold text-blue-700">Cercanía:</span>
                &nbsp;Acompañamos a cada familia como si el proyecto fuera propio.
              </li>

              <li>
                <span className="font-semibold text-blue-700">Evolución:</span>
                &nbsp;Mejora continua, innovación y búsqueda constante de soluciones más eficientes.
              </li>
            </ul>
          </div>

        </div>


      </div>
    </main>
  );
};

export default AboutPage;
