import { Socket } from 'socket.io';
import { Room } from '../Room';
import { Rooms } from '../server';
import { GameEvent } from '../types/GameEvent';
import { Player } from '../types/Player';

interface RoomData {
    name: string,
    code: string,
    players: Omit<Player, "socket">[],
}

interface NewRoomData {
    playerName: string,
    roomName?: string,
    roomCode?: string,
}

export const handleNewRoom = (socket: Socket, data: NewRoomData) => {
    const newRoom = new Room(data.roomName, data.roomCode);
    Rooms[newRoom.code] = newRoom;

    newRoom.addPlayer(socket, data.playerName);
    socket.emit(GameEvent.UPDATE_ROOMS, {
        rooms: Object.keys(Rooms),
    });

    const roomPayload: RoomData = {
        name: newRoom.name,
        code: newRoom.code,
        players: Object.values(newRoom.players).map(player => ({
            id: player.id,
            roomId: newRoom.code,
            name: player.name,
        })),
    }

    socket.emit(GameEvent.ROOM_CREATED, roomPayload);
};
