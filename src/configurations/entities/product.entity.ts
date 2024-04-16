import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity({ name: 'categories' })
export class ProductEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar' })
    name!: string;

    @Column({ type: 'varchar' })
    description!: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price!: number;

    @Column({ type: 'int' })
    stock!: number;

    @Column({ type: 'boolean', default: true })
    active!: boolean;

    @ManyToOne(() => CategoryEntity, category => category.products)
    category!: CategoryEntity;

    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;
}