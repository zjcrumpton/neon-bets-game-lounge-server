import express from 'express';
import HTTP from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import { Room } from './Room';

const app = express();
const http = HTTP.createServer(app);
const io = new Server(http, {
    cors: {
        origin: '*',
    }
});

app.use(cors({
    origin: '*',
}));

const Rooms: { [key: string]: Room } = {};

export { io, app, Rooms };

export default http;
