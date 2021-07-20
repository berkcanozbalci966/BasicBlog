import express from 'express';

const cors = require('cors')

const app = express();
const PORT = 8000;

app.use(cors())

app.get('/', (req, res) => {
    res.json({ "yes": "yes" })
})

app.listen(PORT, () => { console.log(`server runnig on ${PORT}`) })