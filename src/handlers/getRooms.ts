import { Request, Response } from "express";
import { Rooms } from "../server";

export const handleGetRooms = (_req: Request, res: Response) => {
    const roomData = [];
    const roomKeys = Object.keys(Rooms);
    roomKeys.forEach((key) => {
        roomData.push({
            id: key,
            name: Rooms[key].name,
            playerCount: Rooms[key].playerCount,
        });
    });

    const respData = {
        rooms: roomData,
    };

    res.json(respData);
};
