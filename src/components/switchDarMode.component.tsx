import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { PrimaryTextColor } from "../styles/base.style";

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
        label={"Darkmode"}
      />
    </FormGroup>
  );
};

export default SwitchDarkMode;
