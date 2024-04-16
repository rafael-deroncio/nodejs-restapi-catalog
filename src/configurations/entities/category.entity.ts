import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";
import { Expose } from "class-transformer";

@Entity({ name: 'categories'})
export class CategoryEntity extends BaseEntity {
    
    @Expose()
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Expose()
    @Column({ type: 'varchar' })
    name!: string;

    @Expose()
    @Column({ type: 'varchar' })
    description!: string;

    @Expose()
    @Column({ type: 'boolean', default: true })
    active!: boolean;

    @Expose()
    @OneToMany(() => ProductEntity, product => product.category, {eager: true, cascade: true})
    products: ProductEntity | undefined;

    @Expose()
    @CreateDateColumn()
    created!: Date;

    @Expose()
    @UpdateDateColumn()
    updated!: Date;
}