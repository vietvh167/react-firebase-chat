import Detail from "./components/detail/detail";
import Chat from "./components/chat/chat";
import List from "./components/list/list";
import Notification from "./components/notification/notification";
import Login from "./components/login/login";
import { useEffect } from "react";
import { auth } from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "./lib/userStore";

const App = () => {
  const {currentUser, isLoading,fetchUserInfo} = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser);


  if(isLoading) return <div className="loading">Loading...</div>

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
