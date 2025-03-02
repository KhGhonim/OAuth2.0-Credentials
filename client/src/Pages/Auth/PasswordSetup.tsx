import { useSearchParams } from "react-router";
import usePasswordSetup from "../../Hooks/usePasswordSetup";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function PasswordSetup() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("ID");
  const { HandleChange, Form, IsLoading, HandleSubmit } = usePasswordSetup(
    id || ""
  );
  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowConfirmationPassword, setShowConfirmationPassword] =
    useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <Toaster />
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Set Up Your Password
          </h1>
          <p className="text-gray-600">
            Secure your account by setting up a password
          </p>
        </div>

        <form onSubmit={HandleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block text-gray-700">New Password</label>
            <input
              type={ShowPassword ? "text" : "password"}
              name="password"
              defaultValue={Form.password}
              onChange={HandleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your new password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!ShowPassword)}
              className="absolute cursor-pointer top-1/2 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {ShowPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="relative">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              name="confirmPassword"
              defaultValue={Form.confirmPassword}
              onChange={HandleChange}
              type={ShowConfirmationPassword ? "text" : "password"}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Confirm your new password"
            />
            <button
              type="button"
              onClick={() =>
                setShowConfirmationPassword(!ShowConfirmationPassword)
              }
              className="absolute cursor-pointer top-1/2 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {ShowConfirmationPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            disabled={IsLoading}
            className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition"
          >
            {IsLoading ? "Loading..." : "Set Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordSetup;
