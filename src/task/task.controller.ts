import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { FindAllParemeters, TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskservice: TaskService){}

    @Post()
    create(@Body() task: TaskDto) {
       this.taskservice.create(task);
    }

    @Get('/:id')
    findById(@Param('id') id:string): TaskDto {
        return this.taskservice.findById(id);
    }

    @Get()
    findAll(@Query() params: FindAllParemeters): TaskDto[] {
        return this.taskservice.fidAll(params);
    }

    @Put()
    update(@Body() task: TaskDto) {
        this.taskservice.update(task);
    }

    @Delete('/:id')
    remove(@Param('id') id:string) {
        return this.taskservice.remove(id);
    }

}
