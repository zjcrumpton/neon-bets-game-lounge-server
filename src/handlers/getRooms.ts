import { Request, Response } from "express";
import { Rooms } from "../server";

export const handleGetRooms = (_req: Request, res: Response) => {
    const respData = {
        rooms: Object.keys(Rooms)
    };

    res.json(respData);
};
