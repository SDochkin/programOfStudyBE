import { Entity, Column, ManyToOne } from 'typeorm';
import { Days } from './Days';
import { Base } from '../utils/base';

@Entity()
export class Events extends Base {
  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Days, (day) => day.eventId)
  day: Days;
}
