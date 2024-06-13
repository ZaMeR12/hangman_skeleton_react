import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import { useContext, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { LanguageContext } from "../../contexts/internationalization.context";
import { ApiContext } from "../../contexts/api.context";

interface IAppBarBottomProps {
  playerStart: boolean;
  setPlayerStart(started: boolean): void;
}

const AppBarBottom = (props: IAppBarBottomProps) => {
  const { locale } = useContext(LanguageContext);

  const { getEnglishWord, getFrenchWord, isApiRequestLoad } =
    useContext(ApiContext);

  const onClickRetry = () => {
    window.location.reload();
  };

  const onClickPlay = () => {
    if (locale == "en") {
      getEnglishWord();
    } else if (locale == "fr") {
      getFrenchWord();
    }
  };

  useEffect(() => {
    if (isApiRequestLoad) {
      props.setPlayerStart(true);
    }
  }, [isApiRequestLoad]);

  return (
    <AppBar position="fixed" color="secondary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Grid container justifyContent="center">
          <Grid item>
            {props.playerStart ? (
              <Button
                color="inherit"
                onClick={onClickRetry}
                style={{ padding: 20 }}
              >
                <FormattedMessage
                  id="button_label_retry"
                  defaultMessage="Retry"
                />
              </Button>
            ) : (
              <Button
                color="inherit"
                onClick={onClickPlay}
                style={{ padding: 20 }}
              >
                <FormattedMessage
                  id="button_label_play"
                  defaultMessage="Play"
                />
              </Button>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarBottom;
