import { AppBar, Button, Grid, Menu, MenuItem, Toolbar } from "@mui/material";
import SwitchDarkMode from "./switchDarMode.component";
import { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import { LanguageContext } from "../../contexts/internationalization.context";

/**
 * Props interface for the AppBarTop component.
 *
 * @interface IAppBarTopProps
 */
interface IAppBarTopProps {
  darkMode: boolean;
  setDarkMode(theme: boolean): void;
}

/**
 * React component for the appbar at the top of the application.
 *
 * @param {IAppBarTopProps} props Component's props.
 * @return {JSX.Element} React component.
 */
const AppBarTop = (props: IAppBarTopProps): JSX.Element => {
  const { setLanguage } = useContext(LanguageContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /**
   * Handle the click for the menu of language options.
   * @param event Event of a button.
   */
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Close the menu of language.
   *
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * Close the English language's option, switch to english and reload the application
   *
   * Note: The reload is needed to be able to handle the switch of language for words generator.
   *
   */
  const handleCloseEnglish = () => {
    setAnchorEl(null);
    setLanguage(true);
    window.location.reload();
  };

  /**
   * Close the French language's option, switch to french and reload the application
   *
   * Note: The reload is needed to be able to handle the switch of language for words generator.
   *
   */
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
