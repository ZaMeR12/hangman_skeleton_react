import axios, { AxiosError, AxiosResponse } from "axios";
import _ from "lodash";
import React, { useState } from "react";

const apiRandomWord = axios.create({
  baseURL: "https://random-word-api.herokuapp.com/",
});

export type ApiContextType = {
  getEnglishWord: () => void;
  getFrenchWord: () => void;
  status: number;
  isApiRequestLoad: boolean;
  word: string;
};

export const ApiContext = React.createContext<ApiContextType>({
  getEnglishWord: () => {},
  getFrenchWord: () => {},
  status: 200,
  isApiRequestLoad: false,
  word: "",
});

const ApiProvider = (props: any) => {
  const [word, setWord] = useState<string>("");
  const [isApiRequestLoad, setIsApiRequestLoad] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(200);
  /**
   * Getting a random int number
   * @source https://forkful.ai/en/typescript/numbers/generating-random-numbers/
   * @param min Minimum value
   * @param max Maximum value
   * @returns Random int between min and max
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
    const lengthWord: number = getRandomInt(12, 12);
    apiRandomWord
      .get(`word?number=1&length=${lengthWord}`)
      .then((response: AxiosResponse) => {
        const wordTemp: string = removeAccents(response.data[0]);
        setWord(wordTemp);
        setStatus(response.status);
        console.log(wordTemp);
        setIsApiRequestLoad(true);
      })
      .catch((reason: AxiosError) => {
        if (_.isUndefined(reason.response?.status)) {
          setStatus(999);
        } else {
          setStatus(reason.response.status);
        }
      });
  };
  const getFrenchWord = () => {
    const lengthWord: number = getRandomInt(12, 12);
    apiRandomWord
      .get(`word?number=1&lang=fr&length=${lengthWord}`)
      .then((response: AxiosResponse) => {
        const wordTemp: string = removeAccents(response.data[0]);
        setWord(wordTemp);
        setStatus(response.status);
        console.log(wordTemp);
        setIsApiRequestLoad(true);
      })
      .catch((reason: AxiosError) => {
        if (_.isUndefined(reason.response?.status)) {
          setStatus(999);
        } else {
          setStatus(reason.response.status);
        }
      });
  };

  const values = {
    getEnglishWord: getEnglishWord,
    getFrenchWord: getFrenchWord,
    status: status,
    isApiRequestLoad: isApiRequestLoad,
    word,
  };

  return (
    <ApiContext.Provider value={values}>{props.children}</ApiContext.Provider>
  );
};

export default ApiProvider;
