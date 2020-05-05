const express = require('express');
const app = express();

app.get('/', (req, res) =>{
  return res.send({message: 'Tudo ok com metodo GET'})  
})

app.post('/', (req, res) =>{
    return res.send({message: 'Tudo ok com metodo POST'})  
  })
app.listen(3000);

module.exports = app;
