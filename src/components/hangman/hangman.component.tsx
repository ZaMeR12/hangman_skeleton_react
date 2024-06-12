import { Card, Grid, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { produce } from "immer";
import _ from "lodash";
import { PrimaryTextColor } from "../../styles/base.style";
import HangmanImage from "./hangmanImage.component";

interface IHangmanProps {
  nbFault: number;
  darkMode: boolean;
  lettersGuest: string[];
  word: string;
  playerStart: boolean;
}

const Hangman = (props: IHangmanProps) => {
  const [wordShow, setwordShow] = useState<string[]>([]);

  useEffect(() => {
    const wordShowTemp: string[] = new Array<string>(props.word.length);

    setwordShow(
      produce(wordShowTemp, (draft) => {
        for (let index = 0; index < draft.length; index++) {
          draft[index] = " _ ";
        }
      })
    );
  }, [props.word]);

  useEffect(() => {
    if (props.playerStart) {
      setwordShow(
        produce(wordShow, (draft) => {
          for (let i = 0; i < props.word.length; i++) {
            for (let j = 0; j < props.lettersGuest.length; j++) {
              if (
                draft[i] == " _ " &&
                props.lettersGuest[j] == props.word.charAt(i)
              ) {
                draft[i] = " " + props.word.charAt(i) + " ";
              }
            }
          }
        })
      );
    }
  }, [props.lettersGuest]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <HangmanImage darkMode={props.darkMode} nbFault={props.nbFault} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          <PrimaryTextColor>{wordShow}</PrimaryTextColor>
        </Typography>
      </Grid>
    </Grid>
  );

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

  const editAnswer = () => {};
};

export default Hangman;
