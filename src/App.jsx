import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/learnHowToUse";
import Cursor from "./Components/Cursor";
import FirstStep from "./Steps/FirstStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";
import FourthStep from "./Steps/FourthStep";
import FifthStep from "./Steps/FifthStep";
import SixthStep from "./Steps/SixthStep";
import Nav from "./Components/Nav";
import SideStep from "./Steps/SideStep";

function App() {
  return (
    <Router classname="">
      <Nav />
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/firstStep" element={<FirstStep />} />
        <Route path="/2nd-Step" element={<SecondStep />} />
        <Route path="/3rd-Step" element={<ThirdStep />} />
        <Route path="/side-Step" element={<SideStep />} />
        <Route path="/4th-Step" element={<FourthStep />} />
        <Route path="/5th-Step" element={<FifthStep />} />
        <Route path="/6th-Step" element={<SixthStep />} />
      </Routes>
    </Router>
  );
}

export default App;
