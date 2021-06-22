const express =require('express');

const app = express();

app.use(express.static('./dist/api-marvel'))

app.get('/*', (req,res) => {
    res.sendFile('index.html', {root: 'dist/api-marvel'})
});

app.listen(process.env.PORT || 8090 )
    