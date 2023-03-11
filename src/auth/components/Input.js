import React, { useEffect, useReducer } from "react";
import { validate } from "../../shared/util/validate";
import { TextField } from "@mui/material";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    }

    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }

    default: {
      return state;
    }
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(reducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || true,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const inputChangeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validators: props.validators,
    });
  };

  const focusHandler = (event) => {
    dispatch({
      type: "TOUCH",
    });
  };

  return (
    <TextField
      type={props.type}
      value={inputState.value}
      label={props.label}
      id={props.id}
      error={!inputState.isValid}
      helperText={!inputState.isValid && props.errorText}
      margin="normal"
      onChange={inputChangeHandler}
      onBlur={focusHandler}
    />
  );
};

export default Input;
