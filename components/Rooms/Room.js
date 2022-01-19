import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Input,
} from "@chakra-ui/react";
import { useContext, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../auth/firebase";

import { useRouter } from "next/router";
import ChatContent from "../Chat/ChatContent";

import io from "socket.io-client";
import { Context } from "../../context";
const socket = io.connect("http://localhost:3001");

function Room() {
  const [user] = useAuthState(auth);
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const { handleLogout } = useContext(Context);

  const joinRoom = () => {
    if (user !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  return (
    <div
      style={{
        marginLeft: "20px",
      }}
      className="App"
    >
      {!showChat ? (
        <div className="joinChatContainer">
          <br />
          <h3>Join A Chat</h3>

          <Input
            w="100%"
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <br />
          <Button mt="20px" onClick={joinRoom}>
            Join A Room
          </Button>
          <Button mt="20px" bg="blue" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <ChatContent
          socket={socket}
          username={user?.reloadUserInfo.screenName}
          room={room}
        />
      )}
    </div>
  );
}

export default Room;
