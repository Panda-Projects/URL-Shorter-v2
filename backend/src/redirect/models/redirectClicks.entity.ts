import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class RedirectClicksEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    redirectId: number;

    @Column({nullable: true})
    ip: string;

    @Column({default: 0})
    lat: string

    @Column({default: 0})
    lon: string

    @Column({default: "local"})
    city: string

    @CreateDateColumn()
    clickedAt: Date;
}