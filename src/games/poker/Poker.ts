import { Deck } from "./Deck";
import { Table } from "./Table";

export class Poker {
    private _deck: Deck = new Deck();
    private _table: Table;
    private _bigBlind: number = 50;

    constructor() {
        this._table = new Table();
    }

    public startGame(bigBlind?: number) {
        if (this._table.seats.length >= 2) {
            this._bigBlind = bigBlind || this._bigBlind;
            this._deck.shuffle();

            console.log('start game');
        }
    }

    get bigBlind() {
        return this._bigBlind;
    }

    get smallBlind() {
        return this._bigBlind / 2;
    }

    get table() {
        return this._table;
    }
}
