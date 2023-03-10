import React, { useReducer } from "react";
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
    value: "",
    isTouched: false,
    isValid: true,
  });

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
