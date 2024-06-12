import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import French from "../lang/fr.json";
import English from "../lang/en.json";
import FrenchAccessibility from "../lang/accessibility/fr.json";
import EnglishAccessibility from "../lang/accessibility/en.json";
import useLocalStorage from "use-local-storage";

export type LanguageContextType = {
  locale: string;
  messages: ILang;
  accessibility: ILangAccessibility;
  setLanguage: (choix: boolean) => void;
};

export const LanguageContext = React.createContext<LanguageContextType>({
  locale: "en",
  messages: English,
  accessibility: EnglishAccessibility,
  setLanguage: (_choix: boolean) => {},
});

/**
 * Provider that manage internationalization.
 *
 * @export
 * @param {any} props props of the provider
 * @return {*}
 */
export default function LanguageProvider(props: any) {
  const [locale, setlocale] = useLocalStorage("locale", "en");
  const [messages, setmessages] = useState(English);
  const [accessibility, setAccessibility] = useState(EnglishAccessibility);
  const values = {
    locale,
    messages,
    accessibility,
    setLanguage: setLanguage,
  };

  useEffect(() => {
    if (locale == "en") {
      setLanguage(true);
    } else {
      setLanguage(false);
    }
  }, []);

  function setLanguage(choix: boolean) {
    if (choix) {
      setlocale("en");
      setmessages(English);
      setAccessibility(EnglishAccessibility);
    } else {
      setlocale("fr");
      setmessages(French);
      setAccessibility(FrenchAccessibility);
    }
  }
  return (
    <LanguageContext.Provider value={values}>
      <IntlProvider locale={locale} messages={messages}>
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}
