import { Button } from "@mui/material";
import { produce } from "immer";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../contexts/api.context";

/**
 * Interface of LetterButton component's props.
 *
 * @interface ILetterButtonProps
 */
interface ILetterButtonProps {
  nbFault: number;
  setNbFault(nbFault: number): void;
  lettersGuest: string[];
  setLettersGuest(lettersGuest: string[]): void;
  letter: string;
  isDisabled: boolean;
  isWinning: boolean;
}

/**
 * React component to display and mange the input of a specific letter by the player.
 *
 * @param {ILetterButtonProps} props Component'props.
 * @return {JSX.Element} React component.
 */
const LetterButton = (props: ILetterButtonProps): JSX.Element => {
  const [isDisabled, setIsDisabled] = useState<boolean>(props.isDisabled);
  const { word } = useContext(ApiContext);

  useEffect(() => {
    if (props.nbFault >= 7) {
      setIsDisabled(true);
    }
  }, [props.nbFault]);

  useEffect(() => {
    setIsDisabled(props.isDisabled);
  }, [props.isDisabled]);

  useEffect(() => {
    setIsDisabled(true);
  }, [props.isWinning]);

  /**
   * Verify if the letter of the component exist in the word to guest.
   * If it's the case, that it's added to the array of letters guested,
   * otherwise it's increase the count of faults.
   */
  const onClickTry = () => {
    var letterExist: boolean = false;
    for (let index = 0; index < word.length; index++) {
      if (word.charAt(index) == props.letter) {
        props.setLettersGuest(
          produce(props.lettersGuest, (draft) => {
            draft.push(props.letter);
          })
        );
        letterExist = true;
      }
    }
    if (!letterExist && props.nbFault < 7) {
      props.setNbFault(props.nbFault + 1);
    }
    setIsDisabled(true);
  };

  return (
    <Button
      variant="contained"
      onClick={onClickTry}
      disabled={isDisabled}
      style={
        isDisabled ? { backgroundColor: "var(--button-background-color)" } : {}
      }
    >
      {props.letter}
    </Button>
  );
};

export default LetterButton;
