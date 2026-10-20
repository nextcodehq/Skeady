import "./env";

// WebView標準の右クリックメニューを無効化する
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
