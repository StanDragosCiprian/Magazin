import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class clothes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  currency: string;

  @Column()
  desctiption: string;

  @Column()
  color: string;

  @Column()
  size: number;

  @Column()
  style: string;

  @Column()
  image: string;
}
