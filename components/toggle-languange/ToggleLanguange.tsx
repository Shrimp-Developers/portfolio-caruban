"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const languages = [
  { locale: "en", label: "English", flag: "🇺🇸" },
  { locale: "id", label: "Indonesia", flag: "🇮🇩" },
];

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSwitch = (newLocale: string) => {
    setOpen(false);
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Globe Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 flex items-center justify-center rounded-full 
        hover:bg-zinc-100 transition"
      >
        <Globe className="w-4 h-4" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-1 w-32 rounded-lg border bg-white shadow-md overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.locale}
              onClick={() => handleSwitch(lang.locale)}
              className={`w-full flex items-center gap-2 px-3 py-1.5 text-xs transition
              ${
                locale === lang.locale
                  ? "bg-gray-100 font-medium"
                  : "hover:bg-zinc-100"
              }`}
            >
              <span className="text-sm">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
