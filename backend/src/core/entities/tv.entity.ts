import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class tv {
  @PrimaryGeneratedColumn()
  tv_id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  currency: string;

  @Column()
  desctiption: string;

  @Column()
  image: string;

  @Column()
  diameter: number;

  @Column()
  rezolution: string;
}
