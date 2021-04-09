import { Injectable } from '@nestjs/common';

import { Task } from './Interfaces/Task';

@Injectable()
export class TasksService {

    //Aqui le decimos que la propiedad Task, sera un array de la interface Task
    tasks: Task[] = [
        {
            id: 1,
            name: 'name',
            description: 'description',
            done: true
        },
        {
            id: 2,
            name: 'name',
            description: 'description',
            done: true
        },
        {
            id: 3,
            name: 'name',
            description: 'description',
            done: true
        }
    ];

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(id: number): Task {
        return this.tasks.find( task => task.id === id );
    }
}
