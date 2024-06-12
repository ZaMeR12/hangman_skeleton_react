import { Grid } from "@mui/material";
import LetterButton from "./letterButton.component";

interface IKeyboardProps {
  nbFault: number;
  setNbFault(nbFault: number): void;
  lettersGuest: string[];
  setLettersGuest(lettersGuest: string[]): void;
  setPlayerStart(isStarted: boolean): void;
  word: string;
}

const Keyboard = (props: IKeyboardProps) => {
  return (
    <Grid container spacing={2} style={{ padding: 25 }}>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"a"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"b"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"c"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"d"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"e"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"f"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"g"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"h"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"i"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"j"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"k"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"l"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"m"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"n"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"o"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"p"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"q"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"r"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"s"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"t"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"u"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"v"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"w"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"x"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"y"}
        />
      </Grid>
      <Grid item>
        <LetterButton
          nbFault={props.nbFault}
          setNbFault={props.setNbFault}
          lettersGuest={props.lettersGuest}
          setLettersGuest={props.setLettersGuest}
          setPlayerStart={props.setPlayerStart}
          word={props.word}
          letter={"z"}
        />
      </Grid>
    </Grid>
  );
};

export default Keyboard;
