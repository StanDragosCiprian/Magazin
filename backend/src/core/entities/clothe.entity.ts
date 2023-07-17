import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class clothes {
  @PrimaryGeneratedColumn()
  product_id: number;

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
  size: string;

  @Column()
  style: string;

  @Column()
  image: string;
}
