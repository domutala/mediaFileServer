import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Media extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  size: number;

  @Column()
  type: string;

  @Column({ type: "longtext", nullable: true })
  path: string;

  //@Column()
  // @CreateDateColumn()
  // createdAt: Date;

  // @Column()
  // @UpdateDateColumn()
  // updatedAt: Date;
}
