import { FaSpinner } from "react-icons/fa";
import useForgetPW from "../../Hooks/useForgetPW";
import { Toaster } from "react-hot-toast";

function ForgetPw() {
  const { HandleChange, Form, IsLoading, HandleSubmit } = useForgetPW();
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <Toaster />
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Forgot Password
          </h1>
          <p className="text-gray-600">
            Enter your email to reset your password
          </p>
        </div>

        <form onSubmit={HandleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={Form.email}
              onChange={HandleChange}
              className="w-full mt-1 p-2 border outline-none border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            disabled={IsLoading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition"
          >
            {IsLoading ? (
              <div className="flex w-full h-full items-center justify-center">
                <FaSpinner className="animate-spin" />
              </div>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Remember your password?{" "}
          <a href="/login" className="text-indigo-600 hover:text-indigo-500">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForgetPw;
