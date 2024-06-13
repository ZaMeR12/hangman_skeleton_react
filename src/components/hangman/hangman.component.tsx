import { Alert, CircularProgress, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { produce } from "immer";
import _ from "lodash";
import { PrimaryTextColor } from "../../styles/base.style";
import HangmanImage from "./hangmanImage.component";
import { ApiContext } from "../../contexts/api.context";
import { FormattedMessage } from "react-intl";

interface IHangmanProps {
  nbFault: number;
  darkMode: boolean;
  lettersGuest: string[];
  playerStart: boolean;
  setIsWinning(isWinning: boolean): void;
}

const Hangman = (props: IHangmanProps) => {
  const [wordShow, setwordShow] = useState<string[]>([]);
  const { word, status, isApiRequestLoad } = useContext(ApiContext);

  useEffect(() => {
    const wordShowTemp: string[] = new Array<string>(word.length);

    setwordShow(
      produce(wordShowTemp, (draft) => {
        for (let index = 0; index < draft.length; index++) {
          draft[index] = " _ ";
        }
      })
    );
  }, [word]);

  useEffect(() => {
    if (props.playerStart) {
      setwordShow(
        produce(wordShow, (draft) => {
          for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < props.lettersGuest.length; j++) {
              if (
                draft[i] == " _ " &&
                props.lettersGuest[j] == word.charAt(i)
              ) {
                draft[i] = " " + word.charAt(i) + " ";
              }
            }
          }
        })
      );
    }
  }, [props.lettersGuest]);

  useEffect(() => {
    var wordValidate: boolean = true;
    if (_.isEmpty(wordShow)) {
      wordValidate = false;
    }
    for (let index = 0; index < wordShow.length; index++) {
      if (wordShow[index] == " _ ") {
        wordValidate = false;
      }
    }
    if (wordValidate) {
      props.setIsWinning(true);
    }
  }, [wordShow]);

  return (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item xs={12}>
        <HangmanImage darkMode={props.darkMode} nbFault={props.nbFault} />
      </Grid>
      <Grid item>
        {isApiRequestLoad ? (
          <Typography variant="h4" component="h4">
            <PrimaryTextColor>{wordShow}</PrimaryTextColor>
          </Typography>
        ) : status == 200 ? (
          <CircularProgress
            color="secondary"
            role="progressbar"
            title="Progressbar to load a word"
            style={{ marginTop: "3vh" }}
          />
        ) : (
          <Alert
            variant="filled"
            severity="error"
            style={{ fontWeight: "bold" }}
          >
            <FormattedMessage
              id="error_word_random_api"
              defaultMessage="There is a problem with the word generator. Please retry later."
              values={{ status: status }}
            />
          </Alert>
        )}
      </Grid>
    </Grid>
  );
};

export default Hangman;
