"use client";

import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

// European languages + recommended global additions
const LANGUAGES = [
  // Core European
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "es", name: "Español" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
  { code: "nl", name: "Nederlands" },
  { code: "pl", name: "Polski" },
  { code: "sv", name: "Svenska" },
  { code: "no", name: "Norsk" },
  { code: "da", name: "Dansk" },
  { code: "fi", name: "Suomi" },
  { code: "el", name: "Ελληνικά" },
  { code: "cs", name: "Čeština" },
  { code: "hu", name: "Magyar" },
  { code: "ro", name: "Română" },
  { code: "bg", name: "Български" },
  { code: "hr", name: "Hrvatski" },
  { code: "sk", name: "Slovenčina" },
  { code: "sl", name: "Slovenščina" },
  // Global business + South Africa context
  { code: "ar", name: "العربية" },
  { code: "zh-CN", name: "中文 (简体)" },
  { code: "zh-TW", name: "中文 (繁體)" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "af", name: "Afrikaans" },
  { code: "zu", name: "isiZulu" },
  { code: "sw", name: "Kiswahili" },
  { code: "tr", name: "Türkçe" },
  { code: "ru", name: "Русский" },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (
          config: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          elementId: string,
        ) => void;
      };
    };
  }
}

function getCookieLang(): string {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
  return match ? match[1] : "en";
}

function setLang(lang: string) {
  const domain = window.location.hostname;
  if (lang === "en") {
    document.cookie = `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    document.cookie = `googtrans=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  } else {
    document.cookie = `googtrans=/en/${lang}; path=/`;
    document.cookie = `googtrans=/en/${lang}; path=/; domain=${domain}`;
  }
}

export function LanguageSwitcher() {
  const [current, setCurrent] = useState("en");

  useEffect(() => {
    setCurrent(getCookieLang());

    // Load the Google Translate element script
    if (document.getElementById("google-translate-script")) return;
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: LANGUAGES.map((l) => l.code).join(","),
            autoDisplay: false,
          },
          "google-translate-hidden",
        );
      }
    };
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const lang = e.target.value;
    setCurrent(lang);
    setLang(lang);
    window.location.reload();
  }

  return (
    <div className="flex items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-1.5 text-sm">
      <Globe className="h-4 w-4 shrink-0 text-muted-foreground" />
      {/* Hidden Google Translate element required for the widget to activate */}
      <div id="google-translate-hidden" className="hidden" />
      <select
        value={current}
        onChange={handleChange}
        aria-label="Select language"
        className="cursor-pointer bg-transparent text-muted-foreground text-sm outline-none transition-colors hover:text-primary"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-background text-foreground">
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
