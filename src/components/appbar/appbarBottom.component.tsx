import { AppBar, Button, Grid, Toolbar } from "@mui/material";

const AppBarBottom = () => {
  const onClickRetry = (event: React.ChangeEvent<HTMLInputElement>) => {
    window.location.reload();
  };

  return (
    <AppBar position="fixed" color="secondary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Grid container justifyContent="center">
          <Grid item>
            <Button color="inherit" onClick={onClickRetry}>
              Retry
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarBottom;
