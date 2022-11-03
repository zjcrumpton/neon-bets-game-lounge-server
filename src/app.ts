import express from 'express';
import HTTP from 'http';
import cors from 'cors';

const app = express();
const http = HTTP.createServer(app);
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.json('Server is up and running')
});

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
