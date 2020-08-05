import express from 'express';
import database from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

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
    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
            class_id,
            week_day : scheduleItem.week_day,
            from: convertHourToMinutes(scheduleItem.from),
            to: convertHourToMinutes(scheduleItem.to),
        };
    })

    await database('class_schedule').insert(classSchedule);

    return response.send();
});

export default routes;