const express = require('express');
const app = express();

app.use(express.static('client'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})
