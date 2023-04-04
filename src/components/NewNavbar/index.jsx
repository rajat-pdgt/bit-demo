import React from "react";

import Button from "@rajat_sharma/sample_bit.mui-button";
import "./index.css";

export default function Navbar() {
  return (
    <nav>
      <div>Title</div>
      <div>
        <Button>First Link</Button>
        <Button>Second Link</Button>
        <Button>Third Link</Button>
      </div>
    </nav>
  );
}
