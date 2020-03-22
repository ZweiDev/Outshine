import express from 'express';
import bodyParser from "body-parser";
import Outshine from "./model/outshine/Outshine";

const server: express.Application = express();

server.use(bodyParser.json());

const ALERT_KEY = process.env.ALERT_KEY || 'NULL';
const ALERT_SECRET = process.env.ALERT_SECRET || 'NULL';

const PORT = process.env.PORT || '1028';

let outshineMemory: Outshine = {
    enabled: false,
    location: null,
    actions: null,
    reason: null
};

server.post('/outshine/status', async function (req, res, next) {
    let requestBody = req.body;

    let alertKey = req.headers['outshine-key'];
    let alertSecret = req.headers['outshine-secret'];

    if (ALERT_KEY == alertKey && ALERT_SECRET == alertSecret) {
        try {
            let parsed: Outshine = requestBody as Outshine;
            outshineMemory = parsed;
            res.status(200).send("Posted !!");
        } catch (e) {
            console.error(e);
        }
    }
});

server.get('/outshine/status', async function (req, res, next) {
    res.status(200).send(outshineMemory);
});

server.post('/outshine/delete', async function (req, res, next) {
    let alertKey = req.headers['outshine-key'];
    let alertSecret = req.headers['outshine-secret'];

    if (ALERT_KEY == alertKey && ALERT_SECRET == alertSecret) {
        try {
            outshineMemory = {
                enabled: false,
                location: null,
                actions: null,
                reason: null
            };
            res.status(200).send("Resetted!");
        } catch (e) {
            console.error(e);
            res.status(400).send("Failed: " + e);
        }
    }
});

server.listen(PORT, function() {
    console.log('Outshine listening on port ' + PORT.toString());
});
