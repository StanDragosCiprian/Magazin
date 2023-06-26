import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Clothe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
