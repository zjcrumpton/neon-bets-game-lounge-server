import { app, io } from "./server";
import * as SocketEvents from './constants/SocketEvents';
import * as Routes from './constants/routes';
import * as handlers from "./handlers";

export const registerRoutes = () => {
    app.get(Routes.ROOT, handlers.handleRoot);
    app.get(Routes.GET_ROOMS, handlers.handleGetRooms);
        
    io.on(SocketEvents.CONNECTION, handlers.onConnection);
};
