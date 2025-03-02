import { FaSpinner } from "react-icons/fa";
import useRegister from "../../Hooks/useRegister";
import { useState } from "react";

function RegisterForm() {
  const { HandleChange, Form, IsLoading, HandleSubmit } = useRegister();
  const [ShowPassword, setShowPassword] = useState(false);
  return (
    <form onSubmit={HandleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="fullName"
          className="w-full mt-1 p-2 border outline-none border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your name"
          defaultValue={Form.fullName}
          onChange={HandleChange}
        />
      </div>

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
          name="password"
          type={ShowPassword ? "text" : "password"}
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
        disabled={IsLoading}
        type="submit"
        className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition"
      >
        {IsLoading ? (
          <div className="flex w-full h-full items-center justify-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          "Register"
        )}
      </button>
    </form>
  );
}

export default RegisterForm;
