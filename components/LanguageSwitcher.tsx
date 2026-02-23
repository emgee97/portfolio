"use client";

import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="fixed bottom-5 right-5 md:bottom-auto md:top-5 z-[5001] flex items-center gap-1 px-3 py-2 rounded-lg"
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
    >
      <button
        onClick={() => setLang("en")}
        className={`text-sm px-2 py-0.5 rounded transition-colors ${
          lang === "en"
            ? "text-purple font-bold"
            : "text-neutral-400 hover:text-neutral-200"
        }`}
      >
        EN
      </button>
      <span className="text-neutral-500 text-xs">|</span>
      <button
        onClick={() => setLang("fr")}
        className={`text-sm px-2 py-0.5 rounded transition-colors ${
          lang === "fr"
            ? "text-purple font-bold"
            : "text-neutral-400 hover:text-neutral-200"
        }`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
