import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          background: lightgray;
          margin: 0;
          padding: 0;
          width: 100vw;
          height: 100vh;
        }
      `}
    />
  );
}
