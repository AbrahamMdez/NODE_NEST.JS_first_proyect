import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  const task = {
    "name": "name",
    "surname": "surname"
  };

  it('method getTasks GET should received a string', () => {
    expect(controller.getTasks()).toBe('Retornando tareas');

    expect(controller.getTasks()).not.toEqual('... tareas');
  });

  it('method createTaks POST should send a string', () => {
    expect(controller.createTaks(task)).toBe('Creating a task');
  });

  it('method updateTask PUT should send a string', () => {
    expect(controller.updateTask()).toEqual('Updating a task');

    expect(controller.updateTask()).not.toEqual('... a task');
  });

  it('method deleteTask DELETE should send a string', () => {
    expect(controller.deleteTask()).toBe('Deleting a task');
  });
});
