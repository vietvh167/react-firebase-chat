import {
  collection,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import "./addUser.css";
import { db } from "../../../../lib/firebase";
import { get, set } from "firebase/database";
import { useState } from "react";
import { create } from "zustand";

const AddUser = () => {
  const [user, setUser] = useState(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const usrename = formData.get("username");

    try {
      const userRef = collection(db, "users");

      // Create a query against the collection.
      const q = query(userRef, where("username", "==", usrename));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setUser(querySnapshot.docs[0].data());
      }
    } catch (error) {
      console.log(err);
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const usersChatRef = collection(db, "userchats");
    try {
      const newChatRef = doc(chatRef);
      await setDoc(chatRef, {
        createAt: serverTimestamp(),
        messages: [],
      });
      console.log(newChatRef.id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="addUser">
      <form action="" onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      {user && (
        <div className="user">
          <div className="detail">
            <img src={user.avatar || "./avatar.png"} alt="" />
            <span>Hoang Viet</span>
          </div>
          <button onClick={handleAdd}>Add User</button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
