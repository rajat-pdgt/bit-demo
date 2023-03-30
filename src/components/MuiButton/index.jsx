import React from "react";
import { Button as MuiButton } from "@mui/material";

const defaultMessage = "This is a customised MUI button!";

function Button({ message = defaultMessage, children, className, ...rest }) {
  function handleClick() {
    alert(message);
  }

  return (
    <MuiButton classes={className} onClick={handleClick} {...rest}>
      {children}
    </MuiButton>
  );
}

export default Button;
