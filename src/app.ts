import { PORT } from './constants/env';
import { registerRoutes } from './routes';
import http from './server';

registerRoutes();

http.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
