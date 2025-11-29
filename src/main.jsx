import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { theme } from "./configs/theme.config.js";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";
import QueryProvider from "./configs/query.config.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="app-root">
      <div className="rotate-overlay">
        <div className="rotate-container">
          <p className="rotate-message">
            Please rotate your device for the best experience
          </p>
          <img src="/assets/200w.gif" alt="rotate"/>
        </div>
      </div>
      <div className="app-content">  
      <MantineProvider theme={theme}>
        <QueryProvider>
          <App />
        </QueryProvider>
      </MantineProvider>
    </div>
    </div>
  </StrictMode>
);