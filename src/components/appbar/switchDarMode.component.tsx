import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { FormattedMessage } from "react-intl";

/**
 * Interface of SwitchDarkMode component's props.
 *
 * @interface ISwitchDarkModeProps
 */
interface ISwitchDarkModeProps {
  darkMode: boolean;
  setDarkMode(theme: boolean): void;
}

/**
 * React component to display and interact with the state of the theme. (dark / light)
 *
 * @param {ISwitchDarkModeProps} props Component's props.
 * @return {JSX.Element}  React component.
 */
const SwitchDarkMode = (props: ISwitchDarkModeProps): JSX.Element => {
  const onChangeDarkMode = () => {
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
