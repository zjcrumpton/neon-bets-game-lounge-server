import { Socket } from 'socket.io';
import { Room } from '../Room';
import { Rooms } from '../server';

interface NewRoomData {
    playerName: string,
}

export const handleNewRoom = (socket: Socket, data: NewRoomData) => {
    const newRoom = new Room();
    Rooms[newRoom.id] = newRoom;

    socket.join(newRoom.id);
    newRoom.addPlayer(socket, data.playerName);
};
