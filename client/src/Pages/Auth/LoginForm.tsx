import { FaSpinner } from "react-icons/fa";
import useLoginIn from "../../Hooks/useLoginIn";
import { useState } from "react";

function LoginForm() {
  const { Form, HandleChange, IsLoading, HandleSubmit } = useLoginIn();
  const [ShowPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={HandleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full mt-1 p-2 border outline-none border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your email"
          defaultValue={Form.email}
          onChange={HandleChange}
        />
      </div>

      <div className="relative">
        <label className="block text-gray-700">Password</label>
        <input
          type={ShowPassword ? "text" : "password"}
          name="password"
          className="w-full mt-1 p-2 border outline-none border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your password"
          defaultValue={Form.password}
          onChange={HandleChange}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!ShowPassword)}
          className="absolute cursor-pointer top-1/2 right-0 pr-3 flex items-center text-sm leading-5"
        >
          {ShowPassword ? "Hide" : "Show"}
        </button>
      </div>

      <button
        type="submit"
        disabled={IsLoading}
        className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition"
      >
        {IsLoading ? (
          <div className="flex w-full h-full items-center justify-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          "Sign in"
        )}
      </button>
    </form>
  );
}

export default LoginForm;
