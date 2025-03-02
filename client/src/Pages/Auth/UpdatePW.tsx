import { useSearchParams } from "react-router";
import useUpdatePW from "../../Hooks/UpdatePW";
import { useState } from "react";

function UpdatePW() {
  const [searchParams] = useSearchParams();
  const Token = searchParams.get("token");
  const Email = searchParams.get("email");
  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowConfirmationPassword, setShowConfirmationPassword] =
    useState(false);

  const { HandleChange, Form, IsLoading, HandleSubmit } = useUpdatePW(
    Token || "",
    Email || ""
  );
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Reset Your Password
          </h1>
          <p className="text-gray-600">Enter your new password below</p>
        </div>

        <form onSubmit={HandleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block text-gray-700">New Password</label>
            <input
              name="password"
              onChange={HandleChange}
              defaultValue={Form.password}
              type={ShowPassword ? "text" : "password"}
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
              onChange={HandleChange}
              defaultValue={Form.confirmPassword}
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
              {ShowPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            disabled={IsLoading}
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition"
          >
            {IsLoading ? "Loading..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdatePW;
