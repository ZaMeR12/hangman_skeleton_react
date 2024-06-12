import { Grid } from "@mui/material";
import {
  ImgHangmanDarkMode,
  ImgHangmanLightMode,
} from "../../styles/hangman.style";
import HangmanImgSources from "./hangmanImgSources.component";

interface IHangmanImageProps {
  darkMode: boolean;
  nbFault: number;
}

const HangmanImage = (props: IHangmanImageProps) => {
  const hangmansDarkMode: string[] = [
    "./hangman/zero-fault.png",
    "./hangman/dark_mode/first-fault.png",
    "./hangman/dark_mode/second-fault.png",
    "./hangman/dark_mode/third-fault.png",
    "./hangman/dark_mode/fourth-fault.png",
    "./hangman/dark_mode/fifth-fault.png",
    "./hangman/dark_mode/six-fault.png",
    "./hangman/dark_mode/seven-fault.png",
  ];

  const hangmanLightMode: string[] = [
    "./hangman/zero-fault.png",
    "./hangman/light_mode/first-fault.png",
    "./hangman/light_mode/second-fault.png",
    "./hangman/light_mode/third-fault.png",
    "./hangman/light_mode/fourth-fault.png",
    "./hangman/light_mode/fifth-fault.png",
    "./hangman/light_mode/six-fault.png",
    "./hangman/light_mode/seven-fault.png",
  ];

  const hangmanAlt: string[] = [
    "0 fault",
    "1 fault",
    "2 faults",
    "3 faults",
    "4 faults",
    "5 faults",
    "6 faults",
    "7 faults",
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {props.darkMode ? (
          <ImgHangmanDarkMode
            alt={hangmanAlt[props.nbFault]}
            src={hangmansDarkMode[props.nbFault]}
          />
        ) : (
          <ImgHangmanLightMode
            alt={hangmanAlt[props.nbFault]}
            src={hangmanLightMode[props.nbFault]}
          />
        )}
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <HangmanImgSources />
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default HangmanImage;
