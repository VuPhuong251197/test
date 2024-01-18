import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Receipt } from "./receipt.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255, name: "name_shipper" })
  nameShipper: string;

  @Column({ type: "varchar", length: 255 })
  follow: string;

  @Column()
  number: number;

  @Column()
  date: number;

  @Column()
  month: number;

  @Column()
  year: number;

  @Column({ type: "varchar", length: 255 })
  of: string;

  @Column({ type: "varchar", length: 255, name: "import_at_warehouse" })
  importAtWarehouse: string;

  @Column({ type: "varchar", length: 255 })
  address: string;
}
