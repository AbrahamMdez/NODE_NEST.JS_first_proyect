import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './Interfaces/Task';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {

    //Aqui le decimos que la propiedad Task, sera un array de la interface Task
    //Este sería un ejemplo teniendo datos internos, sin BBDD
    /* tasks: Task[] = [
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
    } */

    //ESTE EJEMPLO SERÍA USANDO YA MONGODB COMO BBDD
    constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

    async getTasks() {
        return await this.taskModel.find();
    }

    async getTask(id: string) {
        return await this.taskModel.findById(id);
    }

    createTask(task: CreateTaskDto) {
        const newTask = new this.taskModel(task)
        console.log(newTask)
        return 'saved';
    }
}
