import { Socket } from "socket.io/dist/socket";
import { GameEvent } from "../types/GameEvent";
import { handleJoinRoom } from "./joinRoom";
import { handleNewRoom } from "./newRoom";
import { handleSelectGame } from "./selectGame";

export const onConnection = (socket: Socket) => {
    console.log('new client connected:', socket.id);
    registerGameEvents(socket);
};

const registerGameEvents = (socket: Socket) => {
    socket.on(GameEvent.NEW_ROOM, (data) => handleNewRoom(socket, data));
    socket.on(GameEvent.JOIN_ROOM, (data) => handleJoinRoom(socket, data));
    socket.on(GameEvent.SELECT_GAME, (data) => handleSelectGame(socket, data));
};
