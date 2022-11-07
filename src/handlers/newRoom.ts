import { Socket } from 'socket.io';
import { Room } from '../Room';
import { Rooms } from '../server';
import { GameEvent } from '../types/GameEvent';

interface NewRoomData {
    playerName: string,
    roomName?: string,
    roomCode?: string,
}

export const handleNewRoom = (socket: Socket, data: NewRoomData) => {
    const newRoom = new Room(data.roomName, data.roomCode);
    Rooms[newRoom.code] = newRoom;

    socket.join(newRoom.code);
    newRoom.addPlayer(socket, data.playerName);
    socket.emit(GameEvent.UPDATE_ROOMS, {
        rooms: Object.keys(Rooms),
    });

    socket.emit(GameEvent.ROOM_CREATED, newRoom.code);
};
