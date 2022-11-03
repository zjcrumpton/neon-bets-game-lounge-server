import { Request, Response } from 'express';
import { Room } from '../Room';
import { Rooms } from '../server';

export const handleNewRoom = (_req: Request, res: Response) => {
    const newRoom = new Room();
    Rooms[newRoom.id] = newRoom;

    res.status(201).json({
        msg: 'room succesfully created',
        roomId: newRoom.id,
    });

    console.log(Rooms)
};
