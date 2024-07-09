const express = require('express');
const collaborationRoutes = require('./Routes/CollaborationRoutes');
const app = express();
const port = 3001;

app.use(express.json());


app.get('/hello', (request, result) => {
  result.send('Hello World!');
});


app.use('/collaboration', collaborationRoutes);


app.listen(port, () => {
  console.log(`Votre serveur est lancé sur http://127.0.0.1:${port}`);
});

