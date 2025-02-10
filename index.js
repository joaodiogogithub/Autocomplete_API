const express = require('express');
const cors = require('cors');

const router = require('./src/routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
