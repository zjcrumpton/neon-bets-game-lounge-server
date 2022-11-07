import { Socket } from "socket.io";
import { io, Rooms } from "../server";
import { Game } from "../types/Game";
import { GameEvent } from "../types/GameEvent";

interface SelectGameData {
    roomCode: string,
    game: Game,
}

export const handleSelectGame = (socket: Socket, data: SelectGameData) => {
    const { game, roomCode } = data;
    const { id } = socket;
    const room = Rooms[roomCode];
    const player = room?.players[id];

    if (player) {
        room.setGame(game);
        io.to(room.code).emit(GameEvent.GAME_SELECTED, game);
        console.log(`${player.name} selected game: ${game}`);
    }
};
