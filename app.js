import express from 'express'
import bodyParser from 'body-parser';
import { itprofessionalController } from './controller/itprofessional-controller.js';
const app = express();

const port = 80;

app.listen(port, () => {
    console.log('local server http://localhost:' + port);
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const ITController = new itprofessionalController();
//GET obtener datos
app.get('/itprofessional', async (request, response) => {
    try {
        const data = await ITController.findAll();
        response.send(data);
    } catch (err) {
        console.log(err);
        response.sendStatus(500);
    }
});

app.get('/api/2022/holamundo/:name', (request, response) =>
{
    let hola = { message: "hello " + request.params.name};
    response.send(hola);
});

app.get('/itprofessional/:id/', async (request, response) => {
    try {
        const data = await ITController.findById(request.params.id);
        response.send(data);
    } catch (err) {
        console.log(err);
        response.sendStatus(404);
    }
})


//POST guardar datos
app.post('/itprofessional/', async (request, response) => {
    console.log(request.url, request.body);
    response.sendStatus(200);
})

//PUT para actualizar datos


//DELETE para borrar datos