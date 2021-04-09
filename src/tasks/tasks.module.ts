//Este archivo module, es el indice de toda la parte de tasks, hay que decirle al module que atributos tiene con el dentro de @Module
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
    imports: [],
    controllers: [TasksController],
    providers: [TasksService]
})

export class TasksModule {}
