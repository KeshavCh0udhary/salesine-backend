import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMain(): any {
    return {
      name: 'task-manager-api',
      version: '0.0.1',
      description: 'REST API with NESTJS and MONGODB',
      author: 'Krishna Keshav',
    };
  }
}