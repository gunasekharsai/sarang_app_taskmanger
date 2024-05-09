import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    task: string

    @Column()
    description: string

    @Column()
    status: boolean
}


export default User