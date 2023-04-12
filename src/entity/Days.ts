import { Entity, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Events } from './Events';
import { Tasks } from './Tasks';
import { Base } from '../utils/base';

@Entity()
export class Days extends Base {
  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  theme: string;

  @Column()
  eventId: number;

  @OneToMany(() => Events, (events) => events.day)
  events: Events[];

  @ManyToMany(() => Tasks, (task) => task.dayId)
  @JoinTable()
  tasks: Tasks[];
}
