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

app.get('/api/2022/holamundo/:name', (request, response) => {
    let hola = { message: "hello " + request.params.name };
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
    /*if(request.headers.clave_secreta && request.headers.clave_secreta == "QWERTY")
    {
        console.log("OK secret key");
        response.sendStatus(200);
    }else{
        console.log("Error secret key");
        response.sendStatus(500);
    }*/
    try {
        var result = await ITController.save(request.body)
        console.log(result);
        response.sendStatus(200);
    } catch (err) {
        console.log(err);
        response.sendStatus(500);
    }
})

//PUT - PATCH para actualizar datos
app.put('/itprofessional/:id', async (request, response) => {
    try {
        console.log(request.params.id);

        var result = await ITController.update(request.params.id, { verifyed: true });
        console.log(result);
        response.sendStatus(200);
    } catch (err) {
        console.log(err);
        response.sendStatus(500);
    }
})

//DELETE para borrar datos

app.delete('/itprofessional/:id', async (request, response) => {
    console.log('delete method');
    try {
        const result = await ITController.delete(request.params.id);
        console.log(result);
        response.sendStatus(200);
    } catch (err) {
        console.log(err)
        response.sendStatus(500);
    }
})