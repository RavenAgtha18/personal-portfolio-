import { ref, computed } from "vue";
import en from "@/locales/en";
import ja from "@/locales/ja";

const currentLang = ref("en");

// Clean up any residual Google Translate cookies, banners, and body offsets
if (typeof document !== "undefined") {
  try {
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    const host = window.location.hostname;
    if (host) {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${host}; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${host}; path=/;`;
    }
    // Remove any Google Translate banners if present
    const banners = document.querySelectorAll(".goog-te-banner-frame, #goog-gt-tt, .skiptranslate");
    banners.forEach((el) => el.remove());
    if (document.body) {
      document.body.style.top = "0px";
    }
  } catch (e) {
    // ignore
  }
}

// Check if localStorage has saved preference
if (typeof window !== "undefined") {
  const saved = localStorage.getItem("language");
  if (saved === "ja" || saved === "en") {
    currentLang.value = saved;
    document.documentElement.lang = saved;
  }
}

export function useLanguage() {
  const isJapanese = computed(() => currentLang.value === "ja");

  const messages = computed(() => (currentLang.value === "ja" ? ja : en));

  const setLanguage = (lang) => {
    if (lang !== "en" && lang !== "ja") return;
    currentLang.value = lang;
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
      document.documentElement.lang = lang;
      window.dispatchEvent(new CustomEvent("language-changed", { detail: lang }));
    }
  };

  const toggleLanguage = () => {
    setLanguage(currentLang.value === "en" ? "ja" : "en");
  };

  // Helper function to resolve nested keys like t('nav.home')
  const t = (key) => {
    if (!key) return "";
    const keys = key.split(".");
    let result = messages.value;
    for (const k of keys) {
      if (result && Object.prototype.hasOwnProperty.call(result, k)) {
        result = result[k];
      } else {
        return key; // fallback
      }
    }
    return result;
  };

  return {
    currentLang,
    isJapanese,
    messages,
    setLanguage,
    toggleLanguage,
    t,
  };
}
