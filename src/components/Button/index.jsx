import React from "react";
import "./index.css";

export default function Button({ sampleText = "Default Text" }) {
  return (
    <button type="submit" className="sample-button">
      {sampleText}
    </button>
  );
}
