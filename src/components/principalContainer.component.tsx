import { Alert, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Hangman from "./hangman/hangman.component";
import { PrincipalContainerStyle } from "../styles/principalContainer.style";
import { PrimaryTextColor } from "../styles/base.style";
import Keyboard from "./keyboard/keyboard.component";
import AppBarTop from "./appbar/appbarTop.component";
import AppBarBottom from "./appbar/appbarBottom.component";
import { FormattedMessage } from "react-intl";
import { ApiContext } from "../contexts/api.context";
import _ from "lodash";

/**
 * Interface of PrincipalContainer component's props.
 *
 * @interface IPrincipalContainer
 */
interface IPrincipalContainer {
  darkMode: boolean;
  setDarkMode(theme: boolean): void;
}

/**
 * React component that act as main container of the application.
 *
 * @param {IPrincipalContainer} props Component's props.
 * @return {JSX.Element} React component.
 */
const PrincipalContainer = (props: IPrincipalContainer): JSX.Element => {
  const { word } = useContext(ApiContext);
  const [nbFault, setNbFault] = useState<number>(0);
  const [lettersGuest, setLettersGuest] = useState<string[]>([]);
  const [playerStart, setPlayerStart] = useState<boolean>(false);
  const [isWinning, setIsWinning] = useState<boolean>(false);

  return (
    <PrincipalContainerStyle>
      <AppBarTop darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" component="h4">
            <PrimaryTextColor>
              <FormattedMessage
                id="app_title"
                defaultMessage="Hangman Skeleton Version"
              />
            </PrimaryTextColor>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Hangman
            nbFault={nbFault}
            darkMode={props.darkMode}
            lettersGuest={lettersGuest}
            playerStart={playerStart}
            setIsWinning={setIsWinning}
          />
        </Grid>
        <Grid container item justifyContent="center" xs={12}>
          {nbFault >= 7 ? (
            <Grid item>
              <Alert
                variant="filled"
                severity="warning"
                style={{ fontWeight: "bold" }}
              >
                <FormattedMessage
                  id="lose_message"
                  defaultMessage="Game over!"
                  values={{ word: word }}
                />
              </Alert>
            </Grid>
          ) : (
            <></>
          )}
          {isWinning ? (
            <Grid item>
              <Alert
                variant="filled"
                severity="success"
                style={{ fontWeight: "bold" }}
              >
                <FormattedMessage
                  id="winning_message"
                  defaultMessage="You win!"
                />
              </Alert>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Grid item xl={5}>
            <Keyboard
              nbFault={nbFault}
              setNbFault={setNbFault}
              lettersGuest={lettersGuest}
              setLettersGuest={setLettersGuest}
              setPlayerStart={setPlayerStart}
              isDisabled={!playerStart}
              isWinning={isWinning}
            />
          </Grid>
        </Grid>
      </Grid>
      <AppBarBottom playerStart={playerStart} setPlayerStart={setPlayerStart} />
    </PrincipalContainerStyle>
  );
};

export default PrincipalContainer;
