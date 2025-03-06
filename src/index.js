import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { create } from "jss";
import { jssPreset, StylesProvider } from "@material-ui/core/styles";

// Extract nonce from meta tag
const nonce = document
  .querySelector("meta[http-equiv='Content-Security-Policy']")
  ?.content.match(/'nonce-([^']+)'/)?.[1];


const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("mui-insertion-point"),
  nonce,
  // Fix CSP issue by preventing MUI from injecting inline styles
  createGenerateId: () => (rule) => `mui-${rule.key}`,
});


// Apply nonce to all styles manually (fix CSP issue)
const addNonceToStyles = () => {
  document.querySelectorAll("style").forEach((style) => {
    if (!style.hasAttribute("nonce")) {
      style.setAttribute("nonce", nonce);
    }
  });
};

// Call it immediately & after React renders
addNonceToStyles();
const observer = new MutationObserver(addNonceToStyles);
observer.observe(document.head, { childList: true, subtree: true });

ReactDOM.render(
  <StylesProvider jss={jss}>
    <App />
  </StylesProvider>,
  document.getElementById("root")
);
