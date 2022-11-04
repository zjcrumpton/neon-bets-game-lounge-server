import { Socket } from "socket.io";
import { Rooms } from "../server";

interface JoinRoomData {
    roomId: string;
    playerName: string;
}

export const handleJoinRoom = (socket: Socket, data: JoinRoomData) => {
    const room = Object.values(Rooms).find((room) => room.id === data.roomId);
    if (room) {
        room.addPlayer(socket, data.playerName);
    }
};
