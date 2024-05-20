import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import TaskController from './task.controller';
import { TaskService } from './task.service';
import { taskSchema } from './task.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'task', schema: taskSchema }]),
    AuthModule
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
