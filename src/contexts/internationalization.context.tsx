import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import French from "../lang/fr.json";
import English from "../lang/en.json";
import FrenchAccessibility from "../lang/accessibility/fr.json";
import EnglishAccessibility from "../lang/accessibility/en.json";
import useLocalStorage from "use-local-storage";

/**
 * Type for the context of internationalization.
 */
export type LanguageContextType = {
  locale: string;
  messages: ILang;
  accessibility: ILangAccessibility;
  setLanguage: (choice: boolean) => void;
};

/**
 * Context for internationalization.
 */
export const LanguageContext: React.Context<LanguageContextType> =
  React.createContext<LanguageContextType>({
    locale: "en",
    messages: English,
    accessibility: EnglishAccessibility,
    setLanguage: (_choix: boolean) => {},
  });

/**
 * Provider that manage internationalization.
 *
 * @export
 * @param {any} props Provider's props.
 * @return {JSX.Element} Provider.
 */
export default function LanguageProvider(props: any): JSX.Element {
  const [locale, setlocale] = useLocalStorage("locale", "en");
  const [messages, setmessages] = useState(English);
  const [accessibility, setAccessibility] = useState(EnglishAccessibility);

  useEffect(() => {
    if (locale == "en") {
      setLanguage(true);
    } else {
      setLanguage(false);
    }
  }, []);

  /**
   * Manage the language to display to the player.
   *
   * @param {boolean} choice True if it's english, otherwise it's french.
   */
  const setLanguage = (choice: boolean) => {
    if (choice) {
      setlocale("en");
      setmessages(English);
      setAccessibility(EnglishAccessibility);
    } else {
      setlocale("fr");
      setmessages(French);
      setAccessibility(FrenchAccessibility);
    }
  };

  const values = {
    locale,
    messages,
    accessibility,
    setLanguage: setLanguage,
  };

  return (
    <LanguageContext.Provider value={values}>
      <IntlProvider locale={locale} messages={messages}>
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}
