import { Socket } from "socket.io";
import { Rooms } from "../server";
import { GameEvent } from "../types/GameEvent";

interface JoinRoomData {
    code: string;
    playerName: string;
}

export const handleJoinRoom = (socket: Socket, data: JoinRoomData) => {
    const room = Object.values(Rooms).find((room) => room.code === data.code);
    if (room && !room.players[socket.id]) {
        console.log(`adding player ${data.playerName} to room ${room.code}`);
        room.addPlayer(socket, data.playerName);
        socket.emit(GameEvent.JOINED_ROOM, room.code);
    }
};
