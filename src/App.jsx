import Detail from "./components/detail/detail";
import Chat from "./components/chat/chat";
import List from "./components/list/list";
import Notification from "./components/notification/notification";
import Login from "./components/login/login";
import { useEffect } from "react";
import { auth } from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      {currentUser ? (
        <>
        <List />
          {chatId && <Chat />}
          {chatId && <Detail />}
          {/* {<Chat />}
          {<Detail />} */}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
