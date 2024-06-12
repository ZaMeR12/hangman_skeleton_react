import { AppBar, Button, Grid, Menu, MenuItem, Toolbar } from "@mui/material";
import SwitchDarkMode from "../switchDarMode.component";
import { useState } from "react";
import { PrimaryTextColor } from "../../styles/base.style";

interface IAppBarTopProps {
  darkMode: boolean;
  setDarkMode(theme: boolean): void;
}

const AppBarTop = (props: IAppBarTopProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="inherit"
            >
              Lang
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>English</MenuItem>
              <MenuItem onClick={handleClose}>French</MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={11}>
            <SwitchDarkMode
              darkMode={props.darkMode}
              setDarkMode={props.setDarkMode}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarTop;
