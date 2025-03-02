import { BsArrowLeft } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { FiAlertOctagon } from "react-icons/fi";

function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        <div className="relative">
          {/* Abstract background pattern */}
          <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-indigo-500 to-purple-400"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
          </div>

          {/* Content */}
          <div className="relative">
            <div className="flex justify-center">
              <FiAlertOctagon className="h-24 w-24 text-indigo-600 mb-4" />
            </div>
            <h1 className="text-7xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-2xl font-semibold text-gray-700 mb-2">
              Page not found
            </p>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. Don't
              worry, you can find plenty of other things on our homepage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                <BsArrowLeft className="w-4 h-4 mr-2" />
                Back to Homepage
              </a>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Visible on mobile */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-4 h-16">
          <a
            href="#"
            className="flex flex-col items-center justify-center text-indigo-600"
          >
            <FaHome className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600"
          >
            <FaSearch className="h-6 w-6" />
            <span className="text-xs mt-1">Search</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600"
          >
            <CiSettings className="h-6 w-6" />
            <span className="text-xs mt-1">Settings</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600"
          >
            <FaUser className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default ErrorPage;
