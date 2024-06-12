import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { LanguageContext } from "../contexts/internationalization.context";
import { useContext } from "react";
import { FormattedMessage } from "react-intl";

interface ISwitchDarkModeProps {
  darkMode: boolean;
  setDarkMode(theme: boolean): void;
}

const SwitchDarkMode = (props: ISwitchDarkModeProps) => {
  const onChangeDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setDarkMode(!props.darkMode);
  };

  return (
    <FormGroup style={{ alignContent: "end" }}>
      <FormControlLabel
        control={
          <Switch
            checked={props.darkMode}
            onChange={onChangeDarkMode}
            color="secondary"
          />
        }
        label={<FormattedMessage id="darkmode" defaultMessage="Darkmode" />}
      />
    </FormGroup>
  );
};

export default SwitchDarkMode;
