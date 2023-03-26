import react from "react";
import reactDom from "react-dom/client";
import SignUpForm from "./components/SignUpForm";

const App = () => {
  return (
    <>
      <SignUpForm />
    </>
  );
};

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<App />);
