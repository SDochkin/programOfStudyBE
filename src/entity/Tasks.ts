import { Entity, Column, ManyToMany } from 'typeorm';
import { Days } from './Days';
import { Base } from '../utils/base';

@Entity()
export class Tasks extends Base {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  problem: string;

  @Column()
  comment: string;

  @ManyToMany(() => Days, (day) => day.tasks)
  dayId: Days;
}
