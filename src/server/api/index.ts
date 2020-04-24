import express from 'express';

const api = express.Router();

api.get('/example', (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .send(
      '<h2>This is an example route, please edit the route at src/server/api/index.ts or add a new one</h2>'
    );
});

export default api;
