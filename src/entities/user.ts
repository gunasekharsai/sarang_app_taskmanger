import { Field, Int, ObjectType } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm"

@Entity()
@ObjectType()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(()=>Int)
    id: number

    @Field(()=> String)
    @CreateDateColumn()
    created: Date

    @Field(()=>String)
    @UpdateDateColumn()
    updated: Date

    @Field(()=> String)
    @Column()
    title: string

    @Field(()=> Boolean)
    @Column()
    completed :boolean
}
