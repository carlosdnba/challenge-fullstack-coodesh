import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('transactions')
export default class Transaction {
  @PrimaryColumn()
  id: string;

  @Column()
  type: number;

  @Column()
  date: string;

  @Column()
  product: string;

  @Column()
  value: number;

  @Column()
  salesPerson: string;
}
