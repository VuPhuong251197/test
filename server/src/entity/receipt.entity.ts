import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255, name: "name_product" })
  nameProduct: string;

  @Column({ type: "varchar", length: 255 })
  code: string;

  @Column({ type: "varchar", length: 255 })
  unit: string;

  @Column({ type: "varchar", length: 255, name: "quantity_according" })
  quantityAccording: string;

  @Column({ type: "varchar", length: 255, name: "quantity_imported" })
  quantityImported: string;

  @Column({ type: "varchar", length: 255 })
  price: string;
}
