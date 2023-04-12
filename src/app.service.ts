import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Days } from './entity/Days';
import { Repository } from 'typeorm';
import { promises } from 'dns';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Days) private daysRepository: Repository<Days>,
  ) {}

  getAll(): Promise<Days[]> {
    return this.daysRepository.find();
  }
}
