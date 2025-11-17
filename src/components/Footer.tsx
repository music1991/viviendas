import { useLanguage } from "../context/Language";
import { Mail, ArrowUp } from "lucide-react";
import { mailTo } from "./Mail";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-gray-200 bg-gray-50 mt-20">
      <div className="
        max-w-7xl mx-auto px-6 md:px-10 py-10
        flex flex-col md:flex-row items-center md:items-start
        justify-center md:justify-between gap-6
        text-center md:text-left
      ">
        {/* <div className="order-1 md:order-2">
          <a href={mailTo()} className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
            <Mail className="w-7 h-7" />
          </a>
        </div> */}

        <div className="order-2 md:order-3">
          <button
            onClick={scrollTop}
            className="group flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-all"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            {t("general.backToTop") ?? "Back to top"}
          </button>
        </div>

        <div className="order-3 md:order-1">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("general.nameSite")}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            © {year}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 opacity-60" />
    </footer>
  );
}
