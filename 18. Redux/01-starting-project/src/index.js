// import React from "react";
// import ReactDOM from "react-dom";

// import { Provider } from "react-redux";

// import "./index.css";
// import App from "./App";

// import store from "./store/index";

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

import fetch from "node-fetch";
//const fetch = require('node-fetch');

const postID = "5122874051130134"; // 'https://www.facebook.com/LienMinhHuyenThoai/posts/4387428904674656'
const accessToken = ""; // find 'EAAA' at 'https://m.facebook.com/composer/ocelot/async_loader/?publisher=feed'
const url =
  "https://graph.facebook.com/" +
  postID +
  "/comments?fields=message&access_token=" +
  accessToken;
const analyze_comments = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((results) => {
      if (results) {
        const comments = results.data;
        comments.forEach((comment) => {
          const message = comment.message.trim();
          if (message.length > 0 && message.includes("LOL")) {
            let startIndex = message.indexOf("LOL");
            let code = message.substr(startIndex, 13);
            console.log(code);
          }
        });
        if (typeof results.paging.next !== "undefined") {
          analyze_comments(results.paging.next);
        } else {
          console.log("Done!");
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
analyze_comments(url);
