import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import _ from "lodash";
import React, { useState } from "react";

/**
 * AxiosInstance to call the RandomWord API.
 * @source https://random-word-api.herokuapp.com/home
 */
const apiRandomWord: AxiosInstance = axios.create({
  baseURL: "https://random-word-api.herokuapp.com/",
});

/**
 * The type for the context of the API.
 */
export type ApiContextType = {
  getEnglishWord: () => void;
  getFrenchWord: () => void;
  status: number;
  isApiRequestLoad: boolean;
  word: string;
};

/**
 * React context for the API.
 */
export const ApiContext: React.Context<ApiContextType> =
  React.createContext<ApiContextType>({
    getEnglishWord: () => {},
    getFrenchWord: () => {},
    status: 200,
    isApiRequestLoad: false,
    word: "",
  });

/**
 * React provider for the API and manage it.
 *
 * @param {*} props Provider's props.
 * @return {JSX.Element} Provider.
 */
const ApiProvider = (props: any): JSX.Element => {
  const [word, setWord] = useState<string>("");
  const [isApiRequestLoad, setIsApiRequestLoad] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(200);
  /**
   * Getting a random int number.
   *
   * @source https://forkful.ai/en/typescript/numbers/generating-random-numbers/
   * @param min Minimum value
   * @param max Maximum value
   * @returns Random int between min and max
   */
  const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

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

  /**
   * Generate a word in english from the RandomWord API.
   *
   * Note: The length of the word is between 5 to 12 characters.
   */
  const getEnglishWord = () => {
    const lengthWord: number = getRandomInt(5, 12);
    apiRandomWord
      .get(`word?number=1&length=${lengthWord}`)
      .then((response: AxiosResponse) => {
        const wordTemp: string = removeAccents(response.data[0]);
        setWord(wordTemp);
        setStatus(response.status);
        console.log(wordTemp);
        setIsApiRequestLoad(true);
      })
      // Handling if the API have problems
      .catch((reason: AxiosError) => {
        if (_.isUndefined(reason.response?.status)) {
          setStatus(999);
        } else {
          setStatus(reason.response.status);
        }
      });
  };

  /**
   * Generate a word in french from the RandomWord API.
   *
   * Note: The length of the word is between 5 to 12 characters.
   */
  const getFrenchWord = () => {
    const lengthWord: number = getRandomInt(5, 12);
    apiRandomWord
      .get(`word?number=1&lang=fr&length=${lengthWord}`)
      .then((response: AxiosResponse) => {
        const wordTemp: string = removeAccents(response.data[0]);
        setWord(wordTemp);
        setStatus(response.status);
        console.log(wordTemp);
        setIsApiRequestLoad(true);
      })
      // Handling if the API have problems
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
