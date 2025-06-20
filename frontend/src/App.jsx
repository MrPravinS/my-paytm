import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SendMoney from "./pages/SendMoney";
import DashBoard from "./pages/DashBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/dashboard" element={<DashBoard/>} />
          <Route path="/send" element={<SendMoney/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
