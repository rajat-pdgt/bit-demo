import React from "react";
import Button from "./index";

export const MuiButtonVariants = () => {
  const variants = ["contained", "outlined", "text"];

  return (
    <div className="vertical">
      {variants.map((v) => (
        <div key={v}>
          <Button variant={v}>MUI Button {v} variant</Button>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};
