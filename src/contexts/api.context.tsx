import axios from "axios";
import { randomWord } from "../api/api.json";
import React, { useState } from "react";

const apiRandomWord = axios.create({
  baseURL: randomWord,
});

export type ApiContextType = {
  getEnglishWord: () => void;
  getFrenchWord: () => void;
  isApiRequestLoad: boolean;
  word: string;
};

export const ApiContext = React.createContext<ApiContextType>({
  getEnglishWord: () => {},
  getFrenchWord: () => {},
  isApiRequestLoad: false,
  word: "",
});

const ApiProvider = (props: any) => {
  const [word, setWord] = useState<string>("");
  const [isApiRequestLoad, setIsApiRequestLoad] = useState<boolean>(false);

  /**
   * Getting a random int number
   * @source https://forkful.ai/en/typescript/numbers/generating-random-numbers/
   * @param min
   * @param max
   * @returns
   */
  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Be able to remove accents from a string.(inspired)
   *
   * @source https://www.30secondsofcode.org/js/s/remove-accents/
   * @param {string} text Text to remove accents
   * @return {string} Return the modified string witjout accents
   */
  const removeAccents = (text: string): string => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const getEnglishWord = () => {
    const lengthWord: number = getRandomInt(5, 12);
    apiRandomWord.get(`word?number=1&length=${lengthWord}`).then((response) => {
      const wordTemp: string = removeAccents(response.data[0]);
      setWord(wordTemp);
      console.log(wordTemp);
      setIsApiRequestLoad(true);
    });
  };
  const getFrenchWord = () => {
    const lengthWord: number = getRandomInt(5, 12);
    apiRandomWord
      .get(`word?number=1&lang=fr&length=${lengthWord}`)
      .then((response) => {
        const wordTemp: string = removeAccents(response.data[0]);
        setWord(wordTemp);
        console.log(wordTemp);
        setIsApiRequestLoad(true);
      });
  };

  const values = {
    getEnglishWord: getEnglishWord,
    getFrenchWord: getFrenchWord,
    isApiRequestLoad: isApiRequestLoad,
    word,
  };

  return (
    <ApiContext.Provider value={values}>{props.children}</ApiContext.Provider>
  );
};

export default ApiProvider;
