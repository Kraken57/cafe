import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInButton } from "./LoginButton";
import GitLab from "../assets/gitlab.svg";
import Key from "../assets/key.svg";
import GitHub from "../assets/github.svg";
import Bitbucket from "../assets/bitbucket.svg";
import Azure from "../assets/azure.svg";

const LoginSection = () => {
  const [mode, setMode] = useState<"saas" | "self-hosted">("saas");
    const navigate = useNavigate();

  const handleSignIn = (provider: string) => {
    navigate("/repositories");
    console.log(`Sign in with ${provider}`);
  };

  return (
    <div className="bg-white flex items-center justify-center p-4">
      {/* Removed min-h-screen to avoid full-height white space */}
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white rounded-2xl p-1">
          <div className="flex mb-8 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setMode("saas")}
              className={`flex-1 py-2 px-4 rounded-md transition-all ${
                mode === "saas"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              SAAS
            </button>
            <button
              onClick={() => setMode("self-hosted")}
              className={`flex-1 py-2 px-4 rounded-md transition-all ${
                mode === "self-hosted"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Self Hosted
            </button>
          </div>

          <div className="space-y-3">
            {mode === "saas" ? (
              <>
                <SignInButton
                  icon={<img src={GitHub} alt="Github" className="w-5 h-5" />}
                  label="Sign in with Github"
                  onClick={() => handleSignIn("Github")}
                />
                <SignInButton
                  icon={
                    <img src={Bitbucket} alt="Bitbucket" className="w-5 h-5" />
                  }
                  label="Sign in with Bitbucket"
                  onClick={() => handleSignIn("Bitbucket")}
                />
                <SignInButton
                  icon={
                    <img src={Azure} alt="Azure DevOps" className="w-5 h-5" />
                  }
                  label="Sign in with Azure DevOps"
                  onClick={() => handleSignIn("Azure DevOps")}
                />
                <SignInButton
                  icon={<img src={GitLab} alt="GitLab" className="w-5 h-5" />}
                  label="Sign in with GitLab"
                  onClick={() => handleSignIn("GitLab")}
                />
              </>
            ) : (
              <>
                <SignInButton
                  icon={
                    <img
                      src={GitLab}
                      alt="Self Hosted GitLab"
                      className="w-5 h-5"
                    />
                  }
                  label="Self Hosted GitLab"
                  onClick={() => handleSignIn("Self Hosted GitLab")}
                />
                <SignInButton
                  icon={<img src={Key} alt="SSO" className="w-5 h-5" />}
                  label="Sign in with SSO"
                  onClick={() => handleSignIn("SSO")}
                />
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginSection;
