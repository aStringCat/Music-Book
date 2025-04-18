import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";

import App from "./App";

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </StrictMode>
);
