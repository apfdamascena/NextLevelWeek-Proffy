import {Request, Response} from 'express';
import database from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassControler {
    async index(request: Request, response: Response){
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if(!week_day || !subject || !time){
            return response.status(400).json({
                error: "missing filterst o search classes"
            });
        }

        const timeMinutes = convertHourToMinutes(time);

        const classes = await database('classes')
            .where('classes.subject', '=', subject)
        return response.send();
    }
    
    async create(request: Request, response: Response){
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        const transaction = await database.transaction();
    
        try {
            const insertedUserId = await transaction('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
        
            const user_id = insertedUserId[0];
        
            const insertedClassesId = await transaction('classes').insert({
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
        
            await transaction('class_schedule').insert(classSchedule);
            await transaction.commit();
    
            return response.status(201).send();
        } catch(error){
            await transaction.rollback();
            return response.status(400).json({
                error: "unexpected error"
            })
        }
    }
}