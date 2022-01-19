import { useEffect } from "react";
import { useRouter } from "next/router";
import Main from "../components/Main/Main";
import Login from "../components/Login/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../auth/firebase";

export default function Chat() {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const sendData = async () => {
    console.log(currentUser);
  };

  return (
    <>
      {user ? (
        <>
          <Main />
          <button onClick={sendData}>Click Me</button>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
