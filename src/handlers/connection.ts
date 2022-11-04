import { Socket } from "socket.io/dist/socket";
import { GameEvent } from "../types/GameEvent";
import { handlejoinRoom } from "./joinRoom";
import { handleNewRoom } from "./newRoom";

export const onConnection = (socket: Socket) => {
    console.log('new client connected:', socket.id);
    registerGameEvents(socket);
};

const registerGameEvents = (socket: Socket) => {
    socket.on(GameEvent.NEW_ROOM, (data) => handleNewRoom(socket, data));
    socket.on(GameEvent.JOIN_ROOM, (data) => handlejoinRoom(socket, data));
};
