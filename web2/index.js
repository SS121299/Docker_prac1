const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello from Web Server 2')
})

app.listen(3000, () => console.log('Server running on 3000'))

