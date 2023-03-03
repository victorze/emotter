import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Emot extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string
}
