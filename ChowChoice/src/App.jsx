import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Restauranwrtmeal from "./Pages/Restauranwrtmeal";
import Header from "./Components/Header";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/restaurantwrtmeal" element=<Restauranwrtmeal /> />
          <Route path="/signin" element=<Signin /> />
          <Route path="/signup" element=<Signup /> />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
