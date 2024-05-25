import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {

    private tasks: TaskDto[] = [];

    create(task: TaskDto) {
        this.tasks.push(task);
        console.log(this.tasks);
    }

    findById(id: string): TaskDto {
       const foundTask = this.tasks.filter(t => t.id === id);
       console.log('FOUND TASK:', foundTask);

        if(foundTask.length) {
            return foundTask[0]
        }
        
        throw new HttpException(`Task with id ${id} not found`, HttpStatus.NOT_FOUND);
    }
}
