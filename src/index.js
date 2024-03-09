import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { ourRouter } from "./router/router";
import { store } from "./store/index";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const ourClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={ourClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <RouterProvider router={ourRouter} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
