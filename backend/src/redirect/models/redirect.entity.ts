import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class RedirectEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    code: string;

    @Column()
    userId: number;

    @Column()
    redirect_url: string;

    @CreateDateColumn()
    date: Date;
}