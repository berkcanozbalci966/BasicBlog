import express from 'express';

const app = express();
const PORT = 8000;
app.get('/', (req, res) => {
    res.send("Typescript Express is working!")
})

app.listen(PORT, () => { console.log(`server runnig on ${PORT}`) })