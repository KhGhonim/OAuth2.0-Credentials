import { BiSearch, BiShield } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaHome, FaUser } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { FiZap } from "react-icons/fi";
import { GiSparkles } from "react-icons/gi";
import { useAppSelector, useAppDispatch } from "../../Hooks/ReduxHooks";
import { LogOut } from "../../Redux/Slicers/UserSlicer";
import useLogOut from "../../Hooks/useLogOut";
import { Toaster } from "react-hot-toast";

function Home() {
  const { email, name, profile } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { HandleLogOut } = useLogOut();

  const HandleLogout = () => {
    HandleLogOut();
    dispatch(LogOut());
  
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Toaster />
      {/* Top Navigation - Visible on larger screens */}
      <nav className="hidden sm:block bg-white border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">
                Platform
              </span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Search
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Settings
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Profile
              </a>
              <div
                onClick={HandleLogout}
                className="text-gray-700 cursor-pointer hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="sm:pt-16 pb-16 sm:pb-0">
        {" "}
        {/* Add padding top for desktop navbar */}
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 py-24 sm:py-32">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Welcome to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Our Platform
                  </span>
                </h1>

                <div className="space-y-2">
                  <p>Email: {email}</p>
                  <p>Name: {name}</p>
                  {profile && (
                    <img
                      src={profile}
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                  Experience the next generation of web development. Build
                  faster, scale better, and create amazing experiences for your
                  users.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center gap-2">
                    Get Started <BsArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <FiZap className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  Lightning Fast
                </h3>
                <p className="mt-2 text-gray-600">
                  Built with performance in mind, ensuring your applications run
                  at peak efficiency.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <BiShield className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  Secure by Default
                </h3>
                <p className="mt-2 text-gray-600">
                  Enterprise-grade security features to keep your data and users
                  protected.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <GiSparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  Modern Features
                </h3>
                <p className="mt-2 text-gray-600">
                  Access to the latest web technologies and development tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

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
            <BiSearch className="h-6 w-6" />
            <span className="text-xs mt-1">Search</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600"
          >
            <FcSettings className="h-6 w-6" />
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

export default Home;
