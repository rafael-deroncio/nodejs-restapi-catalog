import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({ name: 'products'})
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({ type: 'varchar' })
    name!: string;

    @Column({ type: 'varchar' })
    description!: string;

    @Column({ type: 'boolean', default: true })
    active!: boolean;

    @OneToMany(() => ProductEntity, product => product.category)
    products: ProductEntity | undefined;

    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;
}