import { Player } from "../../types/Player";
import { PokerPlayer } from "./PokerPlayer";

export class Table {
    private _seats: PokerPlayer[] = [];
    private _dealerIndex = 0;
    
    public joinTable(newPlayer: Player) {
        const pokerPlayer = new PokerPlayer(newPlayer.socket, newPlayer.name, newPlayer.roomId);
        this._seats.push(pokerPlayer);
    }

    get seats() {
        return this._seats;
    }

    get dealer() {
        return this._seats[this._dealerIndex];
    }

};
