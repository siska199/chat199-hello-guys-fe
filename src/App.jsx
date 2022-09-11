import Chat from "./pages/Chat";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import ChooseAfatar from "./pages/ChooseAfatar";
function App() {
  const isLogin = false;
  return (
    <Routes>
      <Route path="/" element={<ChooseAfatar />} />

      {/* {isLogin ? (
        <Route path="/" elemnt={<Chat />} />
      ) : (
        <Route path="/" element={<Login />} />
      )} */}
    </Routes>
  );
}

export default App;
