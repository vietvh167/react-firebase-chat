import Detail from "./components/detail/detail";
import Chat from "./components/chat/chat";
import List from "./components/list/list";
import Notification from "./components/notification/notification";
import Login from "./components/login/login";
import { useEffect } from "react";
import { auth } from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const user = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });

    return () => {
      unSub();
    };
  }, []);

  return (
    <div className="container">
      {user ? (
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
