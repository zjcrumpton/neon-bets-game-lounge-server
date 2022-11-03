import { app, io } from "./server";
import * as SocketEvents from './constants/SocketEvents';
import * as Routes from './constants/routes';
import * as handlers from "./handlers";

export const registerRoutes = () => {
    app.get(Routes.ROOT, handlers.handleRoot);
    
    app.get(Routes.NEW_ROOM, handlers.handleNewRoom);
    
    io.on(SocketEvents.CONNECTION, handlers.onConnection);
};
