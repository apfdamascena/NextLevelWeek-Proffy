import express from 'express';
import database from './database/connection';

const routes = express.Router();

routes.post('/classes', async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    const insertedUserId = await database('users').insert({
        name,
        avatar,
        whatsapp,
        bio
    });

    const user_id = insertedUserId[0];

    const insertedClassesId = await database('classes').insert({
        subject,
        cost,
        user_id
    });

    const class_id = insertedClassesId[0];

    return response.send();
});

export default routes;