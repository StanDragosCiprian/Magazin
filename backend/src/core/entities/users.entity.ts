import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  users_id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  emai: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  order: string;
}
