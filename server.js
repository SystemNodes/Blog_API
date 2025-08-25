const express = require('express');
const app = express();
const PORT = 1800;

app.use(express.json());

const postRouter = require('./routers/postRoutes');
const likeRouter = require('./routers/likeRoutes');
const commentRouter = require('./routers/commentRoutes');

app.use(postRouter);
app.use(likeRouter);
app.use(commentRouter);

app.listen(PORT, () => {
  console.log(`My app is running on port: ${PORT}`);
});
