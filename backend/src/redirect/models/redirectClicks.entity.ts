import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class RedirectClicksEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    redirectId: number;

    @Column({nullable: true})
    ip: string;

    @CreateDateColumn()
    clickedAt: Date;
}