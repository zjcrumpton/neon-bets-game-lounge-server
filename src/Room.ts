import { Socket } from "socket.io";
import { Player } from "./types/Player";

export class Room {
    private _id: string;
    private _players: { [key: string]: Player };
    private static COUNT = 0;

    constructor() {
        this._id = `ROOM-${Room.COUNT}`;
    }

    public addPlayer(socket: Socket, name: string) {
        if (this._players[socket.id]) {
            return;
        }

        this._players[socket.id] = {
            id: socket.id,
            name,
            socket,
            roomId: this._id,
        };
    }

    public removePlayer(id: string) {
        if (this._players[id]) {
            delete this._players[id];
        }
    }

    get id() {
        return this._id;
    }
}
