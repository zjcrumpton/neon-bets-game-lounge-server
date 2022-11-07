import { Socket } from "socket.io";
import { GameEvent } from "./types/GameEvent";
import { Player } from "./types/Player";
import { v4 as uuid } from 'uuid';
import { Rooms } from "./server";
import { Game } from "./types/Game";

export class Room {
    private _name: string;
    private _code: string;
    private _players: { [key: string]: Player } = {};
    private _gameType: Game;
    private static COUNT = 0;

    constructor(name?: string, code?: string) {
        this._name = name ?? `ROOM-${Room.COUNT}`;

        this._code = code || uuid();
        while (Rooms[this._code]) {
            this._code = uuid();
        }

        Room.COUNT++;
    }

    public addPlayer(socket: Socket, name: string) {
        if (this._players[socket.id]) {
            return;
        }

        this._players[socket.id] = {
            id: socket.id,
            name,
            socket,
            roomId: this._name,
        };

        socket.join(this._code);

        socket.emit(GameEvent.JOINED_ROOM, {
            roomId: this._name,
        });
    }

    public removePlayer(id: string) {
        if (this._players[id]) {
            delete this._players[id];
        }
    }

    public setGame(game: Game) {
        this._gameType = game;
    }

    get name() {
        return this._name;
    }

    get code() {
        return this._code;
    }

    get playerCount() {
        return Object.keys(this._players).length;
    }

    get players() {
        return this._players;
    }

    get game() {
        return this._gameType;
    }
}
