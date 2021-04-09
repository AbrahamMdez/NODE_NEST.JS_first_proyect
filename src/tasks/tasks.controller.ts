import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    
    //Esto es un decorador, podemos dejar solo el metodo @GET y nos llevará a la ruta que tengamos en el controlador,
    //pero si le añadimos algo dentro del decorador, nos llevára a esa ruta, no a la ruta por defecto del controlador
    //Ser´´ia así @Get('/test')
    @Get()
    getTasks(): string {
        return 'Retornando tareas';
    }

    @Post()
    //Le pasamos el requerimiento @Body y le decimos que se va a llamar tarea
    createTaks(@Body() task): string {
        console.log(task)
        return 'Creating a task';
    }

    @Put()
    updateTask(): string {
        return 'Updating a task'
    }

    @Delete()
    deleteTask(): string {
        return 'Deleting a task'
    }
}
