import { Button } from "@mui/material";
import { produce } from "immer";
import { useEffect, useState } from "react";

interface ILetterButtonProps {
  nbFault: number;
  setNbFault(nbFault: number): void;
  lettersGuest: string[];
  setLettersGuest(lettersGuest: string[]): void;
  setPlayerStart(isStarted: boolean): void;
  word: string;
  letter: string;
}

const LetterButton = (props: ILetterButtonProps) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (props.nbFault >= 7) {
      setIsDisabled(true);
    }
  }, [props.nbFault]);

  const onClickTry = (event: React.ChangeEvent<HTMLInputElement>) => {
    var letterExist: boolean = false;
    for (let index = 0; index < props.word.length; index++) {
      if (props.word.charAt(index) == props.letter) {
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
    props.setPlayerStart(true);
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
