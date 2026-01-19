import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <BrowserRouter>
      {/* Global components */}
      <Toaster />

      {/* Routes */}
      <Routes>
        <Route path="/test" element={<h1>Test Page</h1>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
