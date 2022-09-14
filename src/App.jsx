import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import ChooseAfatar from "./pages/ChooseAfatar";
import { handleGetProfileData } from "./redux/features/profileSlice";

function App() {
  const isLogin = false;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.value.user);
  console.log("user value: ", user);
  useEffect(() => {
    const token = localStorage.getItem("token");
    token && dispatch(handleGetProfileData(token));
  }, []);
  return (
    <Routes>
      {user?.status === "online" ? (
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
