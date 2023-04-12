import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Days } from './entity/Days';
import { Events } from './entity/Events';
import { Tasks } from './entity/Tasks';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const dataSourceOptions: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'skilled',
  password: '123',
  database: 'pos',
  synchronize: false,
  logging: false,
  entities: ['build/entity/*.js'],
  migrations: ['build/migrations/*.js'],
  subscribers: [],
};
export const AppDataSource = new DataSource(dataSourceOptions);
