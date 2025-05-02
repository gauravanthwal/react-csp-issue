import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { StylesProvider, jssPreset } from "@material-ui/core/styles";
// import { create } from "jss";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Get nonce from window (generated in index.html)
const nonce = window.__CSP_NONCE__;
// Create Emotion cache with nonce
const cache = createCache({
  key: "mui",
  nonce, // Attach nonce to Emotion's injected styles
});

// // Extract nonce from meta tag
// const nonce = document
//   .querySelector("meta[http-equiv='Content-Security-Policy']")
//   ?.content.match(/'nonce-([^']+)'/)?.[1];

// const jss = create({
//   ...jssPreset(),
//   insertionPoint: document.getElementById("mui-insertion-point"),
//   nonce,
//   // Fix CSP issue by preventing MUI from injecting inline styles
//   createGenerateId: () => (rule) => `mui-${rule.key}`,
// });

// // Apply nonce to all styles manually (fix CSP issue)
// const addNonceToStyles = () => {
//   document.querySelectorAll("style").forEach((style) => {
//     if (!style.hasAttribute("nonce")) {
//       style.setAttribute("nonce", nonce);
//     }
//   });
// };

// // Call it immediately & after React renders
// addNonceToStyles();
// const observer = new MutationObserver(addNonceToStyles);
// observer.observe(document.head, { childList: true, subtree: true });

ReactDOM.render(
    <CacheProvider value={cache}>
      <App nonce={nonce} />
    </CacheProvider>,
  document.getElementById("root")
);
