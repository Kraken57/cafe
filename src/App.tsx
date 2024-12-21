import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { SignIn } from "./pages/SignIn";
import { LoadingScreen } from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <Routes>
            <Route path="/" element={<SignIn />} />
          </Routes>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;
