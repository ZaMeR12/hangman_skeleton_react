import { Grid } from "@mui/material";
import LetterButton from "./letterButton.component";
import { useContext } from "react";
import { ApiContext } from "../../contexts/api.context";

interface IKeyboardProps {
  nbFault: number;
  setNbFault(nbFault: number): void;
  lettersGuest: string[];
  setLettersGuest(lettersGuest: string[]): void;
  setPlayerStart(isStarted: boolean): void;
  isDisabled: boolean;
  isWinning: boolean;
}

const Keyboard = (props: IKeyboardProps) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      paddingLeft={1}
      paddingRight={1}
      paddingTop={3}
    >
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"a"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"b"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"c"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"d"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"e"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"f"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"g"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"h"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"i"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"j"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"k"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"l"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"m"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"n"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"o"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"p"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"q"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"r"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"s"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"t"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"u"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"v"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"w"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"x"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"y"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          letter={"z"}
          isDisabled={props.isDisabled}
          isWinning={props.isWinning}
        />
      </Grid>
    </Grid>
  );
};

export default Keyboard;
