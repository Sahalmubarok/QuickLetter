import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import DetailLetter from "./pages/DetailLetter";

const App = () => {
  return (
    // <div>test</div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/detailletter" element={<DetailLetter />} />
    </Routes>
  );
};

export default App;
