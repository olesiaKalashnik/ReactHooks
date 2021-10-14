import path from 'path';
import fs from 'fs';

const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve()), ms);

// exported request handler
export default async function handler(req, res) {
    const method = req?.method;
    const id = parseInt(req?.query.id);
    const recordFromBody = req?.body;

    if (method !== 'PUT') {
        res.status(501).send(`Method ${method} not implemented`);
    } else {
        const jsonFile = path.resolve('./', 'db.json');
        try {
            const readFileData = await readFile(jsonFile);
            await delay(1000);
            const speakers = JSON.parse(readFileData).speakers;
            if (!speakers) {
                res.status(404).send('Error: 404');
            } else {
                const modifiedSpeakers = speakers.map((speaker) =>
                    speaker.id === id ? recordFromBody : speaker
                );
                writeFile(
                    jsonFile,
                    JSON.stringify({ speakers: modifiedSpeakers }, null, 2)
                );
                res.setHeader('Conent-Type', 'application/json');
                res.status(200).json(recordFromBody);
                console.log(`PUT /api/speakers/${id} status: 200`);
            }
        } catch (ex) {
            console.log('/api/speakers error: ', ex);
        }
    }
}
