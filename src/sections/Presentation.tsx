import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/Language";
import images from "../images.json";

export default function Presentation() {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto font-sans text-gray-800 leading-relaxed px-6 md:px-20">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {t("aboutMe.title")}
      </h1>

      <p className="text-xl mb-6 text-gray-600 whitespace-pre-line">
        {t("aboutMe.detail")}
      </p>

      <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 border-l-8 border-l-blue-400 flex items-center gap-4 mt-10 shadow-sm">
        <div className="flex-shrink-0">
          <div
            style={{ width: 120, height: 120 }}
            className="rounded-full overflow-hidden border-2 border-white shadow-lg"
          >
            <img
              src={images.profile.src}
              alt={images.profile.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <p className="m-0 italic text-gray-600">
            {'"' + t("aboutMe.speak") + '"'}
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => { window.location.href = "/about" }}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 font-medium text-lg transition-all duration-300 hover:translate-x-1"
        >
          {t("aboutMe.more")}
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
