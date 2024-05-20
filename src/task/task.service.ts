import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { task } from './task.model';
import { User } from 'src/auth/user.schema';

@Injectable()
export class TaskService {
    constructor(@InjectModel('task') private readonly taskModel: Model<task>) { }

    async getTasks(user: User) {
        const list_of_tasks = await this.taskModel.find({user: user._id});
        const result = new Object({ tasks: list_of_tasks });
        console.log(result);
        return result;
    }
    async create(name: string, user: User) {
        const newTask = new this.taskModel({ name: name, user: user._id, status: false });
        const result = await newTask.save();
        console.log(result);
        return result;
    }
    async updateStatus(user: User, param: { taskId: number }) {
        let currentTask = await this.taskModel.findById({user: user._id, _id: param.taskId});
        currentTask.status = !currentTask.status;
        console.log(currentTask);
        currentTask.save();
        return currentTask;
    }
}
