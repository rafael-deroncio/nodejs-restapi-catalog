import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity({ name: 'categories', database: 'catalog' })
export class ProductEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price!: number;

    @Column()
    stock!: number;

    @Column()
    active!: boolean;

    @ManyToOne(() => CategoryEntity, category => category.products)
    category!: CategoryEntity;

    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;
}