const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware a JSON kérések kezeléséhez
app.use(express.json());

// Egyszerű GET végpont
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Szerver indítása
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});