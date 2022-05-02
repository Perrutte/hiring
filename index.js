const express = require('express')

const app = express();
const port = 3000;
app.use(express.json())

app.post('/', (req, res) => {
})

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

