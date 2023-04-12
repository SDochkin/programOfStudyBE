import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Days } from './entity/Days';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll(): Promise<Days[]> {
    return this.appService.getAll();
  }
}
