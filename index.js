const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        tshirt: "zara",
        size: "large"
    });
});

app.post('/:id', (req, res) => {

    const { id } = req.params;
    const { body } = req.body;

    if (!body) {
        res.status(418).send({ message: "We need a body!" });
    }

    res.send({
        id: `${id}`,
        tshirt: `${body.tshirt}`,
        size: `${body.size}`
    });
});

app.listen(
    PORT,
    () => {
        console.log(`it's alive on http://localhost:${PORT}`)
    }
);