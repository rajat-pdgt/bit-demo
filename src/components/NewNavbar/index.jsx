import React from "react";

import Button from "@rajat_sharma/sample_bit.button";
import "./index.css";

export default function Navbar() {
  return (
    <nav>
      <div>Title</div>
      <div>
        <Button sampleText="First Link" />
        <Button sampleText="Second Link" />
        <Button sampleText="Last Link" />
      </div>
    </nav>
  );
}
