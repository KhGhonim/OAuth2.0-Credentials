import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ReactDOM from "react-dom/client";
import Login from "./Pages/Auth/Login.tsx";
import Home from "./Pages/Home/Home.tsx";
import ProtectedRoutes from "./Redux/AuthLayout/AuthLayout.tsx";
import ErrorPage from "./Pages/Error/Error.tsx";
import LoginFailure from "./Pages/GoogleCallback/LoginFailure.tsx";
import LoginSuccess from "./Pages/GoogleCallback/LoginSuccess.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/Store/Store.ts";
import { PersistGate } from "redux-persist/integration/react";
import Register from "./Pages/Auth/Register.tsx";
import ForgetPw from "./Pages/Auth/ForgetPw.tsx";
import PasswordSetup from "./Pages/Auth/PasswordSetup.tsx";
import UpdatePW from "./Pages/Auth/UpdatePW.tsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPw />} />
          <Route path="/set-password" element={<PasswordSetup />} />
          <Route path="/update-password" element={<UpdatePW />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login/failure" element={<LoginFailure />} />
          <Route path="/login/success" element={<LoginSuccess />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
