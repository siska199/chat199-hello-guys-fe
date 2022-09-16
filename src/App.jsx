import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chat from "./pages/Chat";
import Auth from "./pages/Auth";
import ChooseAfatar from "./pages/ChooseAfatar";
import { handleGetProfileData } from "./redux/features/profileSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.value.user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && dispatch(handleGetProfileData());
  }, [dispatch]);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<Chat />} />
          <Route path="choose-avatar" element={<ChooseAfatar />} />
        </>
      ) : (
        <Route path="/" element={<Auth />} />
      )}
    </Routes>
  );
}

export default App;
