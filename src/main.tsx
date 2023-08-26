import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { wordsSlice } from "./api/apiSlice.ts";
import "./index.scss";
import "./tailwind/main.scss";

const store = configureStore({
  reducer: {
    [wordsSlice.reducerPath]: wordsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(wordsSlice.middleware),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
