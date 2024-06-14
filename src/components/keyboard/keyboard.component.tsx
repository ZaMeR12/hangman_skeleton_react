import { Grid } from "@mui/material";
import LetterButton from "./letterButton.component";

/**
 * Interface of Keyboard component's props.
 *
 * @interface IKeyboardProps
 */
interface IKeyboardProps {
  nbFault: number;
  setNbFault(nbFault: number): void;
  lettersGuest: string[];
  setLettersGuest(lettersGuest: string[]): void;
  setPlayerStart(isStarted: boolean): void;
  isDisabled: boolean;
  isWinning: boolean;
}

/**
 * React component to manager the keyboard to play the game.
 *
 * @param {IKeyboardProps} props Component's props.
 * @return {JSX.Element} React component.
 */
const Keyboard = (props: IKeyboardProps): JSX.Element => {
  // List of letters available.
  const letters: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      paddingLeft={1}
      paddingRight={1}
      paddingTop={3}
    >
      {/* Generate buttons of the keyboard */}
      {letters.map((letter) => (
        <Grid item key={`button letter ${letter}`}>
          <LetterButton
            nbFault={props.nbFault}
            setNbFault={props.setNbFault}
            lettersGuest={props.lettersGuest}
            setLettersGuest={props.setLettersGuest}
            letter={letter}
            isDisabled={props.isDisabled}
            isWinning={props.isWinning}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Keyboard;
