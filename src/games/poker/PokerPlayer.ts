import { Socket } from "socket.io";
import { Player } from "../../types/Player";

export class PokerPlayer implements Player {
    private _id: string;
    private _name: string;
    private _chips: number;
    private _socket: Socket;
    private _roomId: string;
    private static PLAYER_COUNT = 1;

    constructor(socket: Socket, name: string = `Player-${PokerPlayer.PLAYER_COUNT}`, roomId: string, startingChips: number = 1000) {
        this._name = name;
        this._chips = startingChips;
        this._roomId = roomId;
        this._socket = socket;
        PokerPlayer.PLAYER_COUNT++;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get roomId() {
        return this._roomId;
    }

    get socket() {
        return this._socket;
    }

    get chips() {
        return this._chips;
    }
}
