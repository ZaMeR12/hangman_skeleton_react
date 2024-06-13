import { AppBar, Button, Grid, Menu, MenuItem, Toolbar } from "@mui/material";
import SwitchDarkMode from "../switchDarMode.component";
import { useContext, useState } from "react";
import { PrimaryTextColor } from "../../styles/base.style";
import { FormattedMessage } from "react-intl";
import { LanguageContext } from "../../contexts/internationalization.context";

interface IAppBarTopProps {
  darkMode: boolean;
  setDarkMode(theme: boolean): void;
}

const AppBarTop = (props: IAppBarTopProps) => {
  const { setLanguage } = useContext(LanguageContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseEnglish = () => {
    setAnchorEl(null);
    setLanguage(true);
    window.location.reload();
  };
  const handleCloseFrench = () => {
    setAnchorEl(null);
    setLanguage(false);
    window.location.reload();
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
              aria-role="button"
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
              aria-role="menu"
            >
              <MenuItem onClick={handleCloseEnglish}>
                <FormattedMessage id="lang_english" defaultMessage="English" />
              </MenuItem>
              <MenuItem onClick={handleCloseFrench}>
                <FormattedMessage id="lang_french" defaultMessage="French" />
              </MenuItem>
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
