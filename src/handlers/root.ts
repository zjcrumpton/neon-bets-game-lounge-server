import { Request, Response } from "express";

export const handleRoot = (_req: Request, res: Response) => {
    res.json('Server is up and running');
};
