import GoogleButton from "react-google-button";
import LoginForm from "./LoginForm";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router";
import { FetchUserBeforeLogin } from "../../Hooks/FetchUserBeforeLogin";
import { GoogleAPI, SERVER_URL } from "../../Keys/keys";

function Login() {
  const { HandleFetchingUserData } = FetchUserBeforeLogin();
  const HandleGoogleVerification = () => {
    const url = `${SERVER_URL}${GoogleAPI}`;
    const win = window.open(url, "_blank", "width=500, height=600");
    if (!win) {
      console.error("Popup blocked or failed to open.");
      return;
    }

    if (win) {
      const timer = setInterval(() => {
        if (win.closed) {
          clearInterval(timer);
          HandleFetchingUserData();
        }
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <Toaster />
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to continue your journey</p>
        </div>

        <div className="space-y-6">
          <div className="w-full flex justify-center">
            <GoogleButton onClick={HandleGoogleVerification} />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Protected by Google OAuth
              </span>
            </div>
          </div>
        </div>

        <LoginForm />

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-600 hover:text-indigo-500">
            Sign Up
          </a>
        </div>

        <div className="flex items-center justify-center">
          <Link
            to="/forget-password"
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </Link>
        </div>

        <div className="text-center text-sm text-gray-600">
          By continuing, you agree to our{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
