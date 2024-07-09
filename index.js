const express = require('express');
const app = express();
const port = 3001;
const collaborationRoutes = require('./Routes/CollaborationRoutes');
const commentaireRoutes = require('./Routes/CommentaireRoutes');
const tacheRoutes = require('./Routes/TacheRoutes');

app.use(express.json());

app.use('/collaboration', collaborationRoutes);
app.use('/commentaire', commentaireRoutes);
app.use('/tache', tacheRoutes);

app.listen(port, () => {
  console.log(`Votre serveur est lancé sur http://127.0.0.1:${port}`);
});

