import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import { FormattedMessage } from "react-intl";

interface IAppBarBottomProps {
  playerStart: boolean;
  setPlayerStart(started: boolean): void;
}

const AppBarBottom = (props: IAppBarBottomProps) => {
  const onClickRetry = (event: React.ChangeEvent<HTMLInputElement>) => {
    window.location.reload();
  };

  const onClickPlay = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setPlayerStart(true);
  };

  return (
    <AppBar position="fixed" color="secondary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Grid container justifyContent="center">
          <Grid item>
            {props.playerStart ? (
              <Button color="inherit" aria-role="button" onClick={onClickRetry}>
                <FormattedMessage
                  id="button_label_retry"
                  defaultMessage="Retry"
                />
              </Button>
            ) : (
              <Button color="inherit" aria-role="button" onClick={onClickPlay}>
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
