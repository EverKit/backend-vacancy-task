import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

(async () => {
    const host = process.env.host || 'localhost';
    const port = process.env.port || 3000;
    
    const server = express();
    const router = express.Router();

    router.use('/', swaggerUi.serve);
    router.get('/', swaggerUi.setup(swaggerDocument));
    
    server.use(router);
    
    await server.listen(port, host);
    console.log(`Server started on http://${host}:${port}`);
})();