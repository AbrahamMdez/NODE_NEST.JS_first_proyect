import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { request, Response } from 'express';

@Controller('tasks')
export class TasksController {
    
    //Esto es un decorador, podemos dejar solo el metodo @GET y nos llevará a la ruta que tengamos en el controlador,
    //pero si le añadimos algo dentro del decorador, nos llevára a esa ruta, no a la ruta por defecto del controlador
    //Ser´´ia así @Get('/test')
    @Get()
    //Esto seria el metodo sin express
    getTasks(): {hello: string} {
        return {"hello": "bro"};
    }

    //Aqui usando express, con request, response
    /* getTasks(@Req() req, @Res() res) {
        return res.send('Hello World');
    } */

    @Post()
    //Le pasamos el requerimiento @Body y le decimos que se va a llamar tarea
    createTaks(@Body() task: CreateTaskDto): string {
        return 'Creating a task';
    }

    @Put(':id')
    //A la hora de actualizar una tarea, le pasamos en el body la tarea a instanciar y como parametro su id
    updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
        console.log(task)
        console.log(id)
        return 'Updating a task';
    }

    @Delete(':id')
    //Aqui le decimos que vamos a recibir un parametro y que va a ser un id. Hay que importar Param arriba con los demas metodos
    deleteTask(@Param('id') id): string {
        console.log(id);
        return `Deleting a task number: ${id}`;
    }
}

