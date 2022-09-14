import Chat from "./pages/Chat";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import ChooseAfatar from "./pages/ChooseAfatar";
function App() {
  const isLogin = true;
  return (
    <Routes>
      {isLogin ? (
        <>
          <Route path="/" element={<Chat />} />
          <Route path="/choose-avatar" element={<ChooseAfatar />} />
        </>
      ) : (
        <Route path="/" element={<Login />} />
      )}
    </Routes>
  );
}

export default App;
