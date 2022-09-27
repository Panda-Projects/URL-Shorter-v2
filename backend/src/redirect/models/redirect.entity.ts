import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

    @Column()
    clicks: number;

    @Column()
    date: Date;
}