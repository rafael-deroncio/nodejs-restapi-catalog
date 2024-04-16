import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({ name: 'products', database: 'catalog' })
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column({ default: true })
    active!: boolean;

    @OneToMany(() => ProductEntity, product => product.category)
    products: ProductEntity | undefined;

    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;
}