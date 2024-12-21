import { motion } from "framer-motion";
import LoginSection from "../components/LoginSection";
import SideCard from "../components/SideCard";
import Logo from "../assets/logo.svg";

export const SignIn = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-center h-full min-h-screen w-full bg-white"
    >
      {/* Left Section */}
      <div className="flex-1 hidden lg:flex justify-center items-center relative w-full h-full min-h-screen border border-transparent border-r-neutral-200">
        <img
          src={Logo}
          alt="Logo"
          width={300}
          height={300}
          className="opacity-20 bottom-0 left-0 absolute"
        />
        <SideCard />
      </div>

      {/* Right Section */}
      <div className="container flex-1 flex flex-col justify-center items-center min-h-screen gap-8 p-4">
        <div className="border rounded-xl flex flex-col items-center w-full h-[600px] shadow-sm max-w-xl">
          {/* Header Section */}
          <div className="px-4 py-8 w-full flex flex-col items-center justify-center gap-6 border-b">
            <div className="flex flex-col items-center">
              <div className="text-3xl gap-3 flex items-center">
                <img src={Logo} alt="Logo" width={40} height={40} />
                CodeAnt AI
              </div>
            </div>
            <div className="text-2xl lg:text-3xl font-semibold">
              Welcome to CodeAnt AI
            </div>
          </div>

          {/* Login Section */}
          <LoginSection />
        </div>

        <div className="text-sm">
          By signing up you agree to the{" "}
          <a href="/privacy-policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </motion.div>
  );
};
