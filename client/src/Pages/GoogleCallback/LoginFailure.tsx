import { useEffect } from "react";
import { BiXCircle } from "react-icons/bi";

function LoginFailure() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.close();
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
        <div className="flex justify-center">
          <BiXCircle className="w-20 h-20 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Login Failed</h1>
        <p className="text-gray-600">
          We couldn't sign you in with Google. Please try again or contact
          support if the problem persists.
        </p>
      </div>
    </div>
  );
}

export default LoginFailure;
