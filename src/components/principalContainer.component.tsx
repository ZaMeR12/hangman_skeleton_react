import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import Hangman from "./hangman/hangman.component";
import { PrincipalContainerStyle } from "../styles/principalContainer.style";
import SwitchDarkMode from "./switchDarMode.component";
import { PrimaryTextColor } from "../styles/base.style";
import Keyboard from "./keyboard/keyboard.component";

interface IPrincipalContainer {
  darkMode: boolean;
  setDarkMode(theme: boolean): void;
}

const PrincipalContainer = (props: IPrincipalContainer) => {
  const [nbFault, setNbFault] = useState<number>(0);
  const [word, setWord] = useState<string>("element");
  const [lettersGuest, setLettersGuest] = useState<string[]>([]);
  const [playerStart, setPlayerStart] = useState<boolean>(false);

  return (
    <PrincipalContainerStyle>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SwitchDarkMode
            darkMode={props.darkMode}
            setDarkMode={props.setDarkMode}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" component="h4">
            <PrimaryTextColor>Hangman Skeleton Version</PrimaryTextColor>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Hangman
            nbFault={nbFault}
            darkMode={props.darkMode}
            word={word}
            lettersGuest={lettersGuest}
            playerStart={playerStart}
          />
        </Grid>
        <Grid item xs={12}>
          <Keyboard
            nbFault={nbFault}
            setNbFault={setNbFault}
            lettersGuest={lettersGuest}
            setLettersGuest={setLettersGuest}
            setPlayerStart={setPlayerStart}
            word={word}
          />
        </Grid>
      </Grid>
    </PrincipalContainerStyle>
  );
};

export default PrincipalContainer;
