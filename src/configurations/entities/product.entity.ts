import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { Expose } from "class-transformer";

@Entity({ name: 'products' })
export class ProductEntity extends BaseEntity {
    
    @Expose()
    @PrimaryGeneratedColumn()
    id!: number;

    @Expose()
    @Column({ type: 'varchar' })
    name!: string;

    @Expose()
    @Column({ type: 'varchar' })
    description!: string;

    @Expose()
    @Column('decimal', { precision: 10, scale: 2 })
    price!: number;

    @Expose()
    @Column({ type: 'int' })
    stock!: number;

    @Expose()
    @Column({ type: 'boolean', default: true })
    active!: boolean;

    @Expose()
    @JoinColumn({ name: 'category' })
    @ManyToOne(() => CategoryEntity, category => category.products)
    category!: CategoryEntity;

    @Expose()
    @CreateDateColumn()
    created!: Date;

    @Expose()
    @UpdateDateColumn()
    updated!: Date;
}