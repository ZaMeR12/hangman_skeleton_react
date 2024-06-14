import { Grid } from "@mui/material";
import {
  ImgHangmanDarkMode,
  ImgHangmanLightMode,
} from "../../styles/hangman.style";
import HangmanImgSources from "./hangmanImgSources.component";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/internationalization.context";

/**
 * Interface of the HangmanImage component's props.
 *
 * @interface IHangmanImageProps
 */
interface IHangmanImageProps {
  darkMode: boolean;
  nbFault: number;
}

/**
 * React component to manage the image of the hangman.
 *
 * @param {IHangmanImageProps} props Component's props.
 * @return {JSX.Element} React component.
 */
const HangmanImage = (props: IHangmanImageProps): JSX.Element => {
  const { accessibility } = useContext(LanguageContext);

  // List of the hangman's images for drakmode.
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

  // List of the hangman's images for lightmode.
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

  return (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item xs={12}>
        {props.darkMode ? (
          <ImgHangmanDarkMode
            alt={accessibility.alts_hangman_img[props.nbFault]}
            title={accessibility.title_hangman_img}
            src={hangmansDarkMode[props.nbFault]}
          />
        ) : (
          <ImgHangmanLightMode
            alt={accessibility.alts_hangman_img[props.nbFault]}
            title={accessibility.title_hangman_img}
            src={hangmanLightMode[props.nbFault]}
          />
        )}
      </Grid>
      <Grid item>
        <HangmanImgSources />
      </Grid>
    </Grid>
  );
};

export default HangmanImage;
