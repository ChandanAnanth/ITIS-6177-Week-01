const app = require('express')();

app.get('/', (req, res ) => 
    res.json({ message: 'I love Docker 🐳' }) 
);

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );