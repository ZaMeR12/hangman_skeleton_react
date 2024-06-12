import { Grid } from "@mui/material";
import LetterButton from "./letterButton.component";

interface IKeyboardProps {
  nbFault: number;
  setNbFault(nbFault: number): void;
  lettersGuest: string[];
  setLettersGuest(lettersGuest: string[]): void;
  setPlayerStart(isStarted: boolean): void;
  word: string;
  isDisabled: boolean;
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
          word={props.word}
          letter={"a"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"b"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"c"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"d"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"e"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"f"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"g"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"h"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"i"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"j"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"k"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"l"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"m"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"n"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"o"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"p"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"q"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"r"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"s"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"t"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"u"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"v"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"w"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"x"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"y"}
          isDisabled={props.isDisabled}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          word={props.word}
          letter={"z"}
          isDisabled={props.isDisabled}
        />
      </Grid>
    </Grid>
  );
};

export default Keyboard;
