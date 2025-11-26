import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Компонент-обертка для Redux
import { store } from "./store/store.ts";
import App from "./App/App.tsx";
import "./CSS/index.css";

const rootElement = document.getElementById("root");
if (!rootElement)
  throw new Error(
    "Root element not found"
  ); /* если нет элемента выдает ошибку */

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
