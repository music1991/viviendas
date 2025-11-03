import { useLanguage, type Language } from "../context/Language";

export const LanguageSelector = () => {
    const { language, setLanguage, t } = useLanguage();

    const languages = ["en", "es"];

    return (
        <div className="flex flex-row items-center space-x-2">
            {languages.map((lang, index) => (
                <div key={lang} className="flex flex-row items-center">
                    <button
                        className={`text-gray-700 text-sm md:text-base font-medium hover:text-gray-900 cursor-pointer transition-all ${
                            language === lang ? "font-bold text-blue-600" : "font-normal text-gray-600"
                        }`}
                        onClick={() => setLanguage(lang as Language)}
                    >
                        {lang.toUpperCase()}
                    </button>
                    {index < languages.length - 1 && (
                        <span className="text-gray-400 ml-1">|</span>
                    )}
                </div>
            ))}
        </div>
    );
};