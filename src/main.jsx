import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { theme } from "./configs/theme.config.js";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Provider } from "react-redux";
import store from "../store/store.js";
import "mantine-react-table/styles.css";
import QueryProvider from "./configs/query.config.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <QueryProvider>
          <App />
        </QueryProvider>
      </MantineProvider>
    </Provider>
  </StrictMode>
);
