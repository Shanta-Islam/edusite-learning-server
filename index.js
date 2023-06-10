const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('edusite learning Course API Running');
})

app.listen(port, () => {
    console.log(`edusite API Running In PORT : ${port}`);
})