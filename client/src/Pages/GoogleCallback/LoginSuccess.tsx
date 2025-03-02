import { useEffect } from "react";
import { BiCheckCircle } from "react-icons/bi";

function LoginSuccess() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.close();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
        <div className="flex justify-center">
          <BiCheckCircle className="w-20 h-20 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Login Successful!</h1>
        <p className="text-gray-600">
          Welcome back! You'll be redirected to your dashboard in a moment...
        </p>
      </div>
    </div>
  );
}

export default LoginSuccess;
